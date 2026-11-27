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
			className="flex shrink-0 items-center gap-3 border-t border-[#e2e7e2] py-4"
			onSubmit={onSubmit}
		>
			<input
				className="h-12 min-w-0 flex-1 rounded-lg border border-[#e1e6e1] bg-white px-4 text-sm text-[#27332b] outline-none placeholder:text-[#9aa39d] focus:border-[#6a9278] focus:ring-2 focus:ring-[#437756]/10"
				value={draft}
				onChange={(event) => onDraftChange(event.target.value)}
				placeholder={`Message ${user.name}`}
				aria-label={`Message ${user.name}`}
			/>
			<button
				className="grid size-12 shrink-0 place-items-center rounded-lg bg-[#28583e] text-white transition hover:bg-[#214b39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28583e] disabled:cursor-default disabled:bg-[#c6d1c9]"
				type="submit"
				disabled={!draft.trim()}
				aria-label="Send message"
			>
				<SendDiagonal className="size-[18px]" aria-hidden="true" />
			</button>
		</form>
	);
}
