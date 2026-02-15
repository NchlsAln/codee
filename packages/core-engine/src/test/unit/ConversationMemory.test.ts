import { ConversationMemory } from "../../memory/ConversationMemory";

const DAY = 1000 * 60 * 60 * 24;

describe("ConversationMemory", () => {
  it("creates conversations and tracks messages", async () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-01-01T00:00:00Z"));
    const memory = new ConversationMemory();

    const conversation = await memory.createConversation("project-1", "Session 1");
    await memory.addMessage({
      id: "msg-1",
      conversationId: conversation.id,
      role: "user",
      content: "Hello",
      tokens: 1,
      timestamp: Date.now()
    });

    const conversations = await memory.listConversations("project-1");
    const messages = await memory.getMessages(conversation.id);

    expect(conversations).toHaveLength(1);
    expect(messages).toHaveLength(1);

    jest.useRealTimers();
  });

  it("exports, imports, and vacuums stale data", async () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-01-01T00:00:00Z"));
    const memory = new ConversationMemory();

    const snapshotPayload = {
      conversations: [
        {
          id: "old",
          projectId: "project-1",
          title: "Old",
          createdAt: Date.now() - DAY * 100,
          updatedAt: Date.now() - DAY * 100
        },
        {
          id: "current",
          projectId: "project-1",
          title: "Current",
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
      ],
      messages: [
        {
          id: "msg-old",
          conversationId: "old",
          role: "user",
          content: "Old message",
          tokens: 2,
          timestamp: Date.now() - DAY * 100
        },
        {
          id: "msg-new",
          conversationId: "current",
          role: "assistant",
          content: "New message",
          tokens: 2,
          timestamp: Date.now()
        }
      ]
    };

    memory.loadSnapshot(snapshotPayload);
    await memory.vacuum();

    const remaining = await memory.listConversations("project-1");
    expect(remaining).toHaveLength(1);
    expect(remaining[0].id).toBe("current");

    const exported = await memory.exportConversation("current");
    await memory.importConversation(exported);

    const messages = await memory.getMessages("current");
    expect(messages.length).toBeGreaterThanOrEqual(1);

    await memory.deleteProjectData("project-1");
    const afterDelete = await memory.listConversations("project-1");
    expect(afterDelete).toHaveLength(0);

    jest.useRealTimers();
  });
});
