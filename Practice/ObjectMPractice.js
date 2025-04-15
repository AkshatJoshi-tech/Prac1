//ek object banay and sume phle year ki value change ki then color property add ki then car,
//  k model ko delete kia
let car = {
  brand: "Toyota",
  model: "Innova",
  year: 2020,
};

car.year = 2022;
console.log(car.year);
car.color = "White";
console.log(car);
delete car.model;
console.log(car);

//student object bana k usme obj methode banai and use kia
let student = {
  name: "Akshat",
  marks: 41,
  checkResult: function () {
    if (this.marks > 40) {
      return console.log("pass");
    } else {
      return console.log("Fail");
    }
  },
};
student.checkResult();

let movie = {
  title: "Akshat",
  rating: 10,
  showInfo: function () {
    return console.log("Movie :" + this.title + "   Rating :" + this.rating);
  },
};
movie.showInfo();

//object bana k usme methode banai and use destructure kia nd print kia
let moviee = {
  title: "Akshat",
  rating: 10,
  showInfo: function () {
    return console.log("Movie :" + this.title + "   Rating :" + this.rating);
  },
};
let { title, rating, showInfo } = moviee;
console.log(title);
console.log(rating);
console.log(showInfo());

//spread operator ka use kia
function sumAll(...ar) {
  let sum = 0;
  for (let i = 1; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  console.log(sum);
}
sumAll(1, 2, 3);
