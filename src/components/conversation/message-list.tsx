import { useRef, useLayoutEffect } from "react";
import type { ChatMessage } from "./@type";

export type MessageListProps = {
	messages: ChatMessage[];
};

export function MessageList({ messages }: MessageListProps) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const isFirstRender = useRef(true);
	const latestMessageId = messages.at(-1)?.id;

	useLayoutEffect(() => {
		const container = scrollContainerRef.current;
		if (!container || !latestMessageId) return;

		if (isFirstRender.current) {
			container.scrollTop = container.scrollHeight;
			isFirstRender.current = false;
		} else {
			container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
		}
	}, [latestMessageId]);

	return (
		<div
			ref={scrollContainerRef}
			className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto py-6"
			aria-live="polite"
		>
			{messages.map((message) => {
				const isSent = message.sender === "me";

				return (
					<div
						className={`flex w-full ${isSent ? "justify-end" : "justify-start"}`}
						key={message.id}
					>
						<div
							className={`flex max-w-[85%] flex-col gap-1.5 sm:max-w-[70%] ${isSent ? "items-end" : "items-start"}`}
						>
							<div
								className={`whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-relaxed ${isSent ? "rounded-br-sm bg-[#28583e] text-white" : "rounded-bl-sm border border-[#e5e9e5] bg-white text-[#2b352e]"}`}
							>
								{message.text}
							</div>
							<time className="px-1 text-[11px] text-[#929b95]">
								{message.time}
							</time>
						</div>
					</div>
				);
			})}
		</div>
	);
}
