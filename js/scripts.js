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
    console.log(newArray);
    let newString = newArray.join("");
    $("#return").text(newString);
    $("form").hide();
    $("#returnDiv").show();
  });
});

// $(document).ready(function () {
//   $("form").submit(function(event){
//     event.preventDefault();
//     const stringInput = $("#string").val();
//     console.log(stringInput);
//     let newString = "";
//     console.log(newString);
//     for (let i=0; i<stringInput.length; i+=1) {
//       if (stringInput[i] === "a" || stringInput[i] === "A" || stringInput[i] === "e" || stringInput[i] === "E" || stringInput[i] === "i" || stringInput[i] === "I" || stringInput[i] === "o" || stringInput[i] === "O" || stringInput[i] === "u" || stringInput[i] === "U" ) {
//         newString[i] = "-";
//       } else {
//         newString[i] = stringInput[i];
//       };
//     };
//     console.log(newString);
//     $("#return").text(newString);
//     $("form").hide();
//     $("#returnDiv").show();
//   });
// });

