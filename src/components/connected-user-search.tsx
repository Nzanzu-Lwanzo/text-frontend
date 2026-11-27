import { Search } from "iconoir-react";

type ConnectedUserSearchProps = {
	query: string;
	onQueryChange: (query: string) => void;
};

export function ConnectedUserSearch({
	query,
	onQueryChange,
}: ConnectedUserSearchProps) {
	return (
		<label className="flex h-[46px] items-center gap-[11px] rounded-[7px] border border-[#e1e6e1] bg-white px-3 text-[#8a948d] transition focus-within:border-[#6a9278] focus-within:ring-[3px] focus-within:ring-[#437756]/10">
			<Search className="size-[17px] shrink-0" aria-hidden="true" />
			<input
				className="w-full min-w-0 border-0 bg-transparent text-[13px] text-[#27332b] outline-none placeholder:text-[#9aa39d]"
				type="search"
				value={query}
				onChange={(event) => onQueryChange(event.target.value)}
				placeholder="Search people"
				aria-label="Search connected people"
			/>
			<kbd className="grid size-[21px] shrink-0 place-items-center rounded border border-[#e7eae7] text-xs text-[#929b95]">
				/
			</kbd>
		</label>
	);
}
