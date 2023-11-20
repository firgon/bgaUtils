from tkinter import Tk


class Printer:
    def __init__(self, variable, index):
        self.result = f"{variable} = [ \n"
        self.index = int(index)

    def new_record(self, x, y, width=None, height=None):
        if width is None or height is None:
            self.result += f"{self.index} => [\n" \
                           f"   'coord' => [{x:.2f}, {y:.2f}],\n" \
                           f"   'type' => CITY,\n" \
                           f"   'paths' => [],\n" \
                           f"],\n"
        else:
            self.result += f"   {self.index} => [\n" \
                           f"   'coord' => [{x:.0f}, {y:.0f}, {width:.0f}, {height:.0f}],\n" \
                           f"],\n"
        self.index += 1

    def finish(self):
        self.result += '\n]'
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
