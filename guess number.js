// generates random number from 1 to 100
const num = Math.floor(Math.random() * 100) + 1;
console.log(num);

// event listener for "go" button
document.getElementById("go").addEventListener("click", guess)

function guess() {
    //gets user's number from the field
    const userNum = Number(document.getElementById("number").value);
    
    // userNumber is smaller
    if (userNum < num) {
        // smaller in range of 5
        if (num - userNum <= 5) {
            document.getElementById("tip").innerHTML = "Close and number is bigger"
        }
        else {
            document.getElementById("tip").innerHTML = "Number is bigger"
        }
    }
    
    // UserNumber is greater
    else if (userNum > num) {

        // greater in range of 5
        if ( userNum - num <= 5) {
            document.getElementById("tip").innerHTML = "Close and number is smaller"
        }
        else {
            document.getElementById("tip").innerHTML = "Number is smaller"
        }
    }

    // if number is correct button Play Again created
    else {
        document.getElementById("tip").innerHTML = "Correct!"
        const btn = document.createElement("button");
        const res = document.getElementById("uudestaan");
        res.appendChild(btn);
        btn.innerHTML = "Play again"
        btn.addEventListener("click" , () => {
            btn.remove();
            location.reload();
        })
    }
    // reset value in the field
    document.getElementById("number").value = "";
}
