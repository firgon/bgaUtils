from CoordCreator.imageCoordScanner import ImageCoordScanner
from CoordCreator import inputs
from CoordCreator.printer import Printer, CopyPastePrinter


def run():
    file = inputs.get_file()

    if inputs.get_yes_or_no(
        "Voulez-vous uniquement récupérer les données dans le presse-papier ?"
    ):
        prefix = inputs.get_label("Quel préfixe ?")
        suffix = inputs.get_label("Quel suffixe ?")
        printer = CopyPastePrinter(prefix, suffix)
    else:
        variable = inputs.get_label(
            "Vous allez donc enregistrer vos résultats dans une variable. Comment voulez-vous la nommer ?"
        )
        index = inputs.get_label("Commencer par quel indice ?")
        if variable == "":
            exit()
        printer = Printer(variable, index)

    is_rect_record = inputs.get_yes_or_no("Voulez vous enregistrer des rectangles complets ?")
    is_absolute = inputs.get_yes_or_no("Voulez vous enregistrer des valeurs absolues en px ?")

    ImageCoordScanner(file, printer, is_rect_record, is_absolute)


if __name__ == '__main__':
    run()
