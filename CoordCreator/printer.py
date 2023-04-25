from tkinter import Tk


class Printer:
    def __init__(self, variable):
        self.result = f"{variable} = {{ \n"

    def new_record(self, x, y, width=None, height=None):
        new_variable = self.dialog.get_label("Quel est le nom de cette valeur ? ")
        if width is None or height is None:
            self.result += f"   {new_variable} : [{x}, {y}],"
        else:
            self.result += f"   {new_variable} : " \
                           f"[{x:.0f}, {y:.0f}, {width:.0f}, {height:.0f}],\n"

    def finish(self):
        self.result += '\n}'
        print(self.result)


class CopyPastePrinter(Printer):
    def __init__(self, prefix: str = "", suffix: str = ""):
        self.memory = Tk()
        self.prefix = prefix
        self.suffix = suffix

    def new_record(self, x, y, width=None, height=None):
        self.memory.clipboard_clear()
        result = f"[{x}, {y}]" if width is None or height is None else \
            f"[{x}, {y}, {width}, {height}]"
        result = self.prefix + result + self.suffix
        self.memory.clipboard_append(result)
        print(result)

    def finish(self):
        print("Bonne journée")
