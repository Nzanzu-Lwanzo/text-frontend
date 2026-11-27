import { type ConnectedUser, ConnectedUserRow } from "./connected-user-list";

type ConnectedUserListProps = {
	users: ConnectedUser[];
	onStartChat: (user: ConnectedUser) => void;
};

export function ConnectedUserList({
	users,
	onStartChat,
}: ConnectedUserListProps) {
	if (users.length === 0) {
		return (
			<p className="py-8 text-center text-[13px] text-[#828b85]">
				No people match your search.
			</p>
		);
	}

	return (
		<ul className="m-0 list-none p-0">
			{users.map((user) => (
				<ConnectedUserRow key={user.id} user={user} onStartChat={onStartChat} />
			))}
		</ul>
	);
}
