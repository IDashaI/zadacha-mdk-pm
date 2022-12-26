for(a= -180 ; a <= 180 ;a = a + 45){
    function sun (angle) {
        return angle * (180 / Math.PI);
      }
      function cos (angle) {
        return angle * (Math.PI / 180);
      }
      
    x = Math.pow(Math.sin(a), 2)
    sun(x)
    y =  Math.pow(Math.cos(a), 2)
    cos(y)
    console.log(x-y)
 }

    //26. Написать метод, который вычисляет значения   x = sin2(a)
//и y = cos2(a). Напечатать таблицу значений от –π до π с шагом π/4.
