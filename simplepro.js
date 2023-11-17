// function printPattern(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += " " + "*";
//     }
//     for (let k = 1; k <= 2 * (rows - i); k++) {
//       str += "  ";
//     }
//     for (let j = 1; j <= i; j++) {
//       str += " " + "*";
//     }
//     console.log(str);
//   }
// }

// printPattern(5); // You can change the parameter to adjust the size of the pattern
// ================================================================================================================
// let a=5;
// let fact=1;
// let arr=[]
// for(i=1;i<=a;i++){
//     arr.push(i)
//     fact=fact*i
// }
// console.log(arr);
// console.log(arr.join("*")+"="+fact);
// console.log(fact);
// ========================================================================================================================

// let a=50;
// let b=100;
// let arr=[]
// for(i=a;i<=b;i++){
//     let prime=true
//     for(j=2;j<i;j++){
//         if(i%j===0){
//             prime=false
//             break
//         }
//     }
//     if(prime){
//         arr.push(i)
//     }
// }
// console.log(arr);

// ============================================================================================================================

// let a=["testInput","testOutput","test","other"]
// let b=["flower","flow","flight"]

// function prefix(a){
//    let final=[]
//     for(i=0;i<a.length;i++){
//         let str=""
//         for(j=0;j<a.length;j++){
//             for(k=0;k<a[i].length;k++){
//                 if(a[i][k]==a[j][k]){
//                     str+=a[i][k]
//                 }
//             }
//         }
//         final.push(str)
//     }
//     return final
// }
// console.log(prefix(a));
// console.log(prefix(b));


// let a=["text-Input","text-output","text","other"]
let a=["fl-ower","fl-ow","fl-ight","fl-hghjgj"]
let arr=[]
for(i=0;i<a.length;i++){
  let b=a[i].split("-")
  arr.push(b)
}
console.log(arr)
let final=[]
for(j=0;j<arr.length-1;j++){
    console.log(arr[j][0]);
    if(arr[j][0]==arr[j+1][0]){
        final.push(arr[j][0])
    }
}
console.log(final);
console.log(final[0]);










//   for(k=0;k<arr[j].length;k++){
//     for(x=1;x<arr[j].length;x++){
//         if(arr[j][k]!=arr[j][x]){
//             final.push(arr[j][k])
//         }
//     }
//   }



// =================================================================================================================================================

// let a = [2, 1, 3, 1, 5, 2, 2, 2,2,2,1, 3, 4];
// let max=0
// let val=0
// for (i = 0; i < a.length; i++) {
//   let count=0
//   for (j = 0; j < a.length; j++) {
//     if (a[i] === a[j]) {
//       count++;
//     }
//   }
//   if(max<count){
//     max=count
//     val=a[i]
//   }
// }
// console.log(`${val} counts is ${max}`);


// let a = [2, 1, 3, 1, 5, 2, 2, 2, 2, 2, 1, 3, 4, 7, 8, 8, 8, 8];
// let obj = {};
// for (i = 0; i < a.length; i++) {
//   let count = 0;
//   for (j = 0; j < a.length; j++) {
//     if (a[i] === a[j]) {
//       count++;
//     }
//   }
//   if (!obj[a[i]]) {
//     obj[a[i]] = { num: a[i], count: count };
//   }
// }
// console.log(obj);
// let max = 0;
// let val = 0;
// for (let x in obj) {
//   if (obj[x].count>max) {
//     max = obj[x].count;
//     val = obj[x].num;
//   }
// }
// console.log(`${val} count is ${max}`);

// let arr=[]
// for(x in obj){
//   arr.push(obj[x].count)
// }
// let sarr=arr.sort((x,y)=>x-y)
// console.log(sarr);
// let max=sarr[sarr.length-1]
// console.log(max);

// ================================================================================================



// let a="abcdaceffddffff";
// let max=0;
// let val=0;
// for(i=0;i<a.length;i++){
//   count=0
//   for(j=0;j<a.length;j++){
//     if(a[i]==a[j]){
//       count++
//     }
//   }
//   if(max<count){
//     max=count
//     val=a[i]
//   }
// }
// console.log(`${val} count is ${count}`)

// ===========================================================================================================


// let a=[1,2,3,4,5];
// let x=4;
// let arr=[]
// let b=a.slice(x,a.length).concat(a.slice(0,x))
// console.log(b)

// let c=a.slice(-x).concat(a.slice(0,-x))
// console.log(c)


