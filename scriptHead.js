const form = document.querySelector("form"),
    nextBtns = form.querySelectorAll(".nextBtn"),
    backBtns = form.querySelectorAll(".backBtn"),
    allInputFirst = form.querySelectorAll(".first input"),
    allInputSecond = form.querySelectorAll(".second input"),
    allInputThird = form.querySelectorAll(".third input"),
    allInputFourth = form.querySelectorAll(".fourth input");

const sections = document.querySelectorAll(".form");

backBtnToFormNumber = document.querySelector(".backBtnToFormNumber"),

function goToSection(current, next) {
    sections[current].classList.remove('active');
    sections[next].classList.add('active');
}

// Function to go to the next section
nextBtns.forEach((nextBtn, index) => {
    nextBtn.addEventListener("click", () => {
        let valid = true;
        let inputs;

        switch(index) {
            case 0:
                inputs = allInputFirst;
                break;
            case 1:
                inputs = allInputSecond;
                break;
            case 2:
                inputs = allInputThird;
                break;
            case 3:
                inputs = allInputFourth;
                break;
        }

        inputs.forEach(input => {
            if (input.value === "") {
                valid = false;
            }
        });

        if (valid) {
            goToSection(index, index + 1);
        }
    });
});

// Function to go back to the previous section
backBtns.forEach((backBtn, index) => {
    backBtn.addEventListener("click", () => {
        goToSection(index + 1, index);
    });
});


// Function to go to FormNumber.html
backBtnToFormNumber.addEventListener("click", () => {
    window.location.href = "FormNumber.html";
});