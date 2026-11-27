export type ChatMessage = {
	id: string;
	text: string;
	sender: "me" | "them";
	time: string;
};
