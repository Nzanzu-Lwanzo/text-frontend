import type { AvatarTone } from "../lib/connected-user";

const toneClasses: Record<AvatarTone, string> = {
	sage: "bg-[#e1eee5] text-[#314238]",
	blue: "bg-[#e1ebf3] text-[#36546d]",
	rose: "bg-[#f3e5e3] text-[#76504a]",
	gold: "bg-[#f2ecd9] text-[#6b5b32]",
	lavender: "bg-[#ece7f1] text-[#5b506c]",
	mint: "bg-[#dfeeea] text-[#315d50]",
};

type UserAvatarProps = {
	initials: string;
	tone: AvatarTone;
	className?: string;
};

export function UserAvatar({
	initials,
	tone,
	className = "",
}: UserAvatarProps) {
	return (
		<div
			className={`relative grid size-[43px] shrink-0 place-items-center rounded-[13px] text-xs font-semibold after:absolute after:-right-0.5 after:-bottom-px after:size-[9px] after:rounded-full after:border-2 after:border-[#f7f8f6] after:bg-[#39805c] after:content-[''] ${toneClasses[tone]} ${className}`}
			aria-hidden="true"
		>
			{initials}
		</div>
	);
}
