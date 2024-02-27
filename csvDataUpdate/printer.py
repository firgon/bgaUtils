import re
import os

from utils import Utils


def get_keys(text: str):
    return re.findall("{([A-Z_\\d]*)}", text)


class Printer:
    export_folder = Utils.EXPORT_FOLDER

    templates = [
        {
            'name': "TREOS runecards",
            'prefix': '''return [
            ''',
            'data': '''{ID} => $f([{INITIATIVE}, {COLOR}, {MOVES}, [{PATHS}]]),
            ''',
            'suffix': '''];
            '''
        },
        {
            'name': "TREOS eventcards",
            'prefix': '''return [
            ''',
            'data': '''{ID} => $f([clienttranslate('{TITLE}'), clienttranslate('{TEXT}'), {RULE}]),
            ''',
            'suffix': '''];
            '''
        },
        {
            'name': "TREOS quests",
            'prefix': '''return [
            ''',
            'data': '''{ID} => $f([{DECK}, clienttranslate('{TITLE}'), [{DESTINATION}], 
            clienttranslate('{TEXT}'), 
            {BONUS_COIN}, {BONUS_RUNE}, {BONUS_MISSION}]),
            ''',
            'suffix': '''];
            '''
        },
        {
            'name': "ADD Forest Shuffle cards (PHP)",
            'prefix': ''' ''',
            'data': '''{ID} => $f([{TYPE}, [{SPECIES}], [{TREE_SYMBOL}, EDGE_DECK]),
                ''',
            'suffix': '''
                '''
        },
        {
            'name': "ADD Forest Shuffle cards (JS)",
            'prefix': ''' ''',
            'data': '''{ID} : $f([{TYPE}, [{SPECIES}], [{TREE_SYMBOL}, EDGE_DECK]),
                ''',
            'suffix': '''
                '''
        },
        {
            'name': "ADD Forest Shuffle Species (JS)",
            'prefix': ''' ''',
            'data': '''
            {NAME} : {
                name: "{NAME}",
                nb: {NB},
                tags: [{TAGS}],
                cost: {COST},
                type: {TYPE},
                effect: "{EFFECT}",
                bonus: "{BONUS}",
                points: "{POINTS}",
            },
            
            ''',
            'suffix': '''
                '''

        }
    ]

    def __init__(self):
        choice = Utils.promptChoice("Choisissez un template : ", [(x['name'], x) for x in self.templates])

        print(choice)

        self.text = choice['data']
        self.keys: set[str] = set(get_keys(self.text))
        self.data = choice['prefix']
        self.suffix = choice['suffix']
        self.id = 1

    def make_replacements(self, new_text: dict, text=None):
        # skip empty dict
        if all([value.strip() == '' for key, value in new_text.items()]):
            return ''

        # add automatic id
        if 'ID' not in new_text:
            new_text['ID'] = str(self.id)
            self.id += 1

        if text is None:
            text = self.text
        for key in self.keys:
            if key.endswith('_SC'):
                text = text.replace('{' + key + '}', Utils.snake_case(new_text[key.replace('_SC', '')]))
            if key.endswith('_CC'):
                text = text.replace('{' + key + '}', Utils.camel_case(new_text[key.replace('_CC', '')]))
            if key.endswith('_PC'):
                text = text.replace('{' + key + '}', Utils.pascal_case(new_text[key.replace('_PC', '')]))
            else:
                text = text.replace('{' + key + '}', new_text[key])
        return text

    def finish(self):
        self.data += self.suffix
        print(self.data)

    def addRow(self, row: dict):
        self.data += self.make_replacements(row)
