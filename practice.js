for(let number = 2; number <= 100; number++){
    let isPrime = true;                    
                                             
                                             
    for(let t = 2; t < number; t++){         
        if(number % t === 0){                
            isPrime = false ;                
            break;                           
        }                                    
    }                                        
                                             
                                             
    if(isPrime){                             
        console.log(number);                 
    }                                        
}                                            


for(let prime = 2; prime < 100; prime++) {
    let pm = true;


    for(let b = 2; b < prime; b++){
        if(prime % b ===0){
            pm = false;
            break;
        }

    }

    if(pm){
        console.log(prime)
    }

}



for(let prime1 = 2; prime1 < 100; prime1++){
    let pm1 = true;

    for(let c = 2; c < prime1; c++){
        if(prime1 % c === 0){
            pm1 = false;
            break;
        }
    }

    if(pm1){
        console.log(prime1);
    }

}


let str = "apple banana apple banana orenge banana apple";

let words = str.split(" ");

let count = {};

for(let word of words ){

    if(count[word]){
        count[word]++;
    }
    else{
        count[word] = 1;
    }
}

for(let word in count){

    if(count[word] > 1){
            console.log(word + " = " + count[word]);
    }
}
  

let st = "Hello world";

let words1 = st.split(" ");

let result = [];

for (let word of words1){

    let reverse = word.split("").reverse().join("");
    result.push(reverse);

}
console.log(result.join(" "));


let arr = [40, 10, 50, 20, 30];

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] > arr[j]) {

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }
}

console.log("Ascending:", arr);





let arr1 = [10,20,30,40,50];

for (let i = 0; i < arr.length; i++) 
    { 

    for (let j = i + 1; j < arr.length; j++) 
        {

        if (arr[i] < arr[j]) 
        {

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        }
    }
}

console.log("Descending:", arr);


let num = 121;

let origenal = num;

let reverse = 0;

while(num > 0) {

    let digit = num % 10;

    reverse = reverse * 10 + digit;
    
    num = Math.floor(num / 10);

}

if (origenal === reverse){
    console.log("Palindrome Number");
}
else {
    console.log("Not a Palindrome Number");
}


let stri = "Hello, welcome to javascript";

let word = "";

let results = "";

for(let i = 0; i < stri.length; i++){

    if (stri[i] != " "){
        
        word = stri[i] + word;
    }

    else {

        results = results + word + " ";

        word = " ";
    }
}

results = results + word;
console.log(results);



let str2 = "hello world hello javascript world hello";

let words2 = str.split(" ");
let checked = [];

for (let i = 0; i < words.length; i++) {

    if (checked[i] == true) {
        continue;
    }

    let count = 1;

    for (let j = i + 1; j < words.length; j++) {

        if (words[i] == words[j]) {
            count++;
            checked[j] = true;
        }
    }

    if (count > 1) {
        console.log(words[i] + " = " + count);
    }
}



































