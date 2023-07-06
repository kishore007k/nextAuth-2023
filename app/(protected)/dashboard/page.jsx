"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
	const { data: session } = useSession();
	const router = useRouter();

	// useEffect(() => {
	// if (session?.status !== "authenticated") {
	// 	router.push("/login");
	// }
	// });

	return (
		<section className="mt-20">
			<h1>Dashboard</h1>
			<p>Hi {session?.user?.email}</p>
			<button
				onClick={() => {
					signOut();
					router.replace("/login");
				}}
			>
				Sign Out
			</button>
		</section>
	);
};

export default Dashboard;
