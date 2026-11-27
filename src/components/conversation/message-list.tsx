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
			className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-5 [background-image:radial-gradient(rgba(42,82,58,0.055)_0.7px,transparent_0.7px)] [background-size:18px_18px] sm:gap-5 sm:px-6 sm:py-6"
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
							className={`flex max-w-[88%] flex-col gap-1 sm:max-w-[70%] ${isSent ? "items-end" : "items-start"}`}
						>
							<div
								className={`whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-[14px] leading-[1.45] shadow-[0_1px_1px_rgba(0,0,0,0.04)] sm:px-4 sm:py-3 sm:text-sm ${isSent ? "rounded-br-sm bg-[#d9f5c8] text-[#24372a]" : "rounded-bl-sm border border-[#e5e9e5] bg-white text-[#2b352e]"}`}
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
