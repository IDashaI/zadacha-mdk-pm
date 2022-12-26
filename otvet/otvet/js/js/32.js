let a =`dsfdfsf 123 fdf 24`
function s(str) {
    let nums = [];
    let sum = 0;
    
  
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(Number(str[i]))) {
        nums.push(Number(str[i]));
      }
    }
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }
  
 
  console.log(s(a));
  //32. Написать метод, который находит сумму чисел в переданной строке. 
//Числом считается непрерывная последовательность цифр, отделенная от остального текста пробелами или расположенная в начале либо конце строки. 

//Допустимо использовать метод Split класса String. 

//С помощью этого метода обработать пять разных строк и отобразить результаты на экране.
