$(document).ready(function () {
  $("form").submit(function(event){
    event.preventDefault();
    const stringInput = $("#string").val();
    let stringInputArray = stringInput.split("");
    console.log(stringInput);
    console.log(stringInputArray);
    let newArray = [];
    console.log(newArray);
    for (let i=0; i<stringInputArray.length; i+=1) {
      if (stringInputArray[i] === "a" || stringInputArray[i] === "A" || stringInputArray[i] === "e" || stringInputArray[i] === "E" || stringInputArray[i] === "i" || stringInputArray[i] === "I" || stringInputArray[i] === "o" || stringInputArray[i] === "O" || stringInputArray[i] === "u" || stringInputArray[i] === "U" ) {
        newArray[i] = "-";
      } else {
        newArray[i] = stringInputArray[i];
      };
    };
    let newString = newArray.join("");
    $("#return").text(newString);
    $("form").hide();
    $("#returnDiv").show();
  });
});

