x = 10
s = 19
a = Math.sin(x) + Math.cos(2*x)
d = Math.sin(s) + Math.cos(2*x)

function sun (angle) {
  return angle * (180 / Math.PI);
}
function cos (angle) {
  return angle * (Math.PI / 180);
}

console.log(Math.min(a,s))
//21. Написать метод, вычисляющий значение sin(x) + cos(2 * x). С его помощью определить, в какой из точек a, b или с значение будет минимальным