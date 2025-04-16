window.onload = function () {
  document.getElementById("click-me").addEventListener("click", function () {
    alert("Success");
  });

  document.getElementById("change-text").addEventListener("click", function () {
    document.getElementById("my-text").textContent = "new text";
  });


  //counter
  let counter=0
  document.getElementById("plus").addEventListener("click",function(){
    counter++;
    document.getElementById("counter").textContent=counter;
  })

  document.getElementById("minus").addEventListener("click",function(){
    counter--;
    document.getElementById("counter").textContent=counter;
  })
};
