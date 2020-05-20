// AUTOMATIC DATE UPDATE FOR FOOTER

const footerYear = document.getElementById("year");
const date = new Date();
const year = date.getFullYear();

footerYear.innerText = year;

const btn = document.getElementById("start-btn");

btn.addEventListener("click", holidayDestination);


// HOLIDAY DESTINATION FUNCTION

function holidayDestination() {
    const calculating = document.getElementById("calc");
    const qs = document.getElementById("qs")
    const results = document.getElementById("results");
    var q1Autumn = document.getElementById("q1-autumn");
    var q2book =document.getElementById("q2-book");
    var q3Y = document.getElementById("q3-yes");
    var q3N = document.getElementById("q3-no");

    if (q1Autumn.checked == true && q3Y.checked == true || q2book.checked == true && q3Y.checked == true)  {
        btn.classList.add("calculating")
        btn.innerHTML = "Calculating...";

        setTimeout(() => {
            btn.classList.remove("calculating");
            btn.classList.add("calculated")
            btn.innerHTML = "Calculated";
            qs.style.display="none";
            btn.style.display="none";
            results.innerHTML = "Hurray! <br> Your dream holiday destination is your own home!";
            document.getElementById('again-button').style.display="";
          }, 1500);
        

    } else if (q3Y.checked == true){
        btn.classList.add("calculating")
        btn.innerHTML = "Calculating...";

        setTimeout(() => {
            btn.classList.remove("calculating");
            btn.classList.add("calculated")
            btn.innerHTML = "Calculated";
            qs.style.display="none";
            btn.style.display="none"
            results.innerHTML = "Sorry, the planet Earth is in the middle of pandemic. <br> Your holiday destination is your own home. <br> Try next year!";
            document.getElementById('again-button').style.display="";
          }, 2000);
        

    } else if (q3N.checked == true){
        
        btn.classList.add("calculating")
        btn.innerHTML = "Calculating...";

        setTimeout(() => {
            btn.classList.remove("calculating");
            btn.classList.add("calculated")
            btn.innerHTML = "Calculated";
            qs.style.display="none";
            btn.style.display="none";
            results.innerHTML = "Your dream holiday location is anywhere <u>except</u> the planet Earth!";
            document.getElementById('again-button').style.display="";
            }, 2000);
    
    } else {
        results.innerHTML = "Invalid answers. Please try again."
    };
};

//  TRY AGAIN FUNCTION

function tryAgain(){
    location.reload()
}

// slider 

var slider = document.getElementById("q4-budget");
var output = document.getElementById("value-number");
output.innerHTML = slider.value; 

slider.oninput = function() {
  output.innerHTML = this.value;
}
