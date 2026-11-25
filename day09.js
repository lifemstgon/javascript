let place = "charminar"
console.log(place);
console.log("place");

let location = "chennai";
console.log(location);
console.log(location.length);

let phone = "iphone 16";
console.log(phone.length);

console.log(phone[2]);

let course = "I am starting learning Javascript";
console.log(course);
console.log(course.toUpperCase());

let fruit = " I Bought a New Fruit APPLE";
console.log(fruit);
console.log(fruit.toLowerCase());

let vegetable = "carrot is Healthy";
console.log(vegetable);
console.log(vegetable.indexOf('a'))
console.log(vegetable.lastIndexOf('a'))

console.log(vegetable.indexOf('o'));
console.log(vegetable.lastIndexOf('y'));
console.log(vegetable.indexOf(' '));
console.log(vegetable.lastIndexOf(' '));

let laptop = "I bought a HP laptop";
console.log(laptop.charAt(4));
console.log(laptop.at(-4));

let str = "        hi bro,      how are you?       ";
console.log(str);
console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

let course1 = "javascript";
let course2 = "completed";
console.log(course1.concat(course2));

let value = "hi";
console.log(value.repeat(3));

let arr = [10,20,30,40,50];
console.log(arr);

for(let result of arr){
    console.log(result);
}

let Student = {
    name : "pranali",
    location : "chandrapur",
    mark : 500
}

console.log(Student);

for(let res in Student){
    console.log(Student[res]);
    console.log(res+Student[res]);
}