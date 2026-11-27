import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "iconoir-react";
import { UserAvatar } from "../user-avatar";
import type { ConversationProps } from "./conversation";

export function ConversationHeader({ user }: ConversationProps) {
	return (
		<header className="z-10 flex min-h-[66px] shrink-0 items-center gap-2 border-b border-[#e2e7e2] bg-white px-3 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:min-h-[72px] sm:gap-3 sm:px-5 sm:py-4 sm:shadow-none">
			<Link
				className="grid size-10 place-items-center rounded-full text-[#365c45] transition hover:bg-[#f1f5f1] hover:text-[#28583e] sm:size-9 sm:rounded-md"
				to="/"
				aria-label="Back to people"
			>
				<ArrowLeft className="size-[18px]" aria-hidden="true" />
			</Link>
			<UserAvatar
				initials={user.initials}
				tone={user.tone}
				className="size-11 rounded-full sm:size-10 sm:rounded-xl"
			/>
			<div className="min-w-0 flex-1">
				<h1 className="m-0 truncate text-[15px] font-semibold text-[#26342a] sm:text-sm">
					{user.name}
				</h1>
			</div>
		</header>
	);
}
