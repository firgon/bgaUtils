import re
import os

from utils import Utils


def get_keys(text: str):
    return re.findall("{([A-Z_\\d]*)}", text)


class Printer:
    export_folder = Utils.EXPORT_FOLDER

    def __init__(self, choice):
        self.extension = Utils.get_file_extension(choice)

        with open(choice, "r", encoding='utf-8') as f:
            self.text = f.read()
            self.keys: set[str] = set(get_keys(self.text))

    def make_replacements(self, new_text: dict, text=None):
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

    def export(self, row: dict):
        if 'path' in row:
            path = self.export_folder + row['path'] + "/"
        else:
            path = self.export_folder

        # title = Utils.pascal_case(row['NAME']) + self.extension
        title = row['NAME'] + self.extension

        if not os.path.exists(path):
            os.makedirs(path)

        with open(path + title, "w", encoding='utf-8') as f:
            f.write(self.make_replacements(row))
