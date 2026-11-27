import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AppHeader } from "../components/app-header";
import { ConnectedUserSearch } from "../components/connected-user-search";
import { ConnectedUserList } from "#/components/connected-users-list";
import { PeoplePageHeading } from "../components/people-page-heading";
import { connectedUsers } from "../lib/connected-users";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();
	const filteredUsers = connectedUsers.filter((user) =>
		`${user.name} ${user.detail}`.toLowerCase().includes(query.toLowerCase()),
	);

	return (
		<div className="min-h-screen bg-[#f7f8f6] [background-image:linear-gradient(90deg,rgba(28,67,52,0.025)_1px,transparent_1px)] [background-size:80px_100%]">
			<AppHeader />

			<main className="mx-auto w-full max-w-[45rem] px-5 py-12 sm:px-0 sm:py-[4.3rem]">
				<PeoplePageHeading connectedCount={connectedUsers.length} />
				<ConnectedUserSearch query={query} onQueryChange={setQuery} />

				<section className="mt-[37px]" aria-labelledby="connected-heading">
					<div className="flex items-center justify-between border-b border-[#e2e7e2] pb-3">
						<h2
							id="connected-heading"
							className="m-0 text-xs font-semibold text-[#46534b]"
						>
							Connected now
						</h2>
						<span className="text-[11px] text-[#939c96]">
							{filteredUsers.length} people
						</span>
					</div>
					<ConnectedUserList
						users={filteredUsers}
						onStartChat={(user) =>
							navigate({
								to: "/chat/$chatID",
								params: { chatID: user.id },
							})
						}
					/>
				</section>
			</main>
		</div>
	);
}
