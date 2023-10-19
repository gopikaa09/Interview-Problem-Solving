
// let a="Gopika";

// function problem1(a,b){
//     for(i=0;i<a.length;i++){
//         if(i==b){
//             console.log(a[i]);
//         }
//     }
// }
// problem1(a,2)

// function problem2(a,n){
//     let b=""
//     for(i=0;i<a.length;i++){
//         if(i>n){
//             b+=a[i]
//         }
//     }
//     return b

// }
// console.log(problem2(a,2));

// function problem3(a,n){
//     let b=""
//     for(i=0;i<a.length;i++){
//         if(i<n){
//             b+=a[i]
//         }
//     }
//     return b

// }
// console.log(problem3(a,2));


// let arr=["A","g","h","r","B","b","v"]
// function problem4(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=1+i;j<arr.length;j++){
//             if(arr[i].charCodeAt()>arr[j].charCodeAt()){
//                 temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(problem4(arr));


// let a=["gopika","jhansi","mano","lucky","Nagendra"]

// let largest=a[0];
// let length=a[0].length
// for(i=0;i<a.length;i++){
//     if(length<a[i].length){
//         largest=a[i]
//         length=a[i].length
//     }
// }
// console.log(largest);



// let 
// let a={
//     name:"gopika",
//     roll:"815",
// }
// for(i in a){
//     console.log(a[i]);
// }
// // for(j of a){
// //     console.log(j);
// // }

// let a=[{a:45,b:2,c:15}]
// let largest=0
// for(i of a){
//     for(j in i){
//         if(i[j]>largest){
//             largest=i[j]
//         }
//     }
// }
// console.log(largest);

// let a=[{x:1},{y:5},{z:3}]
// let largest=0;
// for(i of a){
//     for(j in i){
//         if(i[j]>largest){
//             largest=i[j]
//         }
//     }
// }
// console.log(largest);

let arr=[15,56,89,78,45,89,12,35,15,12]
// const orderedSet = new Set(['apple', 'banana', 'cherry']);
// console.log(orderedSet);
// let a=new Set(arr)
// console.log(a);
let b=[]

for(i=0;i<arr.length;i++){
    for(j=0;j<b.length;j++){
        if(arr[i]!==b[j]){
            b.push(arr[i])
        }
    }
}
console.log(b);

