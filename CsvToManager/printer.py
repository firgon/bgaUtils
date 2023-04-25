from utils import Utils
from .dataHandler import ObjectList, Field


class Printer:
    export_folder = Utils.EXPORT_FOLDER
    templates_folder = "templates/"
    manager_file = templates_folder + "manager.php"
    model_file = templates_folder + "model.php"
    js_file = templates_folder + "element.js"
    custom_fields = [
        # Field('data_id', int),
        Field('extra_datas', list)
    ]

    def __init__(self, object_list: ObjectList, namespace: str = None,
                 model: str = None):
        while namespace is None or len(namespace) < 3:
            namespace = input("Quel namespace/trigramme ?"
                              " (OASIS, RAUHA, DHER...) ")
            if namespace == '':
                exit()

        while model is None:
            model = input("quel nom utiliser ? ")

        self.ask_for_attributes()

        if model.endswith('s'):
            model = model[:-1]

        if model == '':
            exit()

        # MAKE MANAGER
        with open(self.manager_file, "r") as f:
            text = f.read()

        # replace all patterns in the read text
        text = self.make_replacements(text, namespace, model, object_list)

        exit_file = self.export_folder + model.capitalize() + "s.php"

        text += self.print_constants(object_list)
        text += self.print_dbmodel(object_list, model.lower())

        with open(exit_file, "w") as f:
            f.write(text)

        # MAKE MODEL
        with open(self.model_file, "r") as f:
            text = f.read()

        # replace all patterns in the read text
        text = self.make_replacements(text, namespace, model, object_list)

        exit_file = self.export_folder + model.capitalize() + ".php"

        with open(exit_file, "w") as f:
            f.write(text)

        #     MAKE CSS
        if object_list.css_ok:
            print('Je prépare le CSS ' + object_list.css_ok)
            css_file = self.export_folder + "to_copy.css"
            text = self.make_css(object_list, model)
            with open(css_file, 'w') as f:
                f.write(text)
            
        #     MAKE .JS
        js_file = self.export_folder + model + ".js"
        text = self.make_js(object_list, model)
        with open(js_file, 'w') as f:
            f.write(text)

    def make_replacements(self, text, namespace, model, object_list):
        return text.replace("{TRIGRAMME}", namespace) \
            .replace("{MODEL}", model.capitalize()) \
            .replace("{MODEL_LOWER}", model.lower()) \
            .replace("{NAME}", namespace.capitalize()) \
            .replace("{STRUCTURE}",
                     self.get_structure(object_list.get_fieldnames_for_php()))\
            .replace("{DATA}",
                     self.get_data(object_list.objects,
                                   object_list.get_fieldnames_for_php(),
                                   True)) \
            .replace("{CUSTOM_FIELDS}", self.list_custom_fields()) \
            .replace("{CUSTOM_FIELDS_EXTENDED}",
                     self.extended_list_custom_fields()) \
            .replace("{STATIC_STRUCTURE}", self.static_structure(object_list))

    @classmethod
    def get_structure(cls, fieldnames, bool_php=True):
        """create a list of data to be recorded in php file"""
        result = ''
        index = 0
        for field in fieldnames:
            if bool_php:
                result += f"'{field}' => $data[{index}],\n"
            else:
                result += f"{field}: data[{index}],\n"
            index += 1

        return result

    @classmethod
    def get_data(cls, objects: list[dict], fieldnames, bool_php):
        """create a list of function to create data on php file"""
        result = ''
        for row in objects:
            data = [row[field] for field in fieldnames]
            if bool_php:
                result += f"{row[ObjectList.ID]} => " \
                          f"$f([{', '.join(map(str, data))}]),\n"
            else:
                result += f"{row[ObjectList.ID]} : " \
                          f"$f([{', '.join(map(str, data))}]),\n"
        return result

    def print_constants(self, object_list: ObjectList) -> str:
        result = """
        /*
        * Game Constants
        */
        
        """
        for value, constant in object_list.constants.items():
            result += f"const {constant} = {value};\n"

        return result

    def print_dbmodel(self, object_list: ObjectList, model_lower):
        text = """
            CREATE TABLE IF NOT EXISTS `{MODEL_LOWER}s` (
            `{MODEL_LOWER}_id` int(5) NOT NULL AUTO_INCREMENT,
            `{MODEL_LOWER}_state` int(10) DEFAULT 0,
            `{MODEL_LOWER}_location` varchar(32) NOT NULL,
            {CUSTOM_FIELD_SQL}
            PRIMARY KEY (`{MODEL_LOWER}_id`)
            ) ENGINE = InnoDB DEFAULT CHARSET = utf8;
        """
        text = text.replace('{MODEL_LOWER}', model_lower) \
            .replace("{CUSTOM_FIELD_SQL}",
                     self.get_custom_field_sql(self.custom_fields))

        return text

    def ask_for_attributes(self):
        """Add custom field to Model (some are always added by default)"""
        new_field = input("Ajouter un nouvel attribut ? ")

        while new_field != '':
            new_type = input(f"{new_field} sera de quel type ? "
                             f" 1=int, 2=str, 3=obj ")
            if not new_type.isnumeric() or \
                    int(new_type) not in \
                    [x + 1 for x in range(len(Field.possible_types))]:
                new_field = input("Ajouter un nouvel attribut ? ")
                continue

            new_type = Field.possible_types[int(new_type) - 1]

            self.custom_fields.append(Field(new_field, new_type))
            new_field = input("Ajouter un nouvel attribut ? ")

    def list_custom_fields(self):
        return ", ".join([Utils.make_str(Utils.snake_case(field.name))
                          for field in self.custom_fields])

    def extended_list_custom_fields(self):
        result = ''
        for field in self.custom_fields:
            result += f"'{Utils.camel_case(field.name)}'" \
                      f" => {field.field_to_object()},\n"

        return result

    def static_structure(self, object_list: ObjectList):
        result = ''
        for field in object_list.get_fieldtypes_for_php():
            result += f"{field.field_to_object()},\n"

        return result

    def get_custom_field_sql(self, custom_fields):
        result = ''
        for field in custom_fields:
            result += f"`{Utils.snake_case(field.name)}` " \
                      f"{field.to_sql()} NULL,\n"

        return result

    def make_css(self, object_list, model):
        # dict to associate max X or max Y to each sprite
        max_x = dict()
        max_y = dict()
        for row in object_list.objects:
            row['css_file'] = "'img/"+row['css_file'][1:-1]+"'"
            file = row['css_file']
            x = int(row['css_x'])
            y = int(row['css_y'])
            if max_x.get(file, 0) < x:
                max_x[file] = x
            if max_y.get(file, 0) < y:
                max_y[file] = y

        result = ''
        object_list.fieldtypes.append(Field('css_position', int))
        object_list.fieldnames.append('css_position')

        for row in object_list.objects:
            x = int(row['css_x'])
            y = int(row['css_y'])
            result += f"""
            .{model}[data-id="{row[ObjectList.ID]}"] {{
            background-image: url('{row['css_file']}');
            background-position-x: {x/max_x[row['css_file']]*100:.4f}%;
            background-position-y: {y/max_y[row['css_file']]*100:.4f}%; }}
            """
            row['css_position'] = y*(max_x[row['css_file']]+1)+x

        return result

    def make_js(self, object_list, model) -> str:
        with open(self.js_file, "r") as reader:
            text = reader.read()

        text = text.replace("{STRUCTURE}",
                            self.get_structure(object_list.get_fieldnames_for_php(),
                                               False))\
            .replace('{MODEL}', model.upper())\
            .replace('{CONSTANTS}', self.print_constants(object_list))\
            .replace('{DATA}', self.get_data(object_list.objects,
                                             object_list.get_fieldnames_for_php(),
                                             False))
        return text

