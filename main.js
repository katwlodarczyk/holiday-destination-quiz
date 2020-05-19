const btn = document.getElementById("start-btn");

btn.addEventListener("click", holidayDestination);


function holidayDestination() {
    alert("Hello and welcome to the quiz! Answer a few simple questions and I will tell you your dream holiday destination!");
    var name = prompt("Please enter your name to play!")
    alert("Welcome to the game " + name + ". Get ready for your first question...")
    var q1 = prompt("What is your favourite season? (spring, summer, autumn or winter?)")
    var q3 = prompt("Do you live on planet Earth? (yes/no)")

    if (q1 == "spring" && q3 == "yes" || q1 == "summer" && q3 == "yes" || q1 == "winter" && q3 == "yes") {
        alert("Calculating results....");
        alert("Sorry, the planet Earth is in the middle of pandemic. Your holiday destination is your own home. Try next year!");
    } else if (q1 == "autumn" && q3 == "yes") {
        alert("Calculating results....");
        alert("Hurray! Your dream holiday destination is your own home!");

    } else if ( q1 == "winter" && q3 == "no" ||  q1 == "autumn" && q3 == "no" ||  q1 == "summer" && q3 == "no" || q1 == "spring" && q3 == "no") {
        alert("Calculating results....");
        alert("Your dream holiday location is anywhere except the planet Earth!");
    } else {
        confirm("Invalid answers. Please try again.")
    };
};

// holidayDestination();