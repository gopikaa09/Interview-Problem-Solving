// ===============================================================================================================================
// // input=[1.2,3,4]
// // output=[24,12,8,6]
// let a=[1,2,3,4]
// let res=[]
// for(i=0;i<a.length;i++){
//   let mul=1
//   for(j=0;j<a.length;j++){
//     if(a[i]!==a[j]){
//       mul*=a[j]
//     }
//   }
//   res.push(mul)
// }
// console.log(res)


// =============================================================================================================================================
// // input=[1,2,3,4]
// // output=[9,8,7,6]

// let a=[1,2,3,4]
// let res=[]
// for(i=0;i<a.length;i++){
//   let add=0
//   for(j=0;j<a.length;j++){
//     if(a[i]!==a[j]){
//       add+=a[j]
//     }
//   }
//   res.push(add)
// }
// console.log(res)


// ============================================================================================================================================================
// input=[1,3,4,5,6]
// output=2 is missing

// =============method1==========
// let sum2=0
// let b=a.sort((x,y)=>{
//   return x-y
// })
// console.log(b)
// let maxnum=b[b.length-1]
// console.log(maxnum)
// for(i of a){
//   sum1+=i
// }
// for(i=0;i<=maxnum;i++){
//   sum2+=i
// }
// console.log(sum1)
// console.log(sum2)
// console.log(`missing number is ${sum2-sum1}`)

// ============method2======================
// let a=[1,3,6,5,4]
// let num=a.length+1
// console.log(num)
// let sum1=Math.ceil((num*(num+1))/2)
// let sum2=0
// console.log(sum1)
// for(i of a){
//   sum2+=i
// }
// console.log(sum2)
// console.log(`misssing number is ${sum1-sum2}`)