type PeoplePageHeadingProps = {
	connectedCount: number;
};

export function PeoplePageHeading({ connectedCount }: PeoplePageHeadingProps) {
	return (
		<div className="mb-7 mt-[17px] flex items-end justify-between gap-5">
			<div>
				<h1 className="m-0 text-[31px] font-semibold leading-tight text-[#1e2c24] sm:text-4xl">
					People
				</h1>
				<p className="mt-2 mb-0 text-sm text-[#78817b]">
					Find someone and start a conversation.
				</p>
			</div>
			<div className="flex items-baseline gap-1.5 pb-1 text-xs text-[#7a847e]">
				<strong className="text-lg font-semibold text-[#2e674a]">
					{connectedCount}
				</strong>
				<span>online</span>
			</div>
		</div>
	);
}
