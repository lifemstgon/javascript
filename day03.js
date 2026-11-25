//data types

//addition
let day1 = 100;
let day2 = 200;
console.log(day1 + day2);

let day3 = day1 + day2;
console.log(day3);

//subtraction
let day4 = 250;
let day5 = 100;
console.log(day4-day5);

//multiplication
let day6 = 5;
let day7 = 10;
console.log(day6*day7);

//division
let day8 = 12;
let day9 = 3;
console.log(day8/day9);

//power of 
let day10 = 2;
let day11 = 3;
console.log(day10**day11);

//expansion
let day12 = 13;
let day13 = 5;
console.log(day12 % day13);

//assignment operatar
let day = 1000;
//day = day + 500;
day += 500;
console.log(day);

let day14 = 100;
let day15 = 90;
console.log(day14 > day15); 

let day16 = 40;
let day17 = 50;
console.log(day16<day17);  

let day18 = 150;
let day19 = 150;
console.log(day18>=day19); //150 >= 150 -> true

let value = 100;  //number
let value1 = "100" //string
console.log(value==value1);  //100==100 -> true
console.log(value===value1);  //100===100 -> false

let value2 = 100;
let value3 = 90;

let value4 = 30;
let value5 = 40;
console.log(value2 >= value3 && value4 >= value5);
console.log(value3 >= value4 || value4 >= value5);

let conditions = true;
console.log(conditions);

// nullish operator
let course = null;
let day20 = null;
let location = "nagpur";

let result = day20 ?? location ?? course;
console.log(result);











