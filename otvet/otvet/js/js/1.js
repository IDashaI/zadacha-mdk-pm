let f = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-16,17,18,19,20] 
f.sort((a,b) => {
   return a -b
})   
h = f[19]
j = f[0]
f.splice(0,1,h)
f.splice(19,1,j)
console.log(f)
//1. В массиве из 20 целых чисел найти наибольший элемент и поменять его местами с первым элементом