function chatApp() {
  return {
    input: "",
    messages: [
      {
<<<<<<< HEAD
        id: 1,
=======
>>>>>>> 4663ca1e1e955b802a1b61d88b769a47ede66c1f
        from: "ai",
        text: "Hey there! I’m Flolytics — your AI financial sidekick. I help you handle money smartly and fly with your goals. What’s on your mind today?",
      },
    ],

    async sendMessage() {
      const userText = this.input.trim();
      if (!userText) return;

<<<<<<< HEAD
      this.messages.push({ id: Date.now(), from: "user", text: userText });
      this.input = "";

      this.messages.push({ id: Date.now(), from: "ai", text: "..." });
=======
      this.messages.push({ from: "user", text: userText });
      this.input = "";

      this.messages.push({ from: "ai", text: "..." });
>>>>>>> 4663ca1e1e955b802a1b61d88b769a47ede66c1f
      const loadingIndex = this.messages.length - 1;

      this.scrollToBottom();

      try {
<<<<<<< HEAD
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_input: userText }),
        });

        if (!res.ok) throw new Error("Backend error: " + res.status);
        const data = await res.json();
        this.messages[loadingIndex].text = data.reply || "No reply from AI.";
      } catch (err) {
=======
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
>>>>>>> 4663ca1e1e955b802a1b61d88b769a47ede66c1f
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
