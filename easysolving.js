//1.Create a function that takes two numbers as arguments and returns their sum.********************************************************************

// function addtonums(a,b) {
//     return a+b;
// }
// console.log(addtonums(15,22));

//2.Write a function that takes an integer minutes and converts it to seconds.**********************************************************************

// function mintosec(minute) {
//     var minute;
//     var second;
//     second=minute*60;
//     return second;
// }
// console.log(mintosec(2));

//3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.************************************************

// function addone(a) {
//     return a+1;
// }
// console.log(addone(15));

//4.Create a function that takes the age in years and returns the age in days.*************************************************************************************

// function yearstodays(age_years) {
// 	var leapyear=(age_years)/4;
//     var age_years;
//     var age_days=((age_years*365)+leapyear);
//     return age_days;
// }
// console.log(yearstodays(40));

//5.Create a function that takes voltage and current and returns the calculated power******************************************************************

// function power(voltage,current) {
//     var power;
//     var voltage;
//     var current;
//     power=voltage*current;
//     console.log("power ="+power+" ampers");
// }
// power(15,25);

//6.Write a function that returns the string "something" joined with a space " " and the given argument a.*********************************************************

// function problme6(a) {
//     return "something" + " " + a;
// }
// // problme6(gopika)
// console.log(problme6("gopika"));

//7.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.*******************************************************

// function problme7(a,b) {
//     if(a+b==10){
//         return true;
//     }else if(a==10 || b==10){
//         return true
//     }
//     return false;

// }
// console.log(problme7(5,5));

//8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.********************************************************************

// function problme8(firststr,secondstr) {
//     var count1=0;
//     for (i in firststr){
//         count1++;
//     }
//     var count2=0;
//     for( i in secondstr){
//         count2++;
//     }
//     if(count1==count2){
//         return true;
//     }
//     return false;

// }
// console.log(problme8("gopi","mano"));

// 9.Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// let greeting=(name)=>{
//     return "Good Morning "+name
// }
// console.log(greeting("Gopika"));

// 10.Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// let a=[5,5,5,5,5,5,5,5,5,5,5,5,5,]
// let b="";
// for(i=0;i<a.length;i++){
//     if(i==0){
//         b+="("
//     }else if(i==4){
//         b+=")"
//     }else if(i==8){
//         b+="-"
//     }else{
//         b+=a[i]
//     }
// }
// console.log(b);

//11.Create a function that returns an array of strings sorted by length in ascending order.********************************************************************************************************************
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// function sortarraylenght(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let a = arr[i].length;
//       let b = arr[j].length;
//       if (a > b) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// sortarraylenght(["abhkj", "ccc", "dddd", "bb"]);

// 12.Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// let a = [
//   [4, 2, 7, 1],
//   [20, 70, 40, 90],
//   [1, 2, 0],
// ];
// function problem12(a) {
//   let temp;
//   let arr = [];
//   for (i = 0; i < a.length; i++) {
//     for (j = 0; j < a[i].length - 1; j++) {
//       if (a[i][j] > a[i][j + 1]) {
//         temp = a[i][j];
//         a[i][j] = a[i][j + 1];
//         a[i][j + 1] = temp;
//       }
//     }
//     // arr+=a[i][a[i].length-1];
//     arr.push(a[i][a[i].length - 1]);
//   }
// //   console.log(arr);
// return arr;
// }
// console.log(problem12(a));

// 13.Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// function secondLargest(arr) {
//     console.log(arr);

// for(i=0;i<=arr.length;i++){
//     for(j=i+1;j<=arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;

//         }
//     }
// }
// console.log(arr);
// arr1=[]
// for (k=arr.length-1;k>=0;k--){
//     if(arr[k]!=arr[k-1]){
//         console.log(arr[k-1]);
//         break;
//     }
// }
// }

// secondLargest([10, 40, 30, 20, 50])

// 14.Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// let a=[1,0,1,0]
// let b=[]
// for (i=0;i<=a.length-1;i++){
//     let c=0;
//     for(j=0;j<=b.length-1;j++){
//         if(a[i]==b[j]){
//          c++;
//          break;
//         }
//     }
//     if(c==0){
//         b.push(a[i]);
//     }
// }
// console.log(b);

// 15.Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// Example:

// findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3

// let a=[2, 2, 2, 3, 4, 4, 4];

// function problem15(a) {
//     for (i=0;i<a.length;i++){
//         let count=0;
//         for(j=0;j<a.length;j++){
//             if(a[i]==a[j]){
//                 count++
//             }
//         }
//         if(count==1){
//             console.log(a[i]);
//         }
//     }
// }
// problem15(a)

//16.Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.***********************************************************************************************************

// function charcount(character,string){
//     var count=0;
//     for (i in string){
//         if(string[i]==character){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(charcount("g","gopikagg"));

//17.Create a function that takes a string and returns the number (count) of vowels contained within it.************************************************************

// function vowelcount(string) {
//     var count=0;
//     var vowels=["a","e","i","o","u"]
//     for (i in string){
//         for (j in vowels){
//             if(string[i]==vowels[j]){
//                 count++
//             }
//         }
//     }
//     return count;
// }

// console.log(vowelcount("gopi"));

// 18.Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.*****************************************************************

// function casereverse(string) {
//     finalstr=""
//     for (i=0;i<string.length;i++){
//         if(string[i]==string[i].toLowerCase()){
//             finalstr+=string[i].toUpperCase();
//         }else{
//             finalstr+=string[i].toLowerCase();
//         }
//     }
//     console.log(finalstr);
// }

// casereverse("Happy Birthday");

// 19.Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.***************************************************************

// function problme19(num) {
//     for (var i = 1; i <= num; i++) {
//         console.log(i*2);
//     }

// }
// problme19(5);

//20. Create Function that will take one parameter and return type of the data.********************************************************************************************************************

// function problme20(a) {
//     return typeof(a)

// }
// console.log(problme20(20));
// console.log(problme20("hgashga"));
// console.log(problme20(true));

// 21.Program to find greatest of three numbers(using ternery operator).*********************************************************************

// var a=prompt("Enter a value")
// var b=prompt("Enter b value");
// var c=prompt("Enter c value");
// console.log("a value is: ",a);
// console.log("b value is: ",b);
// console.log("c value is: ",c);

// console.log((a>b) ? (a>c?"a":"c") : (b>c?"b":"c"));

//22  .Program to find factorial of number.******************************************************************************

// var n=prompt("Enter a number");
// var fact=1;
// for(i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log(fact);

//23.Program to arrange numbers in ascending order*************************************************************

// var arr=[15,26,1,3,98,45,65];
// console.log(arr);

// for(i=0;i<=arr.length;i++){
//     for(j=i+1;j<=arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);

// 24.Print Patter using loop.

// 			1
// 			1 2
// 			1 2 3
// 			1 2 3 4
//   		1 2 3 4 5

// var a="";
// for(var i=1;i<=5;i++){
//     for (var j=1;j<=i;j++){
//         a+=" "+j;
//     }
//     a+="\n";
// }
// console.log(a);

//25.Program to Calculate the Power of a Number(using loop only).****************************************************************************

// var num=prompt("enter a number");
// var p=prompt("enter a power")
// var power=1;
// for (var i=1;i<=p;i++){
//     power=power*num;
// }
// console.log(power);

//26.Program to Check Whether a Number is Prime or Not*******************************************************************************************************

// var num=+prompt("enter a value");
// var count=0;
// for(var i=2;i<num;i++){
//     if(num%i==0){
//         count++;
//     }
// }
// if(count==0){
//     console.log("prime");
// }
// else{
//     console.log("not prime");
// }

//27. Program to find LCM of two numbers using while loop****************************************************************************
// debugger




//28.Program to Display Characters from A to Z Using Loop with count.***************************************************************

// for (var i=65;i<=90;i++){
//     var alpha=String.fromCharCode(i);
//     var num=i-64;
//     console.log(alpha+num);
// }

// 29. Program to find a missing number

// Input:  n=5(length of array), arr= [5,3,1,4]
// Output: 2 is missing

// Using loop only(you can not use predefined function)
// let arr=[3,1,4,6,7,8,9,10,2];
// let n=10;
// let sample=[]
// for(i=1;i<=n;i++){
//     sample.push(i)
// }
// console.log(sample);
// for(j=0;j<arr.length;j++){
//     for(k=j+1;k<arr.length;k++){
//         if(arr[j]>arr[k]){
//             temp=arr[j];
//             arr[j]=arr[k];
//             arr[k]=temp;
//         }
//     }
// }
// console.log(arr);

// for(m=0;m<arr.length;m++){
//     if(arr[m]!=sample[m]){
//         console.log(sample[m]);
//         break;
//     }
// }

// 30.Program to count vowels and consonants in a given String.

// Input: i am ram
// Output: 3 vowels 3 consonants.

// var a="i am ram"
// count1=0;
// count2=0;
// for (i=0;i<=a.length-1;i++){
//     if(a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u"){
//         count1++
//     }else if(a[i]==" "){

//     }else{
//         count2++;
//     }
// }
// console.log("vowels count",count1);
// console.log("consonants count",count2);

// 31.program to insert  the elements of an array for specific index.

// Input: [1,2,3,4,5,7,8,9,10] , index=5
// Output:[1,2,3,4,5,6,7,8,9,10]

let a = [1, 2, 3, 4, 5, 7, 8, 9, 10];
function problem31(index, value) {
  for (i = 0; i < a.length; i++) {
    if(a[i]==index){
        a[i]=value;
        i++;
    }
  }
  console.log(a);
}
problem31(5,6)

// 32.Reverse a number using while Loop

// Input: 123
// Output: 321

// var a=123
// var b=String(a)
// var c=""
// for (i=b.length-1;i>=0;i--){
//     c+=b[i]

// }
// console.log(c);

// 33. Count occurrence of number:

// Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// Output: 7 present 2 times.

// let a=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10];
// let b=7;
// count=0;
// for (i=0;i<=a.length-1;i++){
//     if(a[i]==b){
//         count++;
//     }
// }
// console.log(count);
