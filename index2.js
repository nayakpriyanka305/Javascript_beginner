let name = 'edureka';
console.log(name);

let girl = {
    name:"Priyanka",
    age:23
};
console.log(girl);
console.log(girl.name);

let fruits = ['mango', 'banana', 'grapes'];
let colors = ['blue', 'green', 'yellow'];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = 'apple';
fruits[4] = 1;
console.log(fruits);
console.log(colors.concat(fruits));
console.log(colors.length)
//pop,push,reverse,shift,slice,sort,toString,unshift,join

function view() {
    console.log("Welcome to Edureka");
}


view();


function add(num1, num2){
    return num1 + num2;
}

sum = add(1, 3);
console.log(sum);



var string = "Welcome to Edureka Javascript training!";
console.log(string);
str = string.substring(5,16);
console.log(str);
slc = string.slice(9);
console.log(slc);
