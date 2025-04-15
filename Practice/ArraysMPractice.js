//Arrray methods push and pop
let cars = ["BMW", "Audi", "Ford"];
cars.push("Honda");
console.log(cars);
cars.pop();
console.log(cars);

//used forEach
let num = [10, 20, 30, 40, 50];
num.forEach((i) => {
  console.log(i);
});

//used map
let double = num.map((i) => {
  return i * 2;
});
console.log(double);

//used filter
let ages = [12, 18, 25, 15, 30];
let filt = ages.filter((age) => age >= 18);
console.log(filt);

//using es6 feature tamplet string literals
let greet = (name) => {
  return `hello ${name}`;
};
console.log(greet("akshat"));

//used destructuring es feature
let arr = [20, 30, 40];
let [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

//array task map ka use kar 10% discount
let prices = [100, 200, 300];
let discount = prices.map((i) => {
  return i - i * 0.1;
});
console.log(discount);

//filter ka use kar k 18 se badi ages
let agess = [12, 18, 25, 30, 10];
let eighteens = agess.filter((i) => {
  return i >= 18;
});
console.log(eighteens);

//reduce ka use kar total marks
let marks = [60, 70, 80];
let total = marks.reduce((i, j) => {
  return i + j;
});
console.log(total);

//map ka use kar sabko uppercase kia
let names = ["ram", "shyam", "radha"];
let capitalize = names.map((i) => {
  return i.toUpperCase();
});
console.log(capitalize);

//map ka use kar sabki value double ki
let numss = [1, 2, 3, 4, 5];
let doublee = numss.map((i) => {
  return i * 2;
});
console.log(doublee);

//filter use kark even print kar wae
let nums1 = [10, 15, 20, 25];
let double1 = nums1.filter((i) => {
  return i % 2 == 0;
});
console.log(double1);

//reduce ka use kar sabka sum karwaya
let nums2 = [5, 10, 15];
let redu = nums2.reduce((i, j) => i + j);
console.log(redu);

//inhe sort kia
let names1 = ["raj", "amit", "dev"];
console.log(names1.sort());

// some k bare ne learn kia aur uska use kara
let scores = [10.4, 30];
let any = scores.some((score) => score > 50);
console.log(any);

//indexof se appla ka index value pta kia
let fruits = ["banana", "apple", "orange"];
console.log(fruits.indexOf("apple"));

//every k bare me learn kia
let nums = [1, 2, 3, 4];
let allpos = nums.every((i) => i > 0);
console.log(allpos);

//array ko revers kia then find use kar k 50 se greater pta kie then pop use kia
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.reverse());
let nums3 = [10, 45, 60, 25];
console.log(nums3.find((num) => num > 50));
console.log(nums3.pop());

console.log(arr1.unshift(20));
console.log(arr1);

//es feature  flatten array k bare me learn kia
let nested = [1, [2, 3], [4, 5]];
console.log(nested);
console.log(nested.flat());
