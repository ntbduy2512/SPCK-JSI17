import app from "./index.js";
import Register from "./register.js";
class Login {
    $containerDiv
    $titleHeader
    $signinForm
    $emailInputEmail
    $passInputPass
    $submitBtn
    $gotoSignupLink


    constructor() {
        this.$emailInputEmail = document.createElement("input");
        this.$emailInputEmail.type = "email";
        this.$emailInputEmail.placeholder = "Enter your email";

        this.$passInputPass = document.createElement("input");
        this.$passInputPass.type = "password";
        this.$passInputPass.placeholder = "Enter your password";

        this.$submitBtn = document.createElement("button");
        this.$submitBtn.type = "submit";
        this.$submitBtn.innerHTML = "Login";
        this.$submitBtn.addEventListener("click", this.handleSubmit);

        this.$gotoSignupLink = document.createElement("a");
        this.$gotoSignupLink.innerHTML = "Don't have an account? Sign up";
        this.$gotoSignupLink.addEventListener("click", this.gotoSignup)

        this.$containerDiv = document.createElement("div");
        this.$containerDiv.classList.add("center", "app");

        this.$titleHeader = document.createElement("h2");
        this.$titleHeader.innerHTML = "Sign in to your account";

        this.$signinForm = document.createElement("form");

    }

    initRender = (container) => {
        
        this.$signinForm.appendChild(this.$emailInputEmail);
        this.$signinForm.appendChild(this.$passInputPass);
        this.$signinForm.appendChild(this.$submitBtn);

        this.$containerDiv.appendChild(this.$titleHeader);
        this.$containerDiv.appendChild(this.$signinForm);
        this.$containerDiv.appendChild(this.$gotoSignupLink);

        container.appendChild(this.$containerDiv);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.$emailInputEmail.value;
        const password = this.$passInputPass.value;
        if(email == ""){
            alert("no email")
            return
        }

        if(password.length <6){
            alert("password not long enough")
            return
        }

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    };

    gotoSignup = () => {
        const signup = new Register();
        // change active section
        app.changeActiveScreen(signup)
    };
}

export default Login;