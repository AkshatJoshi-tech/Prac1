//string uppercase me ki
let nae = "akshat";
let upper = nae.toUpperCase();
console.log(upper);

//strung me jha world h wha se cut kia
let str = "Hello world";
console.log(str.slice(6));

//dog ki jagah cat replace kia
let str1 = "The dog is cute";
let rep = str1.replace("dog", "cat");
console.log(rep);

//strig ko array me convert kia and length pta ki string ki
console.log(str1.split(" "));
console.log(str1.length);

//extra sapces hata die
let messy = "   helo world  ";
console.log(messy);
console.log(messy.trim());

//array me convert kia and first letter uppercase kia
let input = "apple,banana,grape";
let fruits1 = input.split(",");
let capitalize1 = fruits1.map(
  (i) => i.charAt(0).toUpperCase() + fruits1.slice(1)
);
console.log(capitalize1);
let output = capitalize1.join(", ");
console.log(output);

//string me search kia ki hello h ya nahi
let str2 = "hello world!";
console.log(str2.includes("hello"));

//index pata ki string me se @ ka
let email = "user@example.com";
console.log(email.indexOf("@"));

//3 times ha ko print kia
let word = "ha";
console.log(word.repeat(3));

//first letter upperc
let nam = "raju";
console.log(nam.charAt(0).toUpperCase() + nam.slice(1));

//space ki jagah -
let title = "mera bharat mahan";
console.log(title.replace(" ", "-"));

let data = ["  alice ", " bob", "CHARLIE  "];
let bData = data.map((i) => {
  return i.trim().charAt(0).toUpperCase() + i.slice(1);
});
console.log(bData);
