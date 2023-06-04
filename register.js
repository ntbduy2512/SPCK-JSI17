import Login from './login.js';
import app from './index.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";



class Register{
    $containerDiv
    $titleHeader
    $signupForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $subimtBtn
    $gotoSigninLink

    constructor() {
        this.$emailInputEmail = document.createElement("input");
        this.$emailInputEmail.type = "email";
        this.$emailInputEmail.placeholder = "Enter your email";

        this.$nameInputTxt = document.createElement("input");
        this.$nameInputTxt.type = "text";
        this.$nameInputTxt.placeholder = "Enter your name";

        this.$passInputPass = document.createElement("input");
        this.$passInputPass.type = "password";
        this.$passInputPass.placeholder = "Enter your password";

        this.$confirmPassInputPass = document.createElement("input");
        this.$confirmPassInputPass.type = "password";
        this.$confirmPassInputPass.placeholder = "Confirm your password";

        this.$subimtBtn = document.createElement("button");
        this.$subimtBtn.type = "submit";
        this.$subimtBtn.innerHTML = "Register";
        this.$subimtBtn.addEventListener("click", this.handleSubmit);

        this.$gotoSigninLink = document.createElement("a");
        this.$gotoSigninLink.innerHTML = "You already have an account? Sign in";
        this.$gotoSigninLink.addEventListener("click", this.gotoSignin)

        this.$containerDiv = document.createElement("div");
        this.$containerDiv.classList.add("center", "app");

        this.$titleHeader = document.createElement("h2");
        this.$titleHeader.innerHTML = "Create your account";

        this.$signupForm = document.createElement("form");
        this.$signupForm.classList.add("centering", "flex-column",)


    }
    initRender = (container) => {

        this.$signupForm.appendChild(this.$emailInputEmail);
        this.$signupForm.appendChild(this.$nameInputTxt);
        this.$signupForm.appendChild(this.$passInputPass);
        this.$signupForm.appendChild(this.$confirmPassInputPass);
        this.$signupForm.appendChild(this.$subimtBtn);

        this.$containerDiv.appendChild(this.$titleHeader);
        this.$containerDiv.appendChild(this.$signupForm);
        this.$containerDiv.appendChild(this.$gotoSigninLink);

        container.appendChild(this.$containerDiv)
    }

    

    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.$emailInputEmail.value;
        const password = this.$passInputPass.value;
        const confirmPass = this.$confirmPassInputPass.value;
        const userName = this.$nameInputTxt.value;

        if(email == ""){
            alert("no email")
            return
        }

        if(password.length <6){
            alert("password not long enough")
            return
        }

        if(userName == ""){
            alert("no name")
            return
        }

        if(confirmPass == ""){
            alert("confirm your password")
            return
        }

        if(password != confirmPass){
            alert("passwords dont match")
            return
        }


        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            document.location.href = "client/index.html"
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    };

    gotoSignin = () => {
        const login = new Login();
        // change active section
        app.changeActiveScreen(login);
    };
}




export default Register;