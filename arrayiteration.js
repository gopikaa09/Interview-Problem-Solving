

let a=[15,25,56,89,23];

// for(i=0;i<=a.length-1;i++){
//     console.log(i);
// }
// for(i=0;i<=a.length-1;i++){
//     console.log(a[i]);
// }

// for (i in a){
//     console.log(i);
// }
// for (i of a){
//     console.log(i);
// } 


//FOREACH***********************************************************************


// a.forEach(arrmethod)

// function arrmethod(values,index,array) {
//     console.log(values); 
//     console.log(index);
//     // console.log(array);
//     // return values
// }
a.forEach(function(values,index,array){
    // console.log(values[index]=values*5);
    values=values[index*2]
    console.log(values);
})
console.log(a);
a.forEach((values,index,array)=>{
    a[index]=values*2
})
console.log(a);

// let b=a.forEach((values,index,array)=>{
//     // console.log(values);
//     return values;
// })
// console.log(b);
// let c=a.map((values,index,array)=>{
//     // console.log(values);
//     return values>20;
// })
// console.log(c);
// let d=a.find((values,index,array)=>{
//     // console.log(values);
//     return values>50;
// })
// console.log(d);
// let e=a.reduce((total,values,index,array)=>{
//     // console.log(values);
//     return total+=values;
// })
// console.log(e);
// let f=a.some((values,index,array)=>{
//     return values>20
// })
// console.log(f);
// let g=a.every((values,index,array)=>{
//     return values>20
// })
// console.log(g);



//MAP*****************************************************************
// a.map




//FILTER*****************************************************
// console.log(a.filter(arrmethod));

// function arrmethod(values,index,array) {
//     return values>15;
// }
//REDUCE****************************************************************
// console.log(a.reduce(arrmethod,0));

// function arrmethod(total,values,index,array) {
//     return total+=values
// }

//SOME***************************************************************************

// console.log(a.some(arrmethod));

// function arrmethod(values,index,array) {
//     return values>15
// }

//Every**************************************************************************************
// console.log(a.every(arrmethod));
// function arrmethod(values,index,array) {
//     return values>30
// }




//Practice problems in js ***********************************************************

//foreach***********************************************************************



// let a=["gopika","mano","lucky","gopi"];

// a.forEach(method1)
// function method1(values,index,array) {
//     console.log(index);
// }



//map****************************************************************************



// let a=["gopika","mano","lucky","gopi"];
// console.log(a.map(method2));

// function method2(values,index,array) {
//     return values.length
// }



//filter******************************************************************************



// let a=[15,25,56,11,13,5,9,7]
// console.log(a.filter(method3));

// function method3(values,index,array) {
//     var count=2;
//     for (i=2;i<values;i++){
//         if(values%i==0){
//             count++
//         }
//     }
//     if (count==2) {
//         return values
//     }
// }



//reduce*********************************************************************************



// let aaa=[15,56,56,89,78,23]

// console.log(aaa.reduce(method3,1));

// function method3(total,values,index,array) {
//     return total+=values 
// }


//some********************************************************************************************

// let a=[50,60,70,80,89,28,89,98,78]

// console.log(a.some(method4));

// function method4(values,index,array) {
//     return values>40;  
// }

// console.log((a.every(method5)));
// function method5(values,index,array) {
//     return values>40
// }