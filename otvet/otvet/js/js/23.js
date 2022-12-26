function s(z, x, y){
    return Math.pow(x, 2) * Math.pow(y, 3) * Math.sqrt(z)
}
let c = s(4, 3, 5)
let v = s(5, 2, 4)
console.log(Math.max(c, v))
//23. Написать метод, вычисляющий значение x2 * y3 * √z. С его помощью определить, с какой тройкой чисел (a, b, c) или (d, e, f) значение будет максимальным