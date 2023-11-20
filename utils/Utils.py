import os
from re import sub
from tkinter import filedialog

EXPORT_FOLDER = "exports/"


def choose_file(title: str = "Choisissez un fichier", filetypes: tuple | list = ("Tous type de fichier", "*.*")) -> str:
    """
    @param filetypes: should be a tuple or a list of tuple
    """
    if isinstance(filetypes, tuple):
        filetypes = [filetypes]
    elif isinstance(filetypes, list):
        if any(not isinstance(item, tuple) for item in filetypes):
            raise TypeError("Filetypes doit être une liste de tuple (ou un seul tuple)" + filetypes)
    return filedialog.askopenfilename(title=title,
                                      filetypes=filetypes)


def file_to_name(file_name: str) -> str:
    """return the name of a file without .csv or .php"""
    basename = os.path.basename(file_name)
    return basename[:basename.rfind(".")]


def get_file_extension(file_name: str) -> str:
    """return the extension of a file like .csv or .php"""
    basename, extension = os.path.splitext(file_name)
    return extension


def make_replacements(text: str, replacements: list) -> str:
    """ Receive a str and a list of list and makes replacements
    @param text: text to parse
    @param replacements: like ["{str_to_replace}", "new string"]
    """
    for replacement in replacements:
        if not isinstance(replacement, list) and len(replacement) == 2 \
                and isinstance(replacement[0], str) and isinstance(replacement[1], str):
            raise ValueError("Le format de vos chaines de remplacements n'est pas bon")
        text = text.replace(replacement[0], replacement[1])

    return text


def str_to_constant(word) -> str:
    """change 'string' to STRING
    and 'something like that' in SOMETHING_LIKE_THAT"""
    new_word = ''
    previous_char = ''
    for char in word:
        # if numeric -> keep it
        if char.isnumeric():
            new_word += char
        elif char == "'":
            continue
        # if lower -> Upper
        elif char.islower():
            new_word += char.upper()
        elif char.isupper():
            if previous_char.isalpha() and previous_char.islower():
                new_word += "_" + char.upper()
            else:
                new_word += char
        else:  # must not be alphanumeric
            new_word += "_"

        previous_char = char

    return new_word


def camel_case(s):
    """change 'somthing_like_that' to somethingLikeThat"""
    s = sub(r"(_|-)+", " ", s).title().replace(" ", "")
    return ''.join([s[0].lower(), s[1:]])


def pascal_case(s):
    """change 'somthing_like_that' to SomethingLikeThat"""
    s = sub(r"(_|-)+", ' ', s).title().replace(" ", "")
    return ''.join([s[0].upper(), s[1:]])


def snake_case(s):
    """ convert in something_like_that"""
    return '_'.join(
        sub('([A-Z][a-z]+)', r' \1',
            sub('([A-Z]+)', r' \1',
                s.replace('-', ' '))).split()).lower()


def detect_array(value: str):
    return _detect(value, "[", "]")


def detect_str(value: str):
    return _detect(value, "'", "'")


def _detect(value: str, start: str, end: str):
    return value.startswith(start) and value.endswith(end)


def make_str(value):
    return _make(value, "'", "'")


def make_array(value):
    return _make(value, "[", "]")


def _make(value: str, start: str, end: str):
    """format a str with start and end (removing them if already existing)"""
    if value.startswith(start):
        value = value[len(start):]
    if value.endswith(end):
        value = value[:-len(end)]
    return f"{start}{value}{end}"


def invitePlayers():
    url = "https://boardgamearena.com/community/community/inviteGroup.html?id=14792051&player=83977641"
    players = ['farfrench', 83977641]
