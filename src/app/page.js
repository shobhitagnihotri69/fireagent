"use client";  // ✅ Add this at the top

import { useState } from "react";

export default function Home() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput("");

        // Fake AI Response (for now)
        setTimeout(() => {
            setMessages([...newMessages, { role: "bot", content: "Hello! I'm FireAgent." }]);
        }, 1000);
    };

    return (
        <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
            <h1>FireAgent Chat</h1>
            <div style={{ height: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                {messages.map((msg, i) => (
                    <p key={i} style={{ textAlign: msg.role === "user" ? "right" : "left" }}>
                        <b>{msg.role === "user" ? "You" : "FireAgent"}:</b> {msg.content}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                style={{ width: "80%", padding: "10px", marginTop: "10px" }}
            />
            <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "10px" }}>Send</button>
        </div>
    );
}
