'use strict';

// 12-20-18

let array = [1,2,3,4,5,6,7,8,9,10];

const forLoop = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);
  }
}

const whileLoop = (arr) => {
  let count = 0;
  while(count < arr.length - 1) {
    console.log(arr[count]);
    count++;
  }
}

const myMap = (arr) => {
  let newArr = [];
  for(let i = 0; i < arr.length - 1; i++) {
    newArr.push(
      // logic to get specific thing wanted goes here
      );
  }
  return newArr;
}

const myFilter = (arr) => {
  let newArr = [];
  for(let i = 0; i < arr.length - 1; i++) {
    if('logic for search criteria goes here') {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

myReduce = (arr) => {
  let value = 0;
  for(let i = 0; i < arr.length - 1; i++) {
    value += arr[i];
  }
  return value;
}


// Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [];
let newStuff = {};
let newState = {};

newPeople = ['Odie', ...people, 'Garfield'];
newStuff = {...stuff, cars: [...stuff.cars, 'Ford']};
state = {people: [...people], ...stuff};
newState = {...state, people: ['Odie', ...state.people, 'Garfield'], cars:[...state.cars, 'Tesla']};