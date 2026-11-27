import { useState, type FormEvent } from "react";
import type { ConnectedUser } from "../../lib/connected-user";
import { ConversationHeader } from "./conversation-header";
import { MessageList } from "./message-list";
import { MessageComposer } from "./message-composer";
import type { ChatMessage } from "./@type";

export type ConversationProps = {
	user: ConnectedUser;
};

const startingMessages: ChatMessage[] = [
	{
		id: "message-1",
		text: "Hey! Do you have a few minutes to catch up today?",
		sender: "them",
		time: "10:42 AM",
	},
	{
		id: "message-2",
		text: "Absolutely, I'm free now. What did you have in mind?",
		sender: "me",
		time: "10:44 AM",
	},
	{
		id: "message-3",
		text: "Great, let's talk through the latest updates.",
		sender: "them",
		time: "10:45 AM",
	},
];

export function Conversation({ user }: ConversationProps) {
	const [draft, setDraft] = useState("");
	const [messages, setMessages] = useState(startingMessages);

	function sendMessage(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const text = draft.trim();
		if (!text) return;

		setMessages((currentMessages) => [
			...currentMessages,
			{
				id: crypto.randomUUID(),
				text,
				sender: "me",
				time: new Intl.DateTimeFormat(undefined, {
					hour: "numeric",
					minute: "2-digit",
				}).format(new Date()),
			},
		]);
		setDraft("");
	}

	return (
		<section
			className="flex min-h-0 flex-1 flex-col bg-[#f4f6f2] sm:overflow-hidden sm:rounded-2xl sm:border sm:border-[#e2e7e2] sm:bg-white sm:shadow-[0_12px_40px_rgba(34,55,42,0.06)]"
			aria-label={`Chat with ${user.name}`}
		>
			<ConversationHeader user={user} />
			<MessageList messages={messages} />
			<MessageComposer
				user={user}
				draft={draft}
				onDraftChange={setDraft}
				onSubmit={sendMessage}
			/>
		</section>
	);
}
