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
// =================================================================================

// let a=[
// {
//     name:"gopika",
//     age:21,
// },
// {
//     name:"mano",
//     age:8,
// },
// {
//     name:"lucky",
//     age:12,
// },
// {
//     name:"bhargav",
//     age:22,
// },
// {
//     name:"abhi",
//     age:51,
// }
// ]
// let result=[]
// let temp
// for(i=0;i<a.length;i++){
//     for(j=i+1;j<a.length;j++){
//         if(a[i].age>a[j].age){
//             temp=a[i]
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
// }
// console.log(a);

// ==================================================================================

// let a=[
//     {
//         name:"RRR",
//         ticketfare:500,
//         status:"paid",
//     },
//     {
//         name:"nene raju nene manthri",
//         ticketfare:400,
//         status:"not paid",
//     },
//     {
//         name:"Devara",
//         ticketfare:600,
//         status:"paid",
//     },
//     {
//         name:"Raja rani",
//         ticketfare:500,
//         status:"not paid",
//     },
//     {
//         name:"Skanda",
//         ticketfare:200,
//         status:"paid",
//     },
//     {
//         name:"Godavari",
//         ticketfare:350,
//         status:"paid",
//     },
//     {
//         name:"anand",
//         ticketfare:150,
//         status:"not paid",
//     },
//     {
//         name:"Gowtham scc",
//         ticketfare:250,
//         status:"paid",
//     },
// ]
// let index=0;
// let result1=[]
// let result2=[]
// for(i of a){
//     if(i.status=="paid"){
//         result1.push(i)
//     }else{
//         result2.push(i)
//     }
// }
// console.log(result1.concat(result2));



