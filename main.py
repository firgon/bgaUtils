from CsvToManager.csv_to_manager import CSVToManager

utils = (
    ("csv_to_manager", CSVToManager),
)
possibleChoices = []

for index, util in enumerate(utils):
    print(f"{index}: {util[0]}")
    possibleChoices.append(index)

choice = int(input('Quel utilitaire voulez-vous lancer ?'))

if choice in possibleChoices:
    utils[choice][1]()


