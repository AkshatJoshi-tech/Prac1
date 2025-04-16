const { json } = require("express");

function Hiii() {
  console.log(x);
  var x = 10;
}
Hiii();

hello();
function hello() {
  console.log("hello");
}

var hui;
hui = function () {
  console.log("hui executed");
};
//key point :
//isme var host hoga qki wo globally access hota h
//  likin let and const nahi honge qki wo temperal dead zone me chale jange and
// temperal dead zone wo zone hota h jisme initialize hone se phle let const rehte h

//Deep Copy And Shallow copy
//1. shallow copy me nested ki values copy nahi hoti
//  lekin key ya reference ho jata h
//2. jabki deep me value bhi ho jati h

const obj2 = {
  name: "Akshat",
  address: {
    city: "Khandwa",
  },
};

const shallowC = { ...obj2 };
console.log(obj2);
console.log("Shallow by spread : ", shallowC);
shallowC.address.city = "indore";
console.log(obj2.address.city);
//shallow copy karne ka first tarika ...  spread operator ka use karo best h

//agla tarika hai Object.assign()
const shallow = Object.assign({}, obj);
console.log("copy ka dusra tarika : ", shallow);

//deep copy ye sirf value nahi nested objects bhi new memory me copy karta h
const obj1 = {
  name: "Akshat",
  address: {
    city: "Khandwa",
  },
};

// const deep = JSON.parse(JSON.stringify(obj1));
// console.log(deep);
// deep.address.city = "kkk";
// console.log(obj1.address.city);
//Deep clone possible h 3rd party lodash
//lodash deep clone, array/object manipulation and performance optimization karta h
//_.cloneDeep()  isme jis obj se val copy karna h paas kar do

//Closure: Function + lexical scope
//jab koi function dusre function k andar bana ho
//and andar wala function bahar wale function ki variables ko yaad rakhta ho
//wo bhi function k finish hone k baad me bhi
//use case : data privacy and memorization
function secretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

const obj = secretHolder("paisa");

console.log(obj.getSecret()); //paisa
obj.setSecret("dosti");
console.log(obj.getSecret()); //dosti qki new closure create ho gya

//Call back Functions :
//Jab ek func. ko dusre me as aarg. ham de dete h 
//aur baad me wo call ho use callback kehte h

function hello(name,cb){
    console.log('name :' +name);
    cb();
}
function bye(){
    console.log("bye")
}

hello("Garvit sir",bye)

//jab koi function kisi function ko as a argument accept kare ya gfir return kare to us func. ko hof bolte h
//and map filter ye sab built in hof h
//task
// ek higher-order function repeatNTimes(fn, n)
// Jo kisi function fn ko n baar call kare
// fn ek callback function hoga, jo har call pe run karega

function repeatNTimes(fn ,n){
    for(let i=1;i<=n;i++){
        setTimeout(() => {
            fn()
        }, i*1000);

    }
}

function sayhello(){
    console.log("hello bro")
}

repeatNTimes(sayhello,5)


//Now Started Event loop concepts
//* js is single threaded el time pe ek hi kaam karega
//* lekin async task ko bg me bhej dta h
//js Executin process
//Call Stack: sync code yha execute hoga,
//Web APIS/Node APIS: fetch karna ya setTimeOut etc
//callBack Queue(Macrotask que):setTime,setInter etc
//Microtask Queue: promises
//event Loop: check karega agar call stack empty h to task ko queue me se usme push kar dega
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
//sabse phle start aaaega qki line by line chalega
//then wo set time out pe jaega zarur lekin 0 sec k dlay k 
// karan wo use callback queue me daal dega
//then wo promise pe jaega aur usme bhi resolve k lie 
// use bhi queue me daal dega
//aur print karega end fir queue me sabse phle use timeout milega to use
//use utha k stack me dalega then promise ki bhi aur stack lifo se following output aaega
// final output Start->End->Promise->setTimeout.





//Stack Memory & Heap Memory
//both are storeed in Ram
//stack has fixed size and used to store local
//heap memory is dynamically allocated and can grow and shrink accordnig need

//task by vikas Sir Research  on js execution and whi he execute one by one
//js execution need two things "js engine & Host environment" both are softw.
