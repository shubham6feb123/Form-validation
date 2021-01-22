const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone')
let validEmail = false;
let validPhone = false;
let validUsername = false;

// console.log(username,email,phone);

username.addEventListener('blur', (e) => {
    // console.log('name has been blured')

    //validate name here 
    let regex = /^[a-zA-z]([0-9a-zA-Z]){3,10}$/;
    let str = username.value;
    // console.log(regex,str)
    if (regex.test(str) === true) {
        console.log('it matched')
        username.classList.remove('is-invalid')
        validUsername = true;

    } else {
        username.classList.add('is-invalid');
        validUsername = false;
        //    console.log('not matched')
    }
});

email.addEventListener('blur', () => {
    // console.log('email has been blured')
    //email validate here
    let regex = /^([0-9a-zA-Z_\-\.]+)@([0-9a-zA-Z_\-\.]+)\.([a-zA-Z]){2,7}$/;
    let str1 = email.value;
    console.log(regex, str1)
    if (regex.test(str1) === true) {
        console.log('it matched')
        validEmail = true;
        email.classList.remove('is-invalid')

    } else {
        email.classList.add('is-invalid');
        validEmail = false;
        //    console.log('not matched')
    }
});

phone.addEventListener('blur', () => {
    // console.log('phone has been blured')
    //phone validate here
    let regex = /^([0-9]){10}$/;
    let str2 = phone.value;
    // console.log(regex,str2);
    if (regex.test(str2) === true) {
        // console.log('it matched')
        phone.classList.remove('is-invalid')
        validPhone = true;
    } else {
        phone.classList.add('is-invalid');
        validPhone = false;
        //    console.log('not matched')
    }
});

let submit = document.getElementById('sbmt');
submit.addEventListener('click', (e) => {
    // e.preventDefault();
    if (validEmail && validPhone && validUsername === true) {
        let success = document.getElementById('success');
        success.classList.add('show');
        setTimeout(function () { success.classList.remove('show') }, 5000)
        clear();
        console.log('submitted')
        validEmail = false;
        validPhone = false;
        validUsername = false;
    }
    else {
        console.log('not submitted');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        setTimeout(function () { failure.classList.remove('show') }, 5000)

        console.log('not submitted')
    }
})

function clear() {
    let sim = document.querySelectorAll('input');
    let area = document.querySelectorAll('textarea')
    sim.forEach(function (element) { element.value = ""; });
    area.forEach(function (element) { element.value = ""; });

    // console.log(area)
}
