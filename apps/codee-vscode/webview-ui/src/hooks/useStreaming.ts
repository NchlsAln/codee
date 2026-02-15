import { useCallback, useRef, useState } from "react";
import { ChatMessage } from "../types";
import { ExtensionMessage } from "../protocol";

export const useStreaming = (setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>) => {
  const [active, setActive] = useState(false);
  const bufferRef = useRef<Record<string, string>>({});
  const frameRef = useRef<number | null>(null);

  const handleStream = useCallback(
    (payload: ExtensionMessage) => {
      if (payload.type === "streamStart") {
        setActive(true);
        bufferRef.current[payload.messageId] = "";
        if (!frameRef.current) {
          frameRef.current = requestAnimationFrame(() => flush());
        }
      }

      if (payload.type === "streamChunk") {
        setActive(true);
        bufferRef.current[payload.messageId] = (bufferRef.current[payload.messageId] || "") + payload.chunk;
        if (!frameRef.current) {
          frameRef.current = requestAnimationFrame(() => flush());
        }
      }

      if (payload.type === "streamEnd") {
        setActive(false);
        finalizeMessage(payload.messageId);
      }

      if (payload.type === "streamError") {
        setActive(false);
        setMessages((current) => [
          ...current,
          {
            id: `${Date.now()}`,
            role: "system",
            content: payload.error || "An error occurred.",
            createdAt: Date.now(),
            status: "error"
          }
        ]);
      }
    },
    [setMessages]
  );

  const flush = useCallback(() => {
    const buffers = { ...bufferRef.current };
    setMessages((current) => {
      let updated = [...current];
      Object.entries(buffers).forEach(([messageId, content]) => {
        const existing = updated.find((message) => message.id === messageId);
        if (existing) {
          updated = updated.map((message) =>
            message.id === messageId ? { ...message, content, status: "thinking" } : message
          );
        } else {
          updated = [
            ...updated,
            { id: messageId, role: "assistant", content, createdAt: Date.now(), status: "thinking" }
          ];
        }
      });
      return updated;
    });
    frameRef.current = null;
  }, [setMessages]);

  const finalizeMessage = useCallback(
    (messageId: string) => {
      setMessages((current) =>
        current.map((message) =>
          message.id === messageId ? { ...message, status: "complete" } : message
        )
      );
      delete bufferRef.current[messageId];
    },
    [setMessages]
  );

  const stop = useCallback(() => {
    setActive(false);
    bufferRef.current = {};
  }, []);

  return { active, stop, handleStream };
};
