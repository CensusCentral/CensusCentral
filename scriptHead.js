const form = document.querySelector("form"),
    nextBtns = form.querySelectorAll(".nextBtn"),
    backBtns = form.querySelectorAll(".backBtn"),
    allInputFirst = form.querySelectorAll(".first input"),
    allInputSecond = form.querySelectorAll(".second input"),
    allInputThird = form.querySelectorAll(".third input"),
    allInputFourth = form.querySelectorAll(".fourth input");

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
            switch(index) {
                case 0:
                    form.classList.add('secActive');
                    break;
                case 1:
                    form.classList.add('thirdActive');
                    break;
                case 2:
                    form.classList.add('fourthActive');
                    break;
                case 3:
                    form.classList.add('fifthActive');
                    break;
            }
        }
    });
});

// Function to go back to the previous section
backBtns.forEach((backBtn, index) => {
    backBtn.addEventListener("click", () => {
        switch(index) {
            case 0:
                form.classList.remove('secActive');
                break;
            case 1:
                form.classList.remove('thirdActive');
                break;
            case 2:
                form.classList.remove('fourthActive');
                break;
            case 3:
                form.classList.remove('fifthActive');
                break;
        }
    });
});
