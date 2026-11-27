export type AvatarTone =
	| "sage"
	| "blue"
	| "rose"
	| "gold"
	| "lavender"
	| "mint";

export type ConnectedUser = {
	id: string;
	name: string;
	initials: string;
	detail: string;
	tone: AvatarTone;
};
