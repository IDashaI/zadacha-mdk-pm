//let n = arr.length, 
//s = 0
//for (let i = 0; i < n; i++) 
//s += arr[i][n-1-i]
//console.log(s)
function invert(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] != 0) {
        array[i] = array[i] * -1;
      }
    }
  
    return array ;
  }

let q = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1, 2, 3, 4,-5, 6, 7, 8, 9, 10]
console.log(invert(q))



q.forEach(z=>{
    if( z < 0){
        z = Math.pow(z, 2)
            w.push(z)
    }else{
        z = Math.pow(z, 3)
            w.push(z)
}
}
)
console.log(w)



return