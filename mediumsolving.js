// 1.Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples :

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",12]]

// toArray({}) ➞ []

// function problem1med(obj) {

// }
// let obj={
//     a:1,
//     b:2
// }
// console.log(obj.length);

// 2.Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples :

// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// function program2(num,length) {
//     let arr=[]
//     for (i=1;i<=length;i++){
//         arr[i-1]=num*i
//     }
//     console.log(arr);

// }
// program2(7,5);
// program2(12,10);

// 3.Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples :

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

// let a = [
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve", age: 32, budget: 40000 },
//   { name: "Martin", age: 16, budget: 2700 },
// ];
// function problem3(a) {
//   sum = 0;
//   for (i = 0; i < a.length; i++) {
//     sum += a[i].budget;
//   }
//   console.log(sum);
// }
// problem3(a)

// 4.Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If a student has no notes (an empty array) then let's assume avgNote: 0.
// Example :

// [
// { name: "John", notes: [3, 5, 4]}
// ] ➞ [
// { name: "John", avgNote: 4 }
// ]

// let a=[{
//     name:"john",
//     notes:[3,5,4]
// }]
// let farr=[];
// let sum=0
// let avgNote=0
// let b=0;
// for(i=0;i<a.length;i++){
//     for (j=0;j<(a[i].notes).length;j++){
//         b=(a[i].notes).length;
//         sum+=a[i].notes[j];
//     }
//     avgNote=sum/b;
//     console.log(avgNote);
// }
// console.log(farr);

// 5.Create a function that moves all capital letters to the front of a word.
// 	Examples :

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

// function problem5med(string) {
//     let a="";
//     let b="";
//     for(i=0;i<string.length;i++){
//         if(/[A-Z]/g.test(string[i])){
//             a+=string[i]
//         }
//         else{
//             b+=string[i]
//         }
//     }
//     return a+b;

// }
// console.log(problem5med("hApPy"));
// console.log(problem5med("moveMENT"));
// console.log(problem5med("shOrtCAKE"));

// 6.Count each occurrence of number(can not use predefined function).

// Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// Output: 1 present 2 times.
//        2 present 1 times.
//        3 present 2 times.
//        5 present 1 times …….  Etc

let a=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10];

for(i=0;i<a.length;i++){
    count=0;
    for(j=0;j<a.length;j++){
        if(a[i]==a[j]){
            count++
        }
    }
    if(count>=1){
      console.log(`${a[i]} present ${count} times`);
    }
    
}

// 7.Write a function that accepts an array of strings. Return the longest string(can not use predefined function).

// Input: [‘nik’, ’mikhil’, ’Cow’,’Elephant’] 							Output: Elephant

// function problem7med(arr) {
//     for (i=0;i<arr.length-1;i++){
//         if (arr[i].length>arr[i+1].length) {
//             temp=arr[i];
//             arr[i]=arr[i+1];
//             arr[i+1]=temp;
//         }
//     }
//     console.log(arr[arr.length-1]);
// }
// problem7med(["nik", "mikhil", "Cow","Elephant"]);

// 8.Most Commonly Used two Character in String(can not use predefined function)

// Input: ‘Hii i am ram’
// Output; i, a

// let a = "Hii i am ram";
// let b = "";
// for (i = 0; i < a.length; i++) {
//   if (a[i] !== " ") {
//     b += a[i];
//   }
// }
// console.log(b);
// for (j = 0; j < b.length; j++) {
//   let count = 0;
//   for (k = 1; k < b.length; k++) {
//     if (b[j] == b[k]) {
//       count++;
//     }
//   }
//   if (count >= 2) {
//     console.log(b[j]);
//   }
// }

// 9.Write Program to remove duplicate elements in an array and sort it in descending order(can not use predefined function).

// Input: [5,3,5,2,1,1,7,3,5,6]
// Output: [7,6,5,32,1]
// let temp;
// let arr=[5,3,5,2,1,1,7,3,5,6];
// for (i=0;i<arr.length;i++){
//     for (j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// finalarr=[]
// for (k=0;k<arr.length;k++){
//     if(arr[k]!==arr[k+1]){
//         finalarr.push(arr[k]);
//     }
// }
// console.log(finalarr);

// 10.
// Write a Program to Remove brackets from an algebraic expression(can not use predefined function).

// 			Input: a + b-(9+c)=3
// 			Output: a + b- 9+c=3

// let algebra= "a+b-(9+c)=3";
// let final=""
// for(i=0;i<algebra.length;i++){
//     if(algebra[i]=="(" || algebra[i]==")" ){

//     }else{
//         final+=algebra[i];
//     }
// }
// console.log(final);

// 11.Write Program to remove duplicate elements in an array and sort it in Accending order(can not use predefined function).

// Input: [Z, A, P, C, A, Z , K, N, C]
// Output: [A, C, K,N, P, Z]

// let arr=["Z", "A", "P", "C", "A", "Z" , "K", "N", "C"];
// let final=[];
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i].charCodeAt(0)>arr[j].charCodeAt(0)){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp
//         }
//     }
// }
// for(k=0;k<arr.length;k++){
//     if(arr[k]!=arr[k+1]){
//         final.push(arr[k])
//     }
// }
// console.log(final);
// console.log(arr);

// 12. If subseq's  array  sequence is present in the array, returns true or else returns false.
// Let arr = [5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4]
// Example:
//            Input : Subseq1 = [7, -1, 5, -3] Output:  true
//                       Subseq2 = [7, -1, 4, -3]            : false
//            Subseq3 = [ -1]                        : true
//                       Subseq4 = [13, -3, 4, 1]           : false

// let arr=[5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4]
// let Subseq=[7, -1, 5, -3]
// let final=[];
// let final1=[];
// for(i=0;i<Subseq.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(Subseq[i]==arr[j]) {
//             final.push(Subseq[i])
//         }
//     }
// }
// console.log(final);
// for(k=0;k<final.length;k++){
//     if(final[k]!=final[k+1]){
//         final1.push(final[k])
//     }
// }
// console.log(final1);
// if(JSON.stringify(Subseq)==JSON.stringify(final1)){
//     console.log("true");
// }else{
//    console.log("false");
// }

// function problem12mid(subseq, arr) {
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === subseq[index]) {
//       index++;
//     }
//     if (index === subseq.length) {
//       return true;
//     }
//   }
//   return false;
// }

// // Example usage:
// const arr = [5, 7, 3, 2, 2, 7, -1, 5, -3, 13, 4];

// Subseq1 = [7, -1, 5, -3];
// Subseq2 = [7, -1, 4, -3];
// Subseq3 = [-1];
// Subseq4 = [13, -3, 4, 1];

// console.log(problem12mid(Subseq1, arr));
// console.log(problem12mid(Subseq2, arr));
// console.log(problem12mid(Subseq1, arr));
// console.log(problem12mid(Subseq1, arr));

// 13.Find sum of the Unique numbers:
// Example : Let arr = [1, 2, 2, 1, 3, 5, 1];
//  The unique numbers are 1,2, 3, 5 so the sum should be 11.
//                              `

// let temp;
// let arr=[1, 2, 2, 1, 3, 5, 1];
// for (i=0;i<arr.length;i++){
//     count=0;
//     for (j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// finalarr=[]
// for (k=0;k<arr.length;k++){
//     if(arr[k]!==arr[k+1]){
//         finalarr.push(arr[k]);
//     }
// }
// let sum=0;
// for (n=0;n<finalarr.length;n++){
//     sum+=finalarr[n];
// }
// console.log(sum);

// 11.
// Write Program to remove duplicate elements in an array and sort it in Accending order(can not use predefined function).

// 			Input: [Z, A, P, C, A, Z , K, N, C]
// 			Output: [A, C, K,N, P, Z]

// let a=["Z", "A", "P", "C", "A", "Z" , "K", "N", "C"];
// let temp;
// let count=0
// // console.log(a[3].charCodeAt());
// for(i=0;i<a.length;i++){

//     for(j=i+1;j<a.length;j++){
//         if(a[i].charCodeAt()>a[j].charCodeAt()){
//             temp=a[i];
//             a[i]=a[j];
//             a[j]=temp;
//         }
//     }

// }
// console.log(a);
// let b=a;
// function remover(b) {
//     return b.filter((item,index)=>{
//         b.indexOf(item)===index
//     });
// }
// console.log(remover(b));
// let b=String(a)
// console.log(b);
// let c="";
// for(i=0;i<b.length;i++){
//     if(b[i]!=","){
//         c+=b[i]
//     }
// }
// console.log(c);
// console.log(c.charCodeAt(0));
// for(j=0;j<c.length;j++){
//     for(k=1;k<c.length;k++){
//         if(c[j].charCodeAt > c[k].charCodeAt){
//             temp=c[j];
//             c[j]=c[k];
//             c[k]=temp;
//         }
//     }
// }
// console.log(c);
