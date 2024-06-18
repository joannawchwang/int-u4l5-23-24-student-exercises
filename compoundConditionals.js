// CODE ALONG

// 1. Create a secret username and password.
//  - The variables are declared already. Update the values.
let secretUsername = ("wangchu0");
let secretPassword = ("123123");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    let message = document.querySelector(".message");

    // 2. Create a compound conditional statement to check for the following:
    //  - If the username AND password is correct, update the text of the message div to say "Success!"
    if (username === secretUsername && password === secretPassword){
        message.innerHTML = "Success!";
    } else if (username === secretUsername && password !== secretPassword) {
        message.innerHTML = "Wrong password - be careful, don't mess this up too many times.";
    } else if (username !== secretUsername && password === secretPassword) {
        message.innerHTML = "Wrong username - is there a typo?";
    } else {
        message.innerHTML = "Incorrect username and password. Hmm. Suspicious.";
    }
    // CODE SOLO
    // 3. Create additional compound conditionals that check for the following:
    //  - If the username is correct AND the password is incorrect, update the text of the message div to say "Wrong password - be careful, don't mess this up too many times."<above>
    //  - If the password is correct AND the username is incorrect, update the text of the message div to say "Wrong username - is there a typo?" <above>
    //  - Finally, if the password is incorrect AND the username is incorrect, update the text of the message div to say "Incorrect username and password. Hmm. Suspicious." <above>
    
    
    // Bonus: If the username OR password fields are empty, update the text of the message div to say "You need to enter SOMETHING."
    //  - Hint: What string represents an "empty" message. ---> "" (Yes, it's just that)
    if (username === "" || password === "") {
        message.innerHTML = "You need to enter SOMETHING!!"
    }
});
