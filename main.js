const btn = document.getElementById("start-btn");

btn.addEventListener("click", holidayDestination);


function holidayDestination() {
    const calculating = document.getElementById("calc")
    const results = document.getElementById("results")
    var q1Spring = document.getElementById("q1-spring")
    var q1Summer = document.getElementById("q1-summer")
    var q1Autumn = document.getElementById("q1-autumn")
    var q1Winter = document.getElementById("q1-winter")
    var q2Y = document.getElementById("q2-yes")
    var q2N = document.getElementById("q2-no");

    if (q1Spring.checked == true && q2Y.checked == true || q1Summer.checked == true && q2Y.checked == true || q1Winter.checked == true && q2Y.checked == true) {
        btn.classList.add("calculating")
        btn.innerHTML = "Calculating...";

        setTimeout(() => {
            btn.classList.remove("calculating");
            btn.classList.add("calculated")
            btn.innerHTML = "Calculated";
            results.innerHTML = "Sorry, the planet Earth is in the middle of pandemic. <br> Your holiday destination is your own home. <br> Try next year!";
          }, 1500);
        

    } else if (q1Autumn.checked == true && q2Y.checked == true) {
        btn.classList.add("calculating")
        btn.innerHTML = "Calculating...";

        setTimeout(() => {
            btn.classList.remove("calculating");
            btn.classList.add("calculated")
            btn.innerHTML = "Calculated";
            results.innerHTML = "Hurray! <br> Your dream holiday destination is your own home!";
          }, 2000);
        

    } else if ( q1Spring.checked == true && q2N.checked == true ||
                q1Summer.checked == true && q2N.checked == true ||
                q1Autumn.checked == true && q2N.checked == true ||
                q1Winter.checked == true && q2N.checked == true) {
        
        btn.classList.add("calculating")
        btn.innerHTML = "Calculating...";

        setTimeout(() => {
            btn.classList.remove("calculating");
            btn.classList.add("calculated")
            btn.innerHTML = "Calculated";
            results.innerHTML = "Your dream holiday location is anywhere <u>except</u> the planet Earth!";
            }, 2000);
    
    } else {
        results.innerHTML = "Invalid answers. Please try again."
    };
};
