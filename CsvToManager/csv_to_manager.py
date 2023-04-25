from tkinter import filedialog
from csv import DictReader
import os
import utils.Utils as Utils
from .printer import Printer
from .dataHandler import ObjectList, Field


class CSVToManager:

    def __init__(self):
        choice = Utils.choose_file(title="Choisissez un fichier csv", filetypes=["CSV files", "*.csv"]);

        if choice == '':
            exit()

        with open(choice, "r", encoding='utf-8') as file:
            reader = DictReader(file)
            fieldtypes: list[Field] = []
            fieldnames = reader.fieldnames

            rows = [row for row in reader]

            # Determine type of each field
            for field in fieldnames:
                # if one of the value is array, the field is list
                if any([Utils.detect_array(row[field]) for row in rows]):
                    fieldtypes.append(Field(field, list))
                    print(f"{field} est de type list")
                    continue

                # if all values are numeric, the field is int
                if all([row[field].isnumeric() for row in rows]):
                    fieldtypes.append(Field(field, int))
                    print(f"{field} est de type int")
                    continue

                # else the field is string
                else:
                    fieldtypes.append(Field(field, str))
                    print(f"{field} est de type str")

            # data_id_needed = input("Data-id est-il nécessaire ? (y/n)") == "y"

            self.objects = ObjectList(fieldtypes)

            for row in rows:
                nb = 1
                if ObjectList.OCCURRENCES in row.keys():
                    nb = int(row[ObjectList.OCCURRENCES])
                    del row[ObjectList.OCCURRENCES]

                for _ in range(nb):
                    self.objects.add(dict(row))

            self.objects.create_constants()

            model = os.path.basename(choice).replace(".csv", "")

            print("nom de fichier à  lire", model)

            Printer(self.objects, model=model)


if __name__ == "__main__":
    CSVToManager()
