class Data:

    fieldNames: list
    datas: list

    def __init__(self, fieldNames: list):
        self.fieldNames = fieldNames
        self.datas = list()


    def add(self, data: dict):
        self.datas.append(data)


