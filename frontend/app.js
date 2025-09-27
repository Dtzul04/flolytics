function chatApp() {
  return {
    input: "",
    messages: [],

    async sendMessages() {
      const userText = this.input.trim();
      if (userText == "") return;

      this.messages.push({ from: "user", text: userText });
      this.input = "";

      try {
        const aiReply = await this.getAIResponse(userText);
        this.messages.push({ from: "ai", text: aiReply });
      } catch (err) {
        this.messages.push({ from: "ai", text: "Error talking to server" });
        console.error(err);
      }
    },

    async getAIResponse(userText) {
      const res = await fetch("http://localhost:8080/hello", {
        if (!res.ok) throw new Error("Backend error: " + res.status);
  const data = await res.text(); // because /hello returns plain text
  return data;
      });

      if (!res.ok) throw new Error("Backend error: " + res.status);

      const data = await res.json();
      return data.reply || "No reply from server.";
    }
  };
}