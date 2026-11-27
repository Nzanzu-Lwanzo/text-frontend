import { SendDiagonal } from "iconoir-react";
import type { FormEvent } from "react";
import type { ConnectedUser } from "../connected-user-list";

type MessageComposerProps = {
	user: ConnectedUser;
	draft: string;
	onDraftChange: (draft: string) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};
export function MessageComposer({
	user,
	draft,
	onDraftChange,
	onSubmit,
}: MessageComposerProps) {
	return (
		<form
			className="flex shrink-0 items-center gap-2 border-t border-[#e2e7e2] bg-white px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:gap-3 sm:px-5 sm:py-4"
			onSubmit={onSubmit}
		>
			<input
				className="h-11 min-w-0 flex-1 rounded-full border border-[#e1e6e1] bg-[#f7f8f6] px-4 text-[15px] text-[#27332b] outline-none placeholder:text-[#9aa39d] focus:border-[#6a9278] focus:ring-2 focus:ring-[#437756]/10 sm:h-12 sm:rounded-lg sm:bg-white sm:text-sm"
				value={draft}
				onChange={(event) => onDraftChange(event.target.value)}
				placeholder={`Message ${user.name}`}
				aria-label={`Message ${user.name}`}
			/>
			<button
				className="grid size-11 shrink-0 place-items-center rounded-full bg-[#28583e] text-white transition hover:bg-[#214b39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28583e] disabled:cursor-default disabled:bg-[#c6d1c9] sm:size-12 sm:rounded-lg"
				type="submit"
				disabled={!draft.trim()}
				aria-label="Send message"
			>
				<SendDiagonal className="size-[18px]" aria-hidden="true" />
			</button>
		</form>
	);
}
