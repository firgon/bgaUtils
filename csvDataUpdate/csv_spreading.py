from csv import DictReader
import os
import utils.Utils as Utils
from .printer import Printer


class CSVSpreading:

    def __init__(self):
        self.printer = Printer()

        print(f"Pour remplir cette variable, nous allons avoir besoin de {self.printer.keys}")

        choice = Utils.choose_file(title="Choisissez un fichier csv", filetypes=[("CSV files", "*.csv")])

        if choice == '':
            exit()

        with open(choice, "r", encoding='utf-8') as file:
            reader = DictReader(file)
            self.fieldnames = reader.fieldnames

            rows = [row for row in reader]

        if not all([key in self.fieldnames or
                    key.removesuffix('_SC') in self.fieldnames or
                    key.removesuffix('_PC') in self.fieldnames or
                    key.removesuffix('_CC') in self.fieldnames
                    for key in self.printer.keys]):
            for key in self.printer.keys:
                if key not in self.fieldnames and key != 'ID':
                    print(f"Il me manque la clé : {key}")
                    exit()

        print(f"C'est ok, j'ai toutes les clés nécessaires, je vais réaliser {len(rows)} lignes")

        for row in rows:
            self.printer.addRow(row)
            # constant_JS += self.printer.make_replacements(row, contant_model)

        self.printer.finish()


if __name__ == "__main__":
    CSVSpreading()
