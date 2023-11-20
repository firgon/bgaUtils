from CsvToManager.csv_to_manager import CSVToManager
from StatesCreator.statesCreator import StatesCreator
from CoordCreator import main
from PhpJsTranslator import PhpToJs
from csvSpreading.csv_spreading import CSVSpreading

APPLI_NAME = 0
APPLI = 1

utils = (
    ("csv_to_manager", CSVToManager),
    ("statesCreator", StatesCreator),
    ("CoordCreator", main.run),
    ("PhpToJs", PhpToJs.php_to_js),
    ("CSV_Spreading", CSVSpreading)
)
possibleChoices = []

for index, util in enumerate(utils):
    print(f"{index}: {util[0]}")
    possibleChoices.append(index)

try:
    choice = int(input('Quel utilitaire voulez-vous lancer ?'))
except ValueError:
    exit()

if choice in possibleChoices:
    utils[choice][APPLI]()


