import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "iconoir-react";
import { UserAvatar } from "../user-avatar";
import type { ConversationProps } from "./conversation";

export function ConversationHeader({ user }: ConversationProps) {
	return (
		<header className="flex shrink-0 items-center gap-3 border-b border-[#e2e7e2] py-4">
			<Link
				className="grid size-9 place-items-center rounded-md text-[#68746d] transition hover:bg-white hover:text-[#28583e]"
				to="/"
				aria-label="Back to people"
			>
				<ArrowLeft className="size-[18px]" aria-hidden="true" />
			</Link>
			<UserAvatar
				initials={user.initials}
				tone={user.tone}
				className="size-10 rounded-xl"
			/>
			<div className="min-w-0 flex-1">
				<h1 className="m-0 truncate text-sm font-semibold text-[#26342a]">
					{user.name}
				</h1>
			</div>
		</header>
	);
}
