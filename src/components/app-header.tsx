import { ChatBubbleEmpty } from "iconoir-react";

export function AppHeader() {
	return (
		<header className="flex h-16 items-center border-b border-[#e6e9e5] bg-white/85 px-6 sm:h-[4.75rem] lg:px-[max(1.75rem,calc((100vw-70rem)/2))]">
			<a
				className="inline-flex items-center gap-2.5 text-[21px] font-bold text-[#1d392d] no-underline"
				href="/"
				aria-label="Tex home"
			>
				<span className="grid size-[31px] place-items-center rounded-[9px] bg-[#214b39] text-white">
					<ChatBubbleEmpty className="size-[18px]" aria-hidden="true" />
				</span>
				<span>tex</span>
			</a>
		</header>
	);
}
