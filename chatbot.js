// chatbot.js
window.addEventListener("DOMContentLoaded", () => {
    const chatButton = document.createElement("div");
    chatButton.style = "position: fixed; bottom: 90px; right: 20px; width: 60px; height: 60px; border-radius: 50%; background: #007bff; display:flex; justify-content:center; align-items:center; color:white; font-size:30px; cursor:pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.2); z-index:1000;";
    chatButton.innerHTML = "💬";
    document.body.appendChild(chatButton);

    const chatBox = document.createElement("div");
    chatBox.style = "position: fixed; bottom: 160px; right: 20px; width: 300px; height: 400px; background:white; border-radius:10px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); display:none; flex-direction:column; overflow:hidden; z-index:1000;";
    chatBox.innerHTML = `
        <div style="background:#007bff; color:white; padding:10px; text-align:center;">Lakeside HR Chat</div>
        <div id="chatContent" style="flex:1; padding:10px; overflow-y:auto;"></div>
        <input id="chatInput" style="border:none; border-top:1px solid #ddd; padding:10px; width:100%;" placeholder="Type your message..."/>
    `;
    document.body.appendChild(chatBox);

    chatButton.addEventListener("click", () => {
        chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
        chatBox.style.flexDirection = "column";
    });

    const chatContent = document.getElementById("chatContent");
    const chatInput = document.getElementById("chatInput");

    chatInput.addEventListener("keypress", function(e) {
        if(e.key === 'Enter' && chatInput.value.trim() !== '') {
            const userMsg = document.createElement("div");
            userMsg.style = "text-align:right; margin-bottom:10px;";
            userMsg.innerText = chatInput.value;
            chatContent.appendChild(userMsg);

            // Simple bot reply logic
            const botReply = document.createElement("div");
            botReply.style = "text-align:left; margin-bottom:10px; color:#007bff;";
            const text = chatInput.value.toLowerCase();
            if(text.includes("services")) botReply.innerText = "We offer Talent Management, HR Operations, Compliance services. Would you like a free consultation?";
            else if(text.includes("consultation")) botReply.innerText = "Great! Please share your email or WhatsApp number, and we will contact you.";
            else botReply.innerText = "Thank you for reaching out! How can I help you today?";
            chatContent.appendChild(botReply);

            chatInput.value = '';
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    });
});
