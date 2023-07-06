"use client";

import { useSession } from "next-auth/react";

const User = () => {
	const { data: session } = useSession();

	return (
		<section>
			<h1>User Page</h1>
			<pre>{JSON.stringify(session)}</pre>
		</section>
	);
};

export default User;
