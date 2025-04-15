//i created promise funciton
function getNumber() {
  return new Promise((resolve, reject) => {
    let num = Math.random();
    let success = Math.random() < 0.5;
    if (success == true) {
      resolve("Ths Number is" + num);
    } else {
      reject("failed to load number");
    }
  });
}

//then i resolved with .then()
getNumber()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//i also tried this with async await
async function load() {
  try {
    const data = await getNumber();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
load();
