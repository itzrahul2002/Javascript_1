var arr = ['Ram',34,'Hanuman',23.4,true];

console.log(arr) 
console.log(arr[0])
console.log(arr.length)

var students={
    name:"Ram",
    age:34,
    address:"Delhi-110034"
}

console.log(students)

// Dot Notation
console.log(students.name)

// Bracket Notaion
console.log(students['address'])


var Avengers ={
    name: 'Avangers',
    location:'New Delhi',
    members: ['Thor','IronMan','Caption America','Widdow','Hulk'],

    power:{
        Thor:'Lightning',
        IronMan:'Tech',
        CaptionAmerica:'Shield',
        Widdow:'Agility',
        Hulk:'Strength'
    }
}
console.log(Avengers)
console.log(Avengers.members[2])
console.log(Avengers.power.Thor)

console.log(Avengers.name==='Avangers' ? "It's Real Avangers" : "It's Fake Avangers")

for(var i=0;i<Avengers.members.length;i++){
    console.log("Avangers "+i+" Member is : "+Avengers.members[i])
}
