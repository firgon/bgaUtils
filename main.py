from CsvToManager.csv_to_manager import CSVToManager
from StatesCreator.statesCreator import StatesCreator
from CoordCreator import main
from PhpJsTranslator import PhpToJs
from csvSpreading.csv_spreading import CSVSpreading
from createDataFromXlsx import main as xlsx
from utils.Utils import promptChoice
from csvDataUpdate import csv_spreading as cs

APPLI_NAME = 0
APPLI = 1

utils = (
    ("csv_to_manager", CSVToManager),
    # ("statesCreator", StatesCreator),
    ("CoordCreator", main.run),
    ("PhpToJs", PhpToJs.php_to_js),
    ("CSV_Spreading", CSVSpreading),
    # ("createDataFromXlsx", xlsx.run),
    ("csvDataUpdate", cs.CSVSpreading)
)

choice = promptChoice('Quel utilitaire voulez-vous lancer ?', utils)
choice()






