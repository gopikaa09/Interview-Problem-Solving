// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// const numToFactorial = 5;
// const result = factorial(numToFactorial);
// console.log(`Factorial of ${numToFactorial} is:`, result);


// let a=[15,26,89,74,45,6,123,58,42,69,56,3,5,7];
// let b=[];
// // for(i=0;i<a.length;i++){
// //     if(a[i]%2==0){
// //         b.push(a[i])
// //     }
// // }
// // console.log(b);

// for(i=0;i<a.length;i++){
//     let count=0;
//     for(j=1;j<=a[i];j++){
//         if(a[i]%j==0){
//             count++
//         }
//     }
//     if(count==2){
//         b.push(a[i])
//     }
// }
// console.log(b);



// let a="malayalam"
// b="";
// for(i=a.length-1;i>=0;i--){
//     b+=a[i];
// }
// if(a==b){
//     console.log("palindrom");
// }else{
//     console.log("not");
// }





// promises and call back funstions


// let num=+prompt("Enter a number");
// let even_odd=new Promise((resolve,reject)=>{
//     if(num%2==0){
//         resolve("Even number");
//     }else{
//         reject("odd number")
//     }
// })
// even_odd.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })

// let num=+prompt("Enter a digit from 0 to 6")
// let days=new Promise((resolve,reject)=>{
//     switch(value){
//         case 0:
//             resolve("sunday");
//         case 1:
//             resolve("monday");
//         case 2:
//             resolve("tuesday");
//         case 3:
//             resolve("wednesday")
//     }
// })

// days.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })


// let num=153;
// let num1=num;
// let digits=0;
// let sum=0;
// while(num>0){
//     digits++;
//     num=Math.floor(num/10);
// }
// num=num1;
// while(num>0){
//     var a=num%10;
//     sum+=Math.pow(a,digits)
//     num=Math.floor(num/10);
// }

// if(sum===num1){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// function sample(){
//     for(i=3;i<20;i=i+3){
//         console.log(i);
//     }
//     console.log(i);
// }
// sample();

// var a="";
// for(var i=1;i<=5;i++){
//     for (var j=1;j<=11;j++){
//         a+=" "+"a";
//     }
//     a+="\n";
// }
// console.log(a);

// function operators(a,b,c){
//     switch(c){
//         case "+":
//             return a+b
//         case "-":
//             return a-b;
//         case "*":
//             return a*b
//     };

// }
// console.log(operators(15,25,"*"));

// let x=Math.floor(Math.random()*10)
// console.log(x);

// let y=prompt("Guess a number")
// if(x==y){
//     console.log("Equal");
// }else if(x>y){
//     console.log("less");
// }else{
//     console.log("greater");
// }


let a=15;
let b=7;
let c
// a>b? c=a :c=b
c=b
let i=1;
while(c!=0){
    if(i%a==0 && i%b==0){
        console.log(i);
        break;
    }
    i++
}

for(let i=1;i!=0;i++){
    if(i%a==0 && i%b==0){
        console.log(`Lcm of ${a} and ${b} is ${i}`);
        break
    }
}

