"use client";

import { useState } from "react";
import {useMutation} from "@tanstack/react-query";
import {generateChatResponse} from "../../utils/actions"

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const {mutate: createMutate} = useMutation({
    mutationFn: (chatMsg) => generateChatResponse(chatMsg)
  })

  function handleSubmit(e) {
    e.preventDefault();
    createMutate(text);
  }
  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>Message</div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full rounded-xl">
          <input
            type="text"
            className="join-item w-full input input-bordered"
            placeholder="Message GPTGenius..."
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="join-item btn btn-primary">
            Ask Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
