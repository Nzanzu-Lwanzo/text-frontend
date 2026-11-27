import { useState, type FormEvent } from "react";
import { ChatBubbleEmpty, SendDiagonal, Xmark } from "iconoir-react";
import type { ConnectedUser } from "../lib/connected-user";
import { UserAvatar } from "./user-avatar";

type ChatDialogProps = {
	user: ConnectedUser;
	onClose: () => void;
};

export function ChatDialog({ user, onClose }: ChatDialogProps) {
	const [draft, setDraft] = useState("");
	const [messages, setMessages] = useState<Array<{ id: string; text: string }>>(
		[],
	);

	function sendMessage(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const message = draft.trim();
		if (!message) return;
		setMessages((currentMessages) => [
			...currentMessages,
			{ id: crypto.randomUUID(), text: message },
		]);
		setDraft("");
	}

	return (
		<div className="fixed inset-0 z-20 grid place-items-center bg-[#142019]/35 p-5 backdrop-blur-[3px]">
			<section
				className="w-full max-w-[430px] overflow-hidden rounded-[10px] border border-[#e4e9e4] bg-white shadow-[0_24px_70px_rgba(24,42,30,0.2)]"
				role="dialog"
				aria-modal="true"
				aria-labelledby="chat-title"
			>
				<ConversationHeader user={user} onClose={onClose} />
				<ConversationMessages user={user} messages={messages} />
				<MessageComposer
					user={user}
					draft={draft}
					setDraft={setDraft}
					onSubmit={sendMessage}
					hasMessages={messages.length > 0}
				/>
			</section>
		</div>
	);
}

type ConversationHeaderProps = {
	user: ConnectedUser;
	onClose: () => void;
};

export function ConversationHeader({ user, onClose }: ConversationHeaderProps) {
	return (
		<header className="flex items-center gap-3 border-b border-[#edf0ed] px-[18px] py-[17px]">
			<UserAvatar
				initials={user.initials}
				tone={user.tone}
				className="size-[39px] rounded-[11px]"
			/>
			<div className="min-w-0 flex-1">
				<strong
					id="chat-title"
					className="block text-[13px] font-semibold text-[#26342a]"
				>
					{user.name}
				</strong>
				<span className="mt-[5px] flex items-center gap-[7px] text-[11px] text-[#87918a]">
					<i className="size-1.5 rounded-full bg-[#39805c] shadow-[0_0_0_3px_#e6f1e9]" />
					Online now
				</span>
			</div>
			<button
				className="rounded p-2 text-[#77827a] hover:bg-[#f1f4f1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28583e]"
				type="button"
				onClick={onClose}
				aria-label="Close chat"
			>
				<Xmark className="size-[17px]" aria-hidden="true" />
			</button>
		</header>
	);
}

type ChatMessage = { id: string; text: string };

type ConversationMessagesProps = {
	user: ConnectedUser;
	messages: ChatMessage[];
};

export function ConversationMessages({
	user,
	messages,
}: ConversationMessagesProps) {
	return (
		<div
			className="max-h-[42vh] min-h-[190px] overflow-y-auto bg-[#fbfcfb] px-[18px] py-5"
			aria-live="polite"
		>
			{messages.length === 0 ? (
				<div className="pt-9 text-center text-xs leading-relaxed text-[#919a94]">
					<strong className="mb-[5px] block text-[13px] font-semibold text-[#4a594f]">
						Start a conversation
					</strong>
					Send {user.name.split(" ")[0]} a message to get things going.
				</div>
			) : (
				messages.map((message) => (
					<div
						className="mb-2.5 ml-auto w-fit max-w-[85%] rounded-[10px_10px_3px_10px] bg-[#e8f0e9] px-3 py-2.5 text-xs leading-relaxed text-[#34483a] [overflow-wrap:anywhere]"
						key={message.id}
					>
						{message.text}
					</div>
				))
			)}
		</div>
	);
}

type MessageComposerProps = {
	user: ConnectedUser;
	draft: string;
	setDraft: (draft: string) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
	hasMessages: boolean;
};

export function MessageComposer({
	user,
	draft,
	setDraft,
	onSubmit,
	hasMessages,
}: MessageComposerProps) {
	return (
		<form
			className="flex items-center gap-[9px] border-t border-[#edf0ed] px-[15px] py-[13px]"
			onSubmit={onSubmit}
		>
			<input
				className="h-[38px] min-w-0 flex-1 rounded-md border border-[#e1e7e1] px-[11px] text-xs text-[#2b382f] outline-none placeholder:text-[#9aa39d] focus:border-[#6a9278]"
				value={draft}
				onChange={(event) => setDraft(event.target.value)}
				placeholder={`Message ${user.name.split(" ")[0]}`}
				aria-label={`Message ${user.name}`}
			/>
			<button
				className="grid size-[38px] shrink-0 place-items-center rounded-md bg-[#28583e] text-white enabled:hover:bg-[#214b39] disabled:cursor-default disabled:bg-[#c6d1c9]"
				type="submit"
				disabled={!draft.trim()}
				aria-label="Send message"
			>
				{hasMessages ? (
					<SendDiagonal className="size-[17px]" aria-hidden="true" />
				) : (
					<ChatBubbleEmpty className="size-[17px]" aria-hidden="true" />
				)}
			</button>
		</form>
	);
}
