let username = document.getElementById("name")
let Email = document.getElementById("email")
let Password = document.getElementById("password")
let allInput = document.querySelectorAll(".input-wrapper")
let success = document.querySelectorAll("#success")
let error = document.querySelectorAll("#error")

let form = document.querySelector("form")
let toast = document.querySelector(".toast-success")






form.addEventListener("submit", (e) => {
    e.preventDefault()
    for (let z of allInput) {
        z.style = "border:2px solid grey;"
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
    if (Email.value !== "") {
        allInput[1].style = "border:2px solid green"
        error[1].style = "display:none"
        success[1].style = "display:block"
    }
    if (Password.value !== "") {
        allInput[2].style = "border:2px solid green"
        error[2].style = "display:none"
        success[2].style = "display:block"
    }


    if (username.value == "") {
        allInput[0].style = "border:2px solid red"
        error[0].style = "display:flex"
    }
    if (Email.value == "") {
        allInput[1].style = "border:2px solid red"
        error[1].style = "display:flex"
    }
    if (Password.value == "") {
        allInput[2].style = "border:2px solid red"
        error[2].style = "display:flex"
    } else if (username.value !== "" && Email.value !== "" && Password.value !== "") {
        let user = {
            username: username.value,
            email: Email.value,
            Password: Password.value,
            login: false
        }
        localStorage.setItem("user", JSON.stringify(user))
        toast.classList.add("active-toast")


        setTimeout(() => {
            location.href = "./login.html"
            toast.classList.remove("active-success")
        }, 2000)
    }



})