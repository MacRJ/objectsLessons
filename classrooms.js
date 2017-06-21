var classrooms = [{
    teacher: {
      name: "John Keating",
      subject: "Literature",
      age: 57
    },
    students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  },{
    teacher: {
      name: "Lillian Beauregard",
      subject: "Math",
      age: 74
    },
    students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  },{
    teacher: {
      name: "Mr. Schmidt",
      subject: "Literature",
      age: 50
    },
    students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }]

function average(arr){
var first = [];
var ages = [];
  for(var i = 0; i < arr.length; i++){
  // console.log(i);
    for(var j = 0; j < arr[i]["students"].length; j++){
// console.log(arr[i]["students"][j]);
      first.push(arr[i]["students"][j]["age"])
}

   console.log( first)
// console.log(ages)
    // if(key[]){
      // first.push()

 // }


  }
// console.log(first[2])



// console.log(arrNumber);
// console.log(age);
//   for(var k = 0; k < arrNumber.length; k++){
//     // numAdded.push (arrNumber[k] / arrNumber.length);
//   }
// singleNum = numAdded[1];
// console.log(singleNum);
// // console.log(numAdded);

// }
}
average(classrooms);
