// var arr= [2,5,6,7,8];

// var square = [];

// for(var i =0;i<arr.length;i++){
//     square.push(arr[i]*arr[i]);
// }

// console.log(square);

// const colors ={
//     Primary :"Red",
//     Secondry: "Yellow",
//     Tetrity : "Green",
// }

// for(var color in colors){
//     console.log(color + " -> "+colors[color]);
// }

// console.log('----------------------------------------')
// var arr = ['Ironman','Caption America','Thor','Hulk'];

// for(let Avangers in arr){
//     console.log(Avangers + " -> " +arr[Avangers]);
// }

// var arr = [12,45,65,'Ram','Shayam',45];

// for(var i of arr){
//     console.log(" -> "+ i);
// }


const color = ['Red','Yellow','Green','Pink','Brown'];

for(var [index,colors] of color.entries()){
    console.log(index+" -> "+colors);
}

console.log('---------------------------------')

var str = "Coding";

for(var i of str){
    console.log(i);
}