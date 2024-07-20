let a = 1
let b = 2
let c = "gfdeyg"
let d = true
basic.forever(function on_forever() {
    basic.showNumber(a + b)
    basic.showString("hellu!")
    if (d == true) {
        basic.showNumber(a + a)
    } else {
        basic.showNumber(a + b)
    }
    
    basic.showNumber(a + b + a)
})
