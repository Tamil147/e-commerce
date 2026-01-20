let username = document.getElementById("name")

let Password = document.getElementById("password")
let allInput = document.querySelectorAll(".input-wrapper")
let success = document.querySelectorAll("#success")
let error = document.querySelectorAll("#error")
let form = document.querySelector("form")
let errorMes = document.querySelectorAll(".error-msg")
let toast = document.querySelector(".toast-success")

let user = JSON.parse(localStorage.getItem("user"))
console.log(user);





form.addEventListener("submit", (e) => {

    e.preventDefault()
    console.log("working");
    for (let z of allInput) {
        z.style = "border:2px solid grey;"
    }
    for (let z of errorMes) {
        z.innerText = ""
    }
    for (let z of success) {
        z.style = "display:none"
    }
    for (let z of error) {
        z.style = "display:none"
    }
    if (username.value !== "") {
        allInput[0].style = "border:2px solid green"
        error[0].style = "display:none"
        success[0].style = "display:block"
    }
    if (Password.value !== "") {
        allInput[1].style = "border:2px solid green"
        error[1].style = "display:none"
        success[1].style = "display:block"
    }
    if (username.value == "") {
        allInput[0].style = "border:2px solid red"
        error[0].style = "display:flex"
        errorMes[0].innerText = "Username cannot be empty"
    } else if (username.value !== user.username) {
        errorMes[0].innerText = "Invalid Username"
        allInput[0].style = "border:2px solid red"
        error[0].style = "display:none"
        success[0].style = "display:nonne"
    }
    if (Password.value == "") {
        allInput[1].style = "border:2px solid red"
        error[1].style = "display:flex"
        errorMes[1].innerText = "Password cannot be empty"
    } else if (Password.value !== user.Password) {
        errorMes[1].innerText = "Invalid password"
        allInput[1].style = "border:2px solid red"
        error[1].style = "display:none"
        success[1].style = "display:none"
    }
    if (username.value === user.username && Password.value === user.Password) {
        user.login = true
        localStorage.setItem("user", JSON.stringify(user))
        console.log(JSON.parse(localStorage.getItem("user")));
        toast.classList.add("active-toast")
        setTimeout(() => {
            location.href = "./index.html"
            toast.classList.remove("active-toast")
        }, 2000)
    }

})
let newPass = document.getElementById("new-password")
let confirmPass = document.getElementById("confirm-password")
let forget = document.querySelector(".forget-pass")
let forgetForm = document.querySelector("#forget-form")
let forgetErrormsg = document.querySelector(".forget-msg")
let toastMessage = document.querySelector(".toast-message")

forgetForm.addEventListener("submit", (e) => {
    e.preventDefault()
    forgetErrormsg.innerText = ""
    if (newPass.value == "") {
        forgetErrormsg.innerText = "Please enter your passwords"
    }
    if (confirmPass.value == "") {
        forgetErrormsg.innerText = "Please enter your passwords"
    } else if (newPass.value !== confirmPass.value) {
        forgetErrormsg.innerText = "Your Password is Mismatch"
    } else if (newPass.value === confirmPass.value) {
        user.Password = confirmPass.value
        localStorage.setItem("user", JSON.stringify(user))
        // forgetForm.style = "display:none;"
        toastMessage.innerText = "Password changed Successfully!"
        toast.classList.add("active-toast")

        setTimeout(() => {
            window.location.reload()

            toast.classList.remove("active-toast")
        }, 2000)

    }


})

function openForget() {
    forget.style = "display:flex"
}
function closeForget() {
    forget.style = "display:none"
}

