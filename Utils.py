from re import sub


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
