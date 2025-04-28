//Set up event listener for submit button

var submitButton = document.querySelector("#get-age");

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    calculateAnimalAge();
});

function calculateAnimalAge(){
    var firstName = document.querySelector("#first");
    var lastName = document.querySelector("#last");
    var age = document.querySelector("#age");
    var displayInfo = document.querySelector("#display-info");

    //Validate form to see nothing is blank
    if(firstName.value === "" || lastName.value === "" || age.value === ""){
        alert("Please enter the missing data");
        return;
    }

    //Calculate the animal years
    var dogYears = (Number(age.value) * 7).toFixed();
    var catYears = (Number(age.value) * 4).toFixed();

    displayInfo.innerHTML = `Here is your info:
                            <br>
                            <br>
                            Your name is: ${firstName.value} ${lastName.value}
                            <br>
                            Your age in dog years: ${dogYears}
                            <br>
                            Your age in cat years: ${catYears}`

}