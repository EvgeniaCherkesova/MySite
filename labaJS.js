// 1. `true + false`: Здесь `true` будет преобразовано в число 1, a `false` - в число 0. Поэтому результатом будет 1 (true как 1) + 0 (false как 0) = 1. 

// 2. 12 / "6": Значение "6" будет автоматически преобразовано в число, так как оператор деления применяется только к числовым значениям. Результатом будет 2, 
//так как 12 делить на 6 равно 2.

// 3. "number" + 15 + 3: Здесь происходит конкатенация строк. Сначала идет строка "number", затем при сложении co значением 15 получаем "number15", 
//a при сложении c числом 3 получаем "number153".

// 4. 15 + 3 + "number": сначала выполняются операции сложения чисел 15 и 3, которые равны 18. Затем результат конкатенируется co строкой "number", получаем "18number".

// 5. '1' > null: строка '1' будет автоматически преобразована в число, так как происходит сравнение c null, которое также будет преобразовано в число (равное нулю).
// Результатом будет true, так как 1 больше чем 0.

// 6. "foo" + + "bar": Здесь + перед строкой "bar" будет интерпретироваться как унарный плюс, пытаясь преобразовать строку "bar" в число. 
//Так как "bar" не является числом, результатом будет "fooNaN", где NaN означает "Not a Number".

// 7. 'true' == true: строка 'true' будет автоматически преобразована в логическое значение false, a логическое значение true останется без изменений. 
//Результатом будет false, так как false не равно true.

// 8. false == 'false': Здесь логическое значение false будет преобразовано в 0, a строка 'false' - в true (как присутствие значения в строке). 
//Результатом будет false, так как 0 не равно true.

// 9. null == '': null будет преобразовано в 0, a пустая строка в 0. Результатом будет true, так как 0 равно 0.

//задание 1
let value = 'sring';
if (typeof(value) == 'number'){
    console.log("type number");
} 
else if (typeof(value) == 'string'){
    console.log("type string");
} 
else if (typeof(value) == 'undefined'){
    console.log("type undefined");
} 
else if (typeof(value) == 'object'){
    console.log("type object");
}
//задание 1
// let input = prompt("знак зодиака:");
// switch(input){
//     case 'водолей': window.alert('Приветствуем вас, ' + input);break;
//     case 'рыбы': window.alert('Приветствуем вас, ' + input);break;
//     case 'телец': window.alert('Приветствуем вас, ' + input);break;
//     case 'овен': window.alert('Приветствуем вас, ' + input);break;
//     case 'скорпион': window.alert('Приветствуем вас, ' + input);break;
// }

//задание 2
// let i=1;
// for (i; i<20; i++){
//     console.log(i);
// }
// while (i<30){
//     console.log(i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// } while(i<41);

//задание 3
// setInterval(()=>{
//     window.alert('вирусное окно');
// }, 3000);

//задание 4
// let arr = [];
// for( let i=1;i<4;i++){
//     arr[i] = prompt('Введите '+ i + ' число:')
// }
// let tmp;
// let flag =1;
// while(flag){
//     flag=0;
//     for(let i=1;i<4;i++){
//         if(arr[i]> arr[i+1]){
//             tmp=arr[i+1];
//             arr[i+1] = arr[i];
//             arr[i]=tmp;
//             flag=1;
//         }
//     }
// }
// console.log(arr[1] ,arr[2] ,arr[3]);

//задание 5
// for(let i=0;i<=15;i++){
//     if(i%2 == 0) console.log(i + '- четное');
//     else console.log(i + '- нечетное');
// }

//задание 6
// let num = prompt('введите число больше 5');
// while(1){
//     if(num == null) break;
//     if( num > 5 ){
//         window.alert('you right!'); 
//         break;
//     }
//     else num = prompt('введите число больше 5!');
// }

//задание 7
// for(let i=8;i<=20;i++){
//     if(i%2 == 0) console.log(i);}

// //задание 8
// let sum=0;
//  for(let i=0;i<=1000;i++){
//     if(i%3 == 0 || i%5==0) sum=sum+i}
// console.log(sum);

// //задание 9
// let num =298,num2=num; i=0, b=100;
// let arr=[];
// while(num!=0){
//     arr[i]=(num-num%b)/b;
//     num=num%b;
//     i++;
//     b/=10;
// }
// if(num2 == (arr[0]**3 + arr[1]**3 + arr[2]**3)) console.log('является');
// else console.log('не является');

 for(let i=0;i<5;i++){
// //задание 10
   for(let j=0;j<=i;j++){
        console.log('*');
    }
    
}

//////// Практическая работа №2
//задание 1
// function sayHello(){
//     const text = document.querySelector('.say');
//     text.innerHTML = 'HELLO!';
// }
// sayHello();

//задание 2
// let nam = prompt('ваше имя:');
// let element = document.querySelector('.hi');
// element.addEventListener('click', function() {
//     window.alert('здраствуйте ' + nam);
// })

//задание 3
// function min(a,b){
//     if(a>b) return b;
//     else return a;
// }
// let a = 10, b =2;
// let res = min(a,b);
// console.log(res);

//задания 4 и 5
// function kalkulator(a,b,c){
//     if(a == null || b ==null || c == null) return null;
//     let dis = b**2 -(4*a*c);
//     if(dis>0){
//         let x1 =  (-b - Math.sqrt(dis))/(2*a);
//         let x2 =  (-b + Math.sqrt(dis))/(2*a);
//         console.log(x1, x2);
//     }
//     else if(dis<0) console.log('нет корней');
//     else {let x = -b/(2*a);
//     console.log(x);
//     }
// }
// let a,b,c;
// a = prompt('квадратное уравнение имеет вид ax^2 + bx + c \n введите a:');
// b = prompt('квадратное уравнение имеет вид ax^2 + bx + c \n введите b:');
// c = prompt('квадратное уравнение имеет вид ax^2 + bx + c \n введите c:');
// kalkulator(a,b,c);

///////////////// практическая работа № 3
//  задание 1
let array1 = [];
let array2 = [1,2,3,4,5,6,7,8];
let array3 = new Array();
let array = Array.of();
// задание 2
console.log(array2[4]);
array2[4] = 2;

// задание 3
// let btn = document.querySelector('.lend');
// btn.addEventListener('mousemove', function() {
//         window.alert(array2.length);
//     })

//задание 4
// for(let i=0;i<array2.length;i++){
//     console.log(array2[i]);
// }
// for(const element of array2){
//     console.log(element);
// }
// alert(array2);

//задание 5
// let newArr1 = ['апельсин', 'лимон'];
// let newArr2 = ['яблоко', 'виноград'];
// let transform = newArr1.concat(newArr2);
// console.log(transform);

// //задание 6,7
// let val = transform.pop();
// console.log(val);
// //8
// transform.unshift('банан');
// console.log(transform);

//9
// let numbers=[];
// let i =-1;
// do{
//     i++;
//     numbers[i] = prompt();

// }while(numbers[i]!= null);
// let newArr = Array.from(numbers, n => Math.sqrt(n) );
// for(let i = 0; i< newArr.length; i++){
//     if(newArr[i] === isNaN){
//         //[i]='не правильное значение';
//         newArr.splice(i,1);
//     }
//     else if (newArr[i]== 0){
//         newArr.splice(i,1);
//     }

// }
// console.log(newArr)

//
let data = new Date();
let div = document.querySelector('.data');
div.innerText = data;
let datD = data.getDay();
let datM = data.getMonth();
let datY = data.getFullYear();
console.log(data);

//11
function random(max){
    let a = Math.floor((Math.random()*max));
    let b = Math.floor((Math.random()*max));
    console.log(a,b);
    return(a*b);
}
let max =50;
console.log(random(max));

///////////практическая работа №4
// задание 1
let object = new Object();
let object2 = {};