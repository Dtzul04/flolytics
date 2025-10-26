function chatApp() {
  return {
    input: "",
    messages: [],

    async sendMessage() {
      const userText = this.input.trim();
      if (!userText) return;

      this.messages.push({ from: "user", text: userText });
      this.input = "";

      this.messages.push({ from: "ai", text: "..." });
      const loadingIndex = this.messages.length - 1;

      this.$nextTick(() => {
        const chatBox = document.querySelector("#chat-box");
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
      });

      try {
        const res = await fetch("http://127.0.0.1:8000/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_input: userText }),
        });

        if (!res.ok) {
          throw new Error("Backend error: " + res.status);
        }

        const data = await res.json();

        this.messages[loadingIndex].text = data.reply || "No reply from AI.";

      } catch (err) {
        console.error("Error:", err);
        this.messages[loadingIndex].text = "⚠️ Error connecting to the server.";
      }

      this.$nextTick(() => {
        const chatBox = document.querySelector("#chat-box");
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
      });
    },
  };
}

function chatApp() {
  return {
    input: "",
    messages: [
      {
        from: "ai",
        text: "My name is Flolytics, an AI Financial Tool to help you handle finances smartly and fly with numbers. How can I help you today?",
      },
    ],

    async sendMessage() {
      const userText = this.input.trim();
      if (!userText) return;

      this.messages.push({ from: "user", text: userText });
      this.input = "";

      this.messages.push({ from: "ai", text: "..." });
      const loadingIndex = this.messages.length - 1;

      this.$nextTick(() => {
        const chatBox = document.querySelector("#chat-box");
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
      });

      try {
        const res = await fetch("http://127.0.0.1:8000/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_input: `You are Flolytics, an AI Financial Tool to help users handle finances smartly. Respond concisely. User said: ${userText}`
          }),
        });

        if (!res.ok) {
          throw new Error("Backend error: " + res.status);
        }

        const data = await res.json();

        this.messages[loadingIndex].text = data.reply || "No reply from AI.";
      } catch (err) {
        console.error("Error:", err);
        this.messages[loadingIndex].text = "⚠️ Error connecting to the server.";
      }

      this.$nextTick(() => {
        const chatBox = document.querySelector("#chat-box");
        if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
      });
    },
  };
}
