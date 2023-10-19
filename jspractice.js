// a=+prompt("enter a value");
// switch(a){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     case 4:
//         console.log("four");
//         break;
//     case 5:
//         console.log("five");
//         break;
//     case 6:
//         console.log("six");
//         break;
//     case 7:
//         console.log("seven");
//         break;
//     default:
//         console.log("no one");

// // }
// let a=15;
// let b=19;
// let d="5";
// let c=a+b+d;
// console.log(c);

// i=i+3--------i+=3

// for(let i=0;i<=100;i+=3){
//     console.log(i);
// }

// let i=15;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let j=5;
// do{
//     console.log(j);
//     j++;
// }while(j<10);

// immediate invoked function
// let a=(function (a, b) {
//   return a + b;
// })(5, 3);
// console.log(a);

// let a="gopika";
// console.log(a.slice(2,4));
// console.log(a.substring(2,4));
// console.log(a.substr(2,4));

// let a="teja";
// let age=19
// console.log(`My name is ${a},my age is ${age}`);

// let a=["a","b","c","d",[45,55,98,56]]
// let b=[15,16,49,78]

// console.log(a.pop());
// console.log(a);
// console.log(a.push("e"));
// console.log(a);

// console.log(a.shift());
// console.log(a);
// console.log(a.unshift("g"));
// console.log(a);
// console.log(a.join(""));

// console.log(a.concat(b));

// console.log(a.flat());
// b.splice(0,2,99,89)
// console.log(b);

// let a="gopika"
// // for(i=0;i<a.length;i++){
// //     // console.log(a[i]);
// //     // console.log(i);
// // }
// // for(x of a){
// //     console.log(x);
// // }

// // for(i=100;i>0;i--){
// //     console.log(i);
// // }

// for(let i=a.length-1;i>=0;i--){
//     console.log(a[i]);
// }

// let a="gopika";
// let b="";

// for(i=a.length-1;i>=0;i--){
//     // b+=a[i]
//     b=b+a[i];
// }
// console.log(b);

// array iterationsssss

// let a=[15,56,89,78,45,12,36,56]

// console.log(a.forEach(method1));

// function method1(val,ind,arr){
//     console.log(val);
//     // console.log(ind);
//     // console.log(arr);
//     return val
// }

// let a=["kphb","kukkatpalli","balanagar","mosapet","bharat nagar","erragadda","esi hospital","sr nagar","ameerpet"]
// let station=3;
// let i=0;
// while(i<a.length){
//     if(i==station){
//         console.log(a[i]);
//     }
//     i++
// }
// function metro(a,station){
//     for(i=0;i<a.length;i++){
//         if(i==station){
//             console.log(a[i]);
//         }
//     }
// }
// metro(a,3)

// let arr = [{ a: 1, b: 3, c: 2 }];
// let s = 0;
// for (i of arr) {
//   for (j in i) {
//     if(i[j]>i[j+1]){
//         s=i[j]

//     }

// s=i[j]
// console.log(i[j]);
// i[j] > i[j + 1]
//   ? (i[j + 1] > i[j + 2]
//     ? i[j + 1]
//     : i[j + 2])
//   : (i[j + 1] > i[j + 2]
//   ? i[j + 1]
//   : i[j + 2]);
//   }
// }
// console.log(s);

// for(i in arr){
//    console.log(arr[i]);
//    for(j=97;j<=99;j++){
//     console.log(arr[i][String.fromCharCode(j)]);
//     if(arr[i][String.fromCharCode(j)]<arr[i][String.fromCharCode(j+1)]){
//         console.log(arr[i][String.fromCharCode(j=1)]);
//     }else if(arr[i][String.fromCharCode(j+1)]<arr[i][String.fromCharCode(j+2)]){
//         console.log(arr[i][String.fromCharCode(j+2)]);
//     }else{
//         console.log(arr[i][String.fromCharCode(j)]);
//     }
//    }
// }

// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr[i].length;j++){
//         console.log(arr[i].j);
//     }
// }

// let obj=[{a:1},{b:2},{c:3}]
// // console.log(obj[0][String.fromCharCode(97)]);
// for(let i=0;i<obj.length;i++){
//     for(let j=97;j<=99;j++){
//         console.log(obj[i][String.fromCharCode(j)])
//         if(obj[i][String.fromCharCode(j)]<obj[i][String.fromCharCode(j+1)]){
//             console.log(hello);
//         }
//     }
// }

// let a="gopikdfghjklsd"
// console.log(a.matchAll("a"));

// let a=""
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         a+=j
//     }
//     a+="/n"
// }
// console.log(a);




// console.log(x=Math.floor(Math.random()*11));

// let a = "sdfghjklqwertyuiopasdfghj741852963rtyuivbn";
// let abc = "";
// for (i = 0; i < 10; i++) {
//   b = Math.floor(Math.random()*a.length-1)
//   abc += a[b];
// }

// console.log(abc);

// for(i=1;i<=5;i++){
//   let a="";
//   for(j=1;j<=i;j++){
//     a+=j
//   }
//   console.log(a);
// }


// let a=[15,16,78,45,2,36,89,56,49]
// let first=a[0];
// let second=a[0]
// for(i=0;i<a.length;i++){
//   if(first<a[i]){
//     first=a[i]
//   }
// }

// console.log(largest);

// let a=[15,16,78,45,2,36,89,56,49]

// let b=a.sort((x,y)=>{
//   return x-y;
// })
// console.log(b);