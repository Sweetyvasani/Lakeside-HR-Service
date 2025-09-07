function handleOption(option) {
    addMessage(option, "user"); // show user's selection

    // Clear previous options
    chatOptions.innerHTML = "";

    if(option === "services") {
        addMessage("We offer Talent Management, HR Operations, Compliance services. Would you like to schedule a free consultation?");
        showOptions(); // show options again
    }
    else if(option === "consultation") {
        addMessage("Great! Please enter your name and contact number:");

        // Create input field dynamically
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Your Name and Contact Number";
        input.style = "width:100%; padding:10px; margin-top:5px; border-radius:5px; border:1px solid #ddd;";

        const submitBtn = document.createElement("button");
        submitBtn.innerText = "Submit";
        submitBtn.style = "margin-top:5px; width:100%; padding:10px; border:none; border-radius:5px; background:#007bff; color:white; cursor:pointer;";

        chatOptions.appendChild(input);
        chatOptions.appendChild(submitBtn);

        submitBtn.onclick = () => {
            if(input.value.trim() !== "") {
                addMessage(input.value, "user");
                addMessage("Thank you! Our team will contact you soon.");
                chatOptions.innerHTML = ""; // remove input after submission
                showOptions(); // show main options again
            } else {
                alert("Please enter your name and contact number!");
            }
        }
    }
    else if(option === "resources") {
        addMessage("You can download our HR resources here: [Insert Link]");
        showOptions(); // show options again
    }
    else if(option === "human") {
        addMessage("Please click the WhatsApp button to chat directly with our team.");
        showOptions(); // show options again
    }
}
