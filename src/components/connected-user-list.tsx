import { ChatBubbleEmpty } from "iconoir-react";
import type { ConnectedUser } from "../lib/connected-user";
import { UserAvatar } from "./user-avatar";

export type { ConnectedUser } from "../lib/connected-user";

type ConnectedUserRowProps = {
	user: ConnectedUser;
	onStartChat: (user: ConnectedUser) => void;
};

export function ConnectedUserRow({ user, onStartChat }: ConnectedUserRowProps) {
	return (
		<li className="flex min-h-[74px] items-center gap-3 border-b border-[#e8ebe8] sm:min-h-[82px] sm:gap-[14px]">
			<UserAvatar
				initials={user.initials}
				tone={user.tone}
				className="size-11 rounded-full sm:size-[43px] sm:rounded-[13px]"
			/>
			<div className="min-w-0 flex-1">
				<div className="overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-semibold text-[#2b352e]">
					{user.name}
				</div>
				<div className="mt-[5px] text-[11px] text-[#89928c]">{user.detail}</div>
			</div>
			<button
				className="inline-flex h-[34px] min-w-[76px] items-center justify-center gap-[7px] rounded-md border border-[#dce4dd] bg-white px-[9px] text-[11px] font-semibold text-[#365c45] transition hover:border-[#28583e] hover:bg-[#28583e] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28583e] sm:min-w-[88px] sm:px-[11px]"
				type="button"
				onClick={() => onStartChat(user)}
			>
				<ChatBubbleEmpty className="size-[15px]" aria-hidden="true" />
				Chat
			</button>
		</li>
	);
}
