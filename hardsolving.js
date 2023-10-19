

// 1.Create a function that converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples :

// toCamelCase("A-B-C") ➞ "ABC"

// toCamelCase("the-stealth-warrior") ➞ "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") ➞ "TheStealthWarrior"

// function problem1hard(a) {
//     let b="";
//     for(i=0;i<a.length;i++){
//         if(a[i]=="-" || a[i]=="_"){
//             b+=a[i+1].toUpperCase();
//             i++;
//         }
//         else{
//             b+=a[i];
//         }
//     }
//     return b;
// }
// console.log(problem1hard("the-stealth-warrior"));
// console.log(problem1hard("A-B-C"));
// console.log(problem1hard("the-stealth-warrior"));




// 2.Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.	

// Examples :

// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]

// function problem2hard(arr) {
//     let finalarr=[];
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr[i].length;j++){
//             if(arr[i][j]=="0" ||arr[i][j]=="1"||arr[i][j]=="2"||arr[i][j]=="3"||arr[i][j]=="4"||arr[i][j]=="5"||arr[i][j]=="6"||arr[i][j]=="7"||arr[i][j]=="8"||arr[i][j]=="9"){
//                 finalarr.push(arr[i]);
//                 // finalarr+=arr[i]
//             }
//         }
//     }
//     return finalarr;
// }
// console.log(problem2hard(["1a", "a", "2b", "b"]));
// console.log(problem2hard(["this is a test", "test1"]));


// 3.Write a function that takes a list of hours and returns the total weekly salary.
// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.

// Examples :
// weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400
// weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410
// weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280


// function problem3hard(array) {
//     let sum=0;
//     let sum1=0;
// for (i=0;i<=4;i++){
//     if(array[i]==8){
//        sum+=array[i]*10;
//     }else if(array[i]>8){
//         sum1+=(8*10)+((array[i]-8)*15)

//     }
// }
// for(j=5;j<=6;j++){
//     if(array[j]==8){
//        sum+=array[j]*10*2
//     }else if(array[j]>8){
//         sum1+=(8*10*2)+((array[i]-8)*15*2)
//     }
// }  
// console.log(sum+sum1);
// }
// problem3hard([8, 8, 8, 8, 8, 0, 0])
// problem3hard([10, 10, 10, 0, 8, 0, 0])
// problem3hard([0, 0, 0, 0, 0, 12, 0])



// 4.Create a function which takes in an encoded string and returns an object according to the following example:

// Examples :
// parseCode("John000Doe000123") ➞ {
// firstName: "John",
// lastName: "Doe",
// id: "123"
// }

// let a="John000Doe000123";
// let b="";
// for (i=0;i<a.length;i++){
//     if(a[i]!="0"){
//         b+=a[i]
//     }
// }
// console.log(b);