import tkinter as tk
from tkinter import ttk
from .States import State


class Frame:
    """class for generic comportements for Frame in this project"""

    def add_label(self, text, c, r, container):
        # generic method to add a label to form
        return tk.Label(container, text=text).grid(column=c, row=r, sticky=tk.E)

    def add_entry(self, var, c, r, container, width=1):
        # generic method to add an entry to form
        return tk.Entry(container, textvariable=var).grid(column=c, row=r, columnspan=width, sticky=tk.W)


class FormFrame(Frame):
    form_frame = None
    current_state = None

    def __init__(self, root, states=None, current_state=None):
        self.form_frame = ttk.Frame(root, padding="5 5 5 5", borderwidth=5, relief="ridge")
        self.form_frame.grid(column=0, row=0, rowspan=8, columnspan=6, sticky=(tk.N, tk.W, tk.E, tk.S))
        self.current_state = current_state

        self.add_label("Nom :", 1, 1, self.form_frame)
        self.add_label("Type :", 1, 2, self.form_frame)
        self.add_label("Description :", 1, 3, self.form_frame)
        self.add_label("DescriptionMyTurn :", 1, 4, self.form_frame)
        self.add_label("Args ?", 1, 5, self.form_frame)
        self.add_label("Automatisme ?", 1, 6, self.form_frame)
        self.add_label("Actions possibles :", 1, 7, self.form_frame)
        self.add_label("Transitions :", 1, 8, self.form_frame)
        name = tk.StringVar()
        self.add_entry(name, 2, 1, self.form_frame, 3)

        state_type = tk.StringVar()
        type_combo = ttk.Combobox(self.form_frame, textvariable=state_type)
        type_combo.grid(column=2, row=2, columnspan=3)
        type_combo.state(["readonly"])
        type_combo['values'] = [e.value for e in State.Type]

        description = tk.StringVar()
        self.add_entry(description, 2, 3, self.form_frame, 5)

        description_my_turn = tk.StringVar()
        self.add_entry(description_my_turn, 2, 4, self.form_frame, 5)

        args = tk.BooleanVar()
        tk.Checkbutton(self.form_frame, variable=args).grid(row=5, column=2)

        auto = tk.BooleanVar()
        tk.Checkbutton(self.form_frame, variable=auto).grid(row=6, column=2)

        actions = tk.StringVar()
        self.add_entry(actions, 2, 7, self.form_frame, 4)

        tk.Button(self.form_frame, text="Annuler", command=self.cancel).grid(column=4, row=8)
        tk.Button(self.form_frame, text="Enregistrer", command=self.save).grid(column=6, row=8)

        for child in self.form_frame.winfo_children():
            child.grid_configure(padx=1, pady=1)

    def cancel(self):
        pass

    def save(self):
        pass


class MainWindow(tk.Tk):

    def __init__(self, states=None):
        super().__init__()
        self.title("Créer un système de state :")

        FormFrame(self, states, states[0] if states else None)
        self.configure_list_frame(self)
        self.configure_display_frame(self)

        self.mainloop()

    def build_states(self) -> tk.Variable:
        """Method to display a string representing a state"""
        text = tk.StringVar()
        text.set("Ceci est l'aperçu du fichier states.php")
        return text

    def configure_display_frame(self, root):
        display_frame = ttk.Frame(root, padding="5 5 5 5", borderwidth=5, relief="ridge")
        display_frame.grid(row=9, column=1, rowspan=4, columnspan=8, sticky=tk.N)

        tk.Label(display_frame, textvariable=self.build_states())

        for child in display_frame.winfo_children():
            child.grid_configure(padx=1, pady=1)

    def configure_list_frame(self, root):
        list_frame = ttk.Frame(root, padding="5 5 5 5", borderwidth=5, relief="ridge")
        list_frame.grid(row=1, column=7, rowspan=12, columnspan=2, sticky=tk.N)

        tk.Label(list_frame, text="States enregistrés")

        for child in list_frame.winfo_children():
            child.grid_configure(padx=1, pady=1)


if __name__ == "__main__":
    MainWindow()
