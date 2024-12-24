'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CreatePage() {
    const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);
    const [input, setInput] = useState('');

    const addMessage = () => {
        if (!input.trim()) return;
        setMessages([...messages, { id: uuidv4(), text: input }]);
        setInput('');
    };

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Create a Rolling Paper</h1>
            <textarea
                className="w-full p-2 border rounded mb-2"
                rows={3}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a message..."
            />
            <button onClick={addMessage} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Add Message
            </button>
            <div>
                {messages.map((msg) => (
                    <div key={msg.id} className="p-2 bg-white border rounded mb-2">
                        {msg.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
