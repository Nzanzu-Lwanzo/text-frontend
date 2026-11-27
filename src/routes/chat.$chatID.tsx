import { createFileRoute, Link } from "@tanstack/react-router";
import { AppHeader } from "../components/app-header";
import { Conversation } from "../components/conversation/conversation";
import { connectedUsers } from "../lib/connected-users";

export const Route = createFileRoute("/chat/$chatID")({ component: ChatPage });

function ChatPage() {
	const { chatID } = Route.useParams();
	const user = connectedUsers.find(
		(connectedUser) => connectedUser.id === chatID,
	);

	return (
		<div className="min-h-screen bg-[#f7f8f6] [background-image:linear-gradient(90deg,rgba(28,67,52,0.025)_1px,transparent_1px)] [background-size:80px_100%]">
			<AppHeader />
			<main className="mx-auto flex h-[calc(100dvh-4rem)] w-full max-w-4xl flex-col px-4 sm:h-[calc(100dvh-4.75rem)] sm:px-6">
				{user ? (
					<Conversation key={user.id} user={user} />
				) : (
					<div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
						<h1 className="m-0 text-xl font-semibold text-[#26342a]">
							Conversation not found
						</h1>
						<Link
							className="text-sm font-medium text-[#365c45] underline-offset-4 hover:underline"
							to="/"
						>
							Back to people
						</Link>
					</div>
				)}
			</main>
		</div>
	);
}
