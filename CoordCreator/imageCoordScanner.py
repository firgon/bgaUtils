from matplotlib import pyplot as plt
from PIL import Image


class ImageCoordScanner:

    is_rect_record: bool
    is_absolute: bool

    def __init__(self, file, printer, is_rect_record, is_absolute):
        """display an image and send x,y,xx,yy data when you click on it"""
        self.is_rect_record = is_rect_record
        self.is_absolute = is_absolute

        plt.title("Image à scanner")
        plt.xlabel("X pixel scaling")
        plt.ylabel("Y pixels scaling")

        self.callback = printer.new_record
        self.x = 0
        self.y = 0

        ax = plt.gca()

        image = Image.open(file)
        ax.imshow(image)

        self.width = image.width
        self.height = image.height

        fig = plt.gcf()
        fig.canvas.mpl_connect('button_press_event', self.onclick)
        if is_rect_record:
            fig.canvas.mpl_connect('button_release_event', self.onrelease)

        plt.show()
        printer.finish()

    def onclick(self, event):
        self.x = round(event.xdata) if self.is_absolute else round(event.xdata / self.width * 100, 2)
        self.y = round(event.ydata) if self.is_absolute else round(event.ydata / self.height * 100, 2)
        if not self.is_rect_record:
            self.callback(self.x, self.y)

    def onrelease(self, event):
        new_x = round(event.xdata) if self.is_absolute else round(event.xdata / 100, 2)
        new_y = round(event.ydata) if self.is_absolute else round(event.ydata / 100, 2)
        self.callback(self.x, self.y, event.xdata-new_x, event.ydata-new_y)
