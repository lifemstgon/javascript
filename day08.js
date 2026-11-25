let mark = [90,95,92,89,87,83];
console.log(mark);

console.log(mark[2]);

let mark1 = ["a","w","r","y","u"];
console.log(mark1);
console.log(mark1[3]);


let course = ["javascript","agen ai","playwright","api"];
console.log(course);

course.push("framework");
course.push("git");
course.push("testing");
console.log(course);

course.pop();
course.pop();
course.pop();
console.log(course);

let subject = ["english","hindi","marathi","maths"];
console.log(subject);

subject.push("history");
subject.push("eco");
subject.push("scince");
console.log(subject);

subject.pop();
subject.pop();
subject.pop();
console.log(subject);

let mobile = ["iphone","vivo","oppo","redmi"];
console.log(mobile);

mobile.unshift("mi");
mobile.unshift("poco");
mobile.unshift("realme");
console.log(mobile);

mobile.shift();
mobile.shift();
mobile.shift();
console.log(mobile);

let fruit = ["apple","banana","orenge","mango","pineapple","orenge"];
console.log(fruit);

console.log(fruit.length);

console.log(fruit.indexOf("orenge"));
console.log(fruit.lastIndexOf("pineapple"));

console.log(fruit[5]);
console.log(fruit.at(3));

let fruit1 = ["aa", "mm","cc","tt","jj","kk"];
console.log(fruit1);
console.log(fruit1.length);
console.log(fruit1.indexOf("tt"));
console.log(fruit1.lastIndexOf("kk"));

console.log(fruit1[3]);
console.log(fruit1.at(2));


let vegetable = ["onion","tomato","potato","carrot"];
console.log(vegetable);
console.log(vegetable.slice(1,3));

console.log(vegetable.includes("potato"));

let marks = [35,45,60,70,90,99];
console.log(marks.slice(0,1));
console.log(marks.includes(90));

let city = ["chennai","nagpur","pune","mumbai"];
console.log(city);

city.splice(1,0,'kolkata');
console.log(city);

let name = ["anu","manu","ronu","rani","raju"];
console.log(name);

console.log(name.splice(1,2,"aru","janu","tanu"));
console.log(name);

let marks1 = [90,95,85];
console.log(marks1);

let result = marks1.map(num => num+10);
console.log(result);

let price = [500,600,300];
console.log(price);

let newprice = price.map(news => news+500);
console.log(newprice);


let marks2 = [35,45,60,70,90,99];
console.log(marks.slice(2,5));  
console.log(marks.includes(45));