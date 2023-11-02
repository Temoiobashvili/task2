"use strict";


//1


let numbers = 5

while (numbers <= 100){
  console.log(numbers);
  numbers++
}


//2

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
  const element = array1[i];
  if (element < 10 && element > 0) {
    console.log(element);
  }
}


//3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let i = 0; i < array2.length; i++) {
  const result = array2[i];
  if (result == 5) {
    console.log('არის');
    break;
  }
}


//4

let array3= [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array3.length; i++) {
   sum += array3[i];
}

console.log(sum);


//5


let array4 = [1, 2, 3, 7, 6, 9];
let total = 0;

for (let i = 0; i < array4.length; i++) {
    total += array4[i];     
}

console.log(total/array4.length);


//6


let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
  const result2 = array5[i];

  if (result2 == 7){continue};
  console.log(result2);
}


//7

let user = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
}

console.log(user.studentstatus);


//8

let user2 = {
  name: 'giorgi',
  age:  20,
  studentstatus: 'active'
}

if (user2.age < 18 && user2.studentstatus === 'active') {
    console.log("hello");
} else if (user2.name === 'levani') {
    console.log("hello levani");
} else if (user2.studentstatus === 'active' || user2.age < 25) {
    console.log("hello world");
} else {
    console.log("Error");
}


//9

let array6 = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let i = 0; i < array6.length; i++) {
  for (let g = 0; g < array6[i].length; g++) {
   const element2 = array6[i][g];

   if (element2 > 0) {
    console.log(element2)
   }
  }
}



//10


let array7 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];

for (let i = 0; i < array7.length; i++) {
   const element3 = array7[i];
   if (element3 % 2 == 0) {
    console.log(element3);
   } else {
    console.log(element3);
   }
}



//11


let users = [
  {username: 'giorgi', status: false},
  {username: 'levani', status: false},
  {username: 'anna', status: true}
];

let userWithTrueStatus = users.find(user => user.status === true);

console.log(userWithTrueStatus);
