import math

MAX_WIDTH = 500
MAX_HEIGHT = 200
card_width = 100
card_ratio = 300 / 420
card_height = 100 / card_ratio
ray = 1000
hypotenuse = math.sqrt(card_width ** 2 + card_height ** 2)
angle_card = math.degrees(math.acos(card_height / hypotenuse))  # angle entre l'hypotenuse et la hauteur


def cards_hand_calculation(ray=500, max_width=500):
    semihypotenuse = math.sqrt(card_width ** 2 + card_height ** 2) / 2

    angle_b = math.degrees(math.acos(card_height / 2 / semihypotenuse))

    # max_width = sin(angle/2)*2 + debort * 2

    sinus = (max_width - debord * 2) / ray / 2
    angle = math.degrees(math.asin(sinus) * 2)

    debord = math.cos(math.degrees(90 - angle - angle_b)) * semihypotenuse
    return angle


def get_width(angle):
    width_due_to_angle = math.sin(math.radians(angle) / 2) * 2 * ray

    angle_hypotenuse = 90 - angle - angle_card

    return width_due_to_angle + math.cos(math.radians(angle_hypotenuse)) * hypotenuse


def find_angle():
    for x in range(180):
        width = get_width(x)
        print(f"Pour un angle de {x}, la largeur est {width}");
        if width > MAX_WIDTH:
            return x - 1


def find_ray(angle):
    for x in range(100, 500):
        height = calc_height(angle)
        print(f"Pour un rayon de {x}, la largeur est {height}");
        if height <= MAX_HEIGHT:
            return x


def get_y_card(angle):
    oppose = math.sin(math.radians(90 - angle)) * ray
    return oppose


def calc_height(angle):
    top = ray + card_height / 2
    bottom = get_y_card(angle / 2) - math.acos(math.radians(angle_card - angle)) * hypotenuse / 2
    return top - bottom


# print(calc_height(0))
# print(get_y_card(0))
best_angle = find_angle()
print("la bonne réponse est ", best_angle)
print("avec un tel angle, la hauteur est de ", find_ray(best_angle))
