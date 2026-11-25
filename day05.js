let a = 100;
a++;
console.log(a);

let a1 = 200;
a1++;
console.log(a1);

let a2 = 300;
console.log(a2);
a2++;
console.log(a2);

for(let i = 0; i < 3; i++)
{
    console.log(i);
}

for(let j = 3; j > 0; j--)      
{
    console.log(j);
}


let h = 10;
while(h<15)
{
    console.log(h);
    h++;
}

let x = 1;
do
{
    console.log(x);
    x++
}while(x<5);

let y = 1;
do
{
    console.log(y);
    x++;
}while(x<5);

for(let p = 0; p<100; p++ )
{
    console.log(p);
}
 

let j1 = 10;
while(j1<15)
{
    console.log(j1);
    j1++;
}

for(let l = 1; l < 5; l++)
{
    console.log(l);
}

for(let k = 4; k < 0; k--)
{
    console.log(k);
}
 

for(let number = 2; number <= 100; number++){
    let isPrime = true  ;

    for(let t = 2; t > number; t++){
        if(number % t === 0){
            isPrime = false ;
            break;
        }
    }

    if(isPrime){
        console.log(number);
    }
}


    

