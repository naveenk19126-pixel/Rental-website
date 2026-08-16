// ================= REGISTER =================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("registerName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        if (password.length < 6) {

            alert("Password must contain at least 6 characters.");

            return;
        }


        const existingUser =
            JSON.parse(localStorage.getItem("rentEaseUser"));


        if (existingUser &&
            existingUser.email === email) {

            alert("An account with this email already exists.");

            return;
        }


        const user = {

            name: name,
            email: email,
            password: password

        };


        localStorage.setItem(
            "rentEaseUser",
            JSON.stringify(user)
        );


        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}


// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;


        const user =
            JSON.parse(localStorage.getItem("rentEaseUser"));


        if (!user) {

            alert("No account found. Please register first.");

            return;
        }


        if (
            user.email === email &&
            user.password === password
        ) {

            localStorage.setItem(
                "rentEaseLoggedIn",
                "true"
            );


            alert(
                "Welcome back, " +
                user.name +
                "!"
            );


            window.location.href = "products.html";

        } else {

            alert("Invalid email or password.");

        }

    });

}