window.addEventListener("DOMContentLoaded", () => {
    // Chat button
    const chatButton = document.createElement("div");
    chatButton.style = "position: fixed; bottom: 90px; right: 20px; width: 60px; height: 60px; border-radius: 50%; background: #007bff; display:flex; justify-content:center; align-items:center; color:white; font-size:30px; cursor:pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.2); z-index:1000;";
    chatButton.innerHTML = "💬";
    document.body.appendChild(chatButton);

    // Chat box
    const chatBox = document.createElement("div");
    chatBox.style = "position: fixed; bottom: 160px; right: 20px; width: 300px; height: 400px; background:white; border-radius:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); display:none; flex-direction:column; overflow:hidden; z-index:1000;";
    chatBox.innerHTML = `
        <div style="background:#007bff; color:white; padding:10px; text-align:center;">Lakeside HR Chat</div>
        <div id="chatContent" style="flex:1; padding:10px; overflow-y:auto;"></div>
        <div id="chatOptions" style="padding:10px;"></div>
    `;
    document.body.appendChild(chatBox);

    const chatContent = document.getElementById("chatContent");
    const chatOptions = document.getElementById("chatOptions");

    chatButton.addEventListener("click", () => {
        chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
        chatBox.style.flexDirection = "column";
        if(chatBox.style.display === "flex") showOptions();
    });

    function addMessage(message, from="bot") {
        const msg = document.createElement("div");
        msg.style = from === "bot" ? "text-align:left; margin-bottom:10px; color:#007bff;" : "text-align:right; margin-bottom:10px;";
        msg.innerText = message;
        chatContent.appendChild(msg);
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    function showOptions() {
        chatOptions.innerHTML = "";

        const options = [
            {text: "Learn about Services", value: "services"},
            {text: "Schedule a Free Consultation", value: "consultation"},
            {text: "Download HR Resources", value: "resources"},
            {text: "Talk to a Human", value: "human"}
        ];

        options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerText = option.text;
            btn.style = "margin:5px 0; width:100%; padding:10px; border:none; border-radius:5px; background:#007bff; color:white; cursor:pointer;";
            btn.onclick = () => handleOption(option.value);
            chatOptions.appendChild(btn);
        });
    }

    function handleOption(option) {
        addMessage(option, "user"); // show user's selection
        chatOptions.innerHTML = ""; // clear options

        if(option === "services") {
            addMessage("We offer Talent Management, HR Operations, Compliance services. Would you like to schedule a free consultation?");
            showOptions();
        }
        else if(option === "consultation") {
            addMessage("Great! Please enter your name and contact number:");

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
                    chatOptions.innerHTML = "";
                    showOptions();
                } else {
                    alert("Please enter your name and contact number!");
                }
            }
        }
        else if(option === "resources") {
            addMessage("You can download our HR resources here: [Insert Link]");
            showOptions();
        }
        else if(option === "human") {
            addMessage("Please click the WhatsApp button to chat directly with our team.");
            showOptions();
        }
    }
});
