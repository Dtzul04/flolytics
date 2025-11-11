function chatApp() {
  return {
    input: "",
    messages: [
      {
        from: "ai",
        text: "Hey there! I’m Flolytics — your AI financial sidekick. I help you handle money smartly and fly with your goals. What’s on your mind today?",
      },
    ],

    async sendMessage() {
      const userText = this.input.trim();
      if (!userText) return;

      this.messages.push({ from: "user", text: userText });
      this.input = "";

      this.messages.push({ from: "ai", text: "..." });
      const loadingIndex = this.messages.length - 1;

      this.scrollToBottom();

      try {
        const res = await fetch("https://flolytics-2025.onrender.com/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_input: `You are Flolytics, an AI Financial Tool that helps users handle finances smartly. Respond concisely. User said: ${userText}`,
          }),
        });

        if (!res.ok) throw new Error("Backend error: " + res.status);

        const data = await res.json();

        this.messages[loadingIndex].text = data.reply || "No reply from AI.";

      } catch (err) {
        console.error("Error:", err);
        this.messages[loadingIndex].text = "Error connecting to the server.";
      }

      this.scrollToBottom();
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const chatBox = document.querySelector("#chat-box");
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
      });
    },
  };
}
