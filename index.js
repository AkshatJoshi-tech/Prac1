// let city="delhi"
// console.log(city)

// const birthYear=2002

// let x=10; let y=20;
// console.log(x+y)

// let a=null;
// let b=undefined;
// console.log(a+" "+b)

// let x = 9;
// let y = 3;
// console.log(x + y);
// console.log(x - y);
// console.log(x % y);

// if ((x) => 10 && y <= 5) {
//   console.log("Task me fit h");
// }

// let score = "10";
// let num = 10;
// console.log(score == num);
// console.log(score === num);

// let temp = 35;
// if (temp >= 30) {
//   console.log("its  t00  hottt!!");
// } else {
//   console.log("its not normall!!");
// }

// let role = "admin";

// switch (role) {
//   case "admin":
//     console.log("Welcome Admin");
//     break;

//     case "user":
//     console.log("Welcome user");
//     break;

//     case "guset":
//     console.log("Welcome guest");
//     break;

//     default:
//       console.log("invalid Role");
// }

// for(let i=1; i<=10; i++){
//   console.log(i)
// }
// let c=1;
// while(c<=20){
//   if(c%2==0){
//     console.log(c)
//   }
//   c++
// // }
// let fruits = ["apple", "banana", "mango"];

// for(let i=0; i<fruits.length;i++){
//   console.log(fruits[i])
// }

// let j=1
// do{
//   console.log("JS is cool");
//   j++
// }while(j<=5)

// function sayHello(){
//   console.log("Hello js")
// }
// sayHello()
// function square(num){
//   return console.log(num*num)
// }
// square(2)
// function isEven(num){
//   if(num%2==0){
//     return console.log(true);
//   }
//   else{
//     return console.log(false)
//   }
//   }

// isEven(5)
// let sub=(a,b)=>{
//   return console.log(a-b)
// }

// sub(12,6)


// let cars=["BMW","Audi", "Ford"];
// cars.push("Honda")
// console.log(cars)
// cars.pop()
// console.log(cars)

// let num =[10,20,30,40,50]
// num.forEach((i)=>{
//   console.log(i)
// })
// let double =num.map((i)=>{
//   return i*2
// })
// console.log(double)

// let ages=[12,18,25,15,30];
// let filt=ages.filter(age=> age>=18)
// console.log(filt)

// let car = {
//   brand: "Toyota",
//   model: "Innova",
//   year: 2020
// };

// car.year=2022
// console.log(car.year)
// car.color="White";
// console.log(car)

// delete car.model
// console.log(car)

// let student={
//   name:"Akshat",
//   marks:41,
//   checkResult: function (){
//     if(this.marks>40){
//       return console.log("pass")
//     }
//     else{
//       return console.log("Fail")
//     }
//   }
// }
// student.checkResult()


// let movie={
//   title:"Akshat",
//   rating:10,
//   showInfo: function (){
//    return console.log("Movie :"+this.title+"   Rating :"+this.rating)
//   }
// }
// movie.showInfo()


// let greet=(name)=>{
//   return `hello ${name}`
// }
// console.log(greet("akshat"))

// let arr=[20,30,40]
// let [a,b,c]=arr
// console.log(a)
// console.log(b)
// console.log(c)

// let movie={
//     title:"Akshat",
//     rating:10,
//     showInfo: function (){
//      return console.log("Movie :"+this.title+"   Rating :"+this.rating)
//     }
//   }
//   let {title, rating,showInfo}=movie
//   console.log(title)
//   console.log(rating)
//   console.log(showInfo())

//   function sumAll(...ar){
//     let sum=0;
//     for(let i=1;i<ar.length;i++){
//       sum=sum+ar[i]
//     }
//     console.log(sum)
//   }
// //   sumAll(1,2,3)
//  let prices =[100,200,300];
//  let discount= prices.map((i)=>{
//       return i-(i*0.10)
//  })
//  console.log(discount)

//  let ages =[12,18,25,30,10];
//  let eighteens=ages.filter((i)=>{
//     return i>=18
//  })
//  console.log(eighteens)

//  let marks =[60,70,80];
//  let total=marks.reduce((i,j)=>{
//     return i+j;
//  })
//  console.log(total)

//  let names = ["ram", "shyam", "radha"]
// let capitalize=names.map((i)=>{
//   return i.toUpperCase();
// })
// console.log(capitalize)

// function getNumber(){
//   return new Promise((resolve,reject)=>{
//     let num = Math.random();
//     let success = Math.random() < 0.5; // 50% chance
//     if(success==true){
//       resolve("Ths Number is"+num)
//     }else{
//       reject("failed to load number")
//     }
//   })
// }
// getNumber().then((data)=>{
//   console.log(data)
// }).catch(err=>{
//   console.log(err)
// })

// async function load() {
//   try{
//     const data=await getNumber();
//     console.log(data);
//   }catch(err){
//     console.log(err)
//   }
// }
// load()

// let nums=[1,2,3,4,5];
// let double=nums.map((i)=>{return i*2})
// console.log(double)


// let nums=[10,15,20,25];
// let double=nums.filter((i)=>{return i%2==0})
// console.log(double)

// let nums = [5,10,15]
// let redu=nums.reduce((i,j)=>i+j)
// console.log(redu)

// let names=["raj","amit","dev"]
// console.log(names.sort())

// let scores=[10.40,30]
// let any=scores.some(score=> score>50)
// console.log(any)

// let fruits = ["banana","apple","orange"]
// console.log(fruits.indexOf("apple"))

// let nums = [1,2,3,4]
// let allpos=nums.every(i=> i>0)
// console.log(allpos)

// let nae="akshat";
// let upper=nae.toUpperCase()
// console.log(upper)

// let str="Hello world"
// console.log(str.slice(6))

// let str1="The dog is cute";
// let rep=str1.replace("dog","cat")
// console.log(rep)

// console.log(str1.split(" "))
// console.log(str1.length)

// let messy='   helo world  '
// console.log(messy)
// console.log(messy.trim())

// let input= 'apple,banana,grape'
// let fruits=input.split(",")
// let capitalize=fruits.map(i=>
//   i.charAt(0).toUpperCase()+fruits.slice(1)
// )
// // console.log(capitalize)

// let output=capitalize.join(", ")
// console.log(output)

// let arr=[1,2,3,4,5];
// console.log(arr.reverse())
// let nums = [10,45,60,25];
// console.log(nums.find(num=> num>50))
// console.log(nums.pop())

// console.log(arr.unshift(20))
// console.log(arr)

// let nested = [1, [2, 3], [4, 5]];
// console.log(nested)
// console.log(nested.flat())

// let str = "hello world!";
// console.log(str.includes("hello"))


// let email = "user@example.com";
// console.log(email.indexOf("@"))

// let word = "ha"
// console.log(word.repeat(3))

// let nam="raju";
// console.log(nam.charAt(0).toUpperCase()+nam.slice(1));

// let title="mera bharat mahan";
// console.log(title.replace(" ","-"))

// let data = ["  alice ", " bob", "CHARLIE  "];
// let bData= data.map((i)=>{
//   return i.trim().charAt(0).toUpperCase()+i.slice(1)
// })
// console.log(bData)

let arr = [1, 2, 2, 3, 4, 4, 5];
let removeDuplicate= new Set(arr)
console.log(removeDuplicate)
