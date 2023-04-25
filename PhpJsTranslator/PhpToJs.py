import utils.Utils as Utils

PHP_TO_JS = [
    ["=>", ":"],
    ["<?php", ""]
    ]

PHP_TO_JS_OBJECT = [
    ["[", "{"],
    ["]", "}"],
]


def php_to_js():
    """
    open a constants php file and convert it in js
    assuming that objects are multilines and array mono line !!
    """
    choice = Utils.choose_file("Choisissez un fichier php", ("PHP files", "*.php"))

    print(choice)
    basename = Utils.file_to_name(choice)
    print(basename)

    text = ""

    with open(choice, "r", encoding='utf-8') as file:
        for line in file.readlines():
            line = Utils.make_replacements(line, PHP_TO_JS)
            if not ("[" in line and "]" in line):
                line = Utils.make_replacements(line, PHP_TO_JS_OBJECT)
            text += line

    with open(Utils.EXPORT_FOLDER+basename+".js", "w", encoding='utf-8') as file:
        file.write(text)


