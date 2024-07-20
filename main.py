a = 1
b = 2
c = "gfdeyg"
d = True

def on_forever():
    basic.show_number(a + b)
    basic.show_string("hellu!")
    if d == True:
        basic.show_number(a + a)
    else:
        basic.show_number(a + b)
    basic.show_number(a + b + a)
basic.forever(on_forever)
