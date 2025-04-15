//normal js obj ko js me convert karna

const obj = { name: "Akshat", age: 20 };
const jsonObj = JSON.stringify(obj);
console.log(jsonObj);

//key points:
//normal obj me key ko "" me nahi likha jata json me likha jata hai
//and JSON.stringify() ye normal se string yani json me karega convert

//json se normal
const str = `{"name":"Akshat","age":25}`;
const obj1 = JSON.parse(str);
console.log(obj1);

//key points :
//string obj/json obj ko normal me convert karne k lie
//JSON.parse()  methode use kar skte h

const user = {
  username: "amit123",
  email: "amit@example.com",
  active: true,
};
const jsObj = JSON.stringify(user);
console.log(jsObj);

const jsonStr = '{"product":"Laptop","price":45000}';
const nobj = JSON.parse(jsonStr);
console.log(nobj);
const jsonArrayStr = `
[
  { "id": 1, "name": "Item A" },
  { "id": 2, "name": "Item B" },
  { "id": 3, "name": "Item C" }
]
`;
const itemList = JSON.parse(jsonArrayStr);

itemList.forEach(function(item) {
console.log("ID:", item.id, "| Name:", item.name);
});