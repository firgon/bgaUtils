import re
from dataclasses import dataclass

import Utils


@dataclass
class Field:
    possible_types = [int, str, list]
    type_strings = {
        int: "'int'",
        list: "'obj'"
    }

    DEFAULT_STR = "''"
    DEFAULT_VALUES = {
        int: 0,
        str: DEFAULT_STR,
        list: "[]"
    }

    name: str
    type: int.__class__ | str.__class__ | list.__class__

    def field_to_object(self):
        """returns objects for php as :
        'location' => 'biome_location', if type == str
        'state' => ['biome_state', 'int'], if type == int or list
        """
        if self.type == int:
            return f"['{Utils.snake_case(self.name)}', 'int']"
        if self.type == list:
            return f"['{Utils.snake_case(self.name)}', 'obj']"
        if self.type == str:
            return f"'{self.name}'"

    def to_sql(self):
        if self.type == int:
            return "int(10)"
        if self.type == list:
            return "JSON"
        if self.type == str:
            return "varchar(32)"

    def is_css(self):
        return self.name.startswith('css')


class ObjectList:
    OCCURRENCES = "occurrences"
    ID = "data_id"
    index = 1
    automatic_ID = False

    def __init__(self, data_id_needed: bool, fieldtypes: list[Field] = None):
        # add ID field if there is no in fieldtypes
        # (and prepare to add to objects)
        self.fieldnames = [field.name for field in fieldtypes
                           if field.name != self.OCCURRENCES]

        if self.ID not in self.fieldnames:
            fieldtypes.append(Field(self.ID, int))
            self.fieldnames.append(self.ID)
            self.automatic_ID = True

        self.fieldtypes = fieldtypes
        self.constants = dict()

        self.objects = list()

    def add(self, new_object: dict):
        if self.automatic_ID:
            new_object[self.ID] = self.index
            self.index += 1

        self.clean_values(new_object)

        # print(f"J'ajoute : {new_object}")

        self.objects.append(new_object)

    def create_constants(self):
        """check in str values if there is some recurrency
        then change str to constants"""
        all_words = list()
        # get all words used in cells
        for field in self.fieldtypes:
            if field.type == int:
                continue
            else:
                for row in self.objects:
                    words = re.findall("'[\\w ]{2,}'", row[field.name])
                    all_words.extend(words)
                    # if row[field.name] != self.DEFAULT_VALUES[str] \
                    #         or row[field.name] != self.DEFAULT_VALUES[list]:
                    #     for word in row[field.name].replace('[', '') \
                    #             .replace(']', '').split(','):
                    #         if not word.isnumeric() \
                    #                 and not word == self.DEFAULT_STR:
                    #             all_words.append(word.strip())

        all_recurrent_words = set([word for word in all_words
                                   if all_words.count(word) > 1])

        self.constants = dict()
        for word in all_recurrent_words:
            self.constants[word] = Utils.str_to_constant(word)

        self.apply_constants()

    def apply_constants(self):
        fields_to_check = [field.name for field in self.fieldtypes
                           if field.type != int
                           and not field.is_css()]
        for row in self.objects:
            for field in fields_to_check:
                for value, constant in self.constants.items():
                    if constant.isnumeric():
                        continue
                    row[field] = row[field].replace(value, constant)

    def clean_values(self, new_object):
        """attributes default values, delete unused keys, format values"""
        # remove unknown keys
        fields_to_delete = []
        for field in new_object.keys():
            if field not in self.fieldnames:
                fields_to_delete.append(field)
        for field in fields_to_delete:
            del new_object[field]

        # add a default value to unset keys and quote all strings
        for field in self.fieldtypes:
            if field.name not in new_object.keys():
                new_object[field.name] = \
                    Field.DEFAULT_VALUES[field.type]
            else:
                new_object[field.name] = \
                    self.quote_value(new_object[field.name], field.type)

    def quote_value(self, value: str, fieldtype=None):
        """add quotes around each string value"""

        if fieldtype is None:
            if value.isnumeric():
                fieldtype = int
            elif Utils.detect_array(value):
                fieldtype = list
            else:
                fieldtype = str
                value = str(value).strip()

        if fieldtype == int:
            return value

        if fieldtype == str:
            return Utils.make_str(value)

        if fieldtype == list:
            if not Utils.detect_array(value):
                return self.quote_value(Utils.make_array(value))
            else:
                value = value[1:-1]
                return Utils.make_array(
                    ", ".join(map(self.quote_value, value.split(','))))

        else:  # should be int
            return value

    def __str__(self):
        result = str(self.fieldnames) + "\n"
        for row in self.objects:
            result += str(list(row.values())) + "\n"
        return result

    def get_fieldtypes_for_php(self):
        return list([field for field in self.fieldtypes if not field.is_css()])

    def get_fieldnames_for_php(self):
        return list([field for field in self.fieldnames
                     if not field.startswith('css')])

    def get_fieldtypes_for_css(self):
        return list([field for field in self.fieldtypes if field.is_css()])

