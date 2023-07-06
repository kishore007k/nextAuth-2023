"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
	const session = useSession();
	const router = useRouter();

	const [data, setData] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		if (session?.status === "authenticated") {
			router.push("/dashboard");
		}
	});

	const loginUser = async (e) => {
		e.preventDefault();
		console.log(data);

		signIn("credentials", { ...data, redirect: false }).then((callback) => {
			if (callback?.error) {
				toast.error(callback.error);
			}

			if (callback?.ok && !callback?.error) {
				toast.success("Logged in successfully!");
			}
		});
	};

	return (
		<section className="my-20">
			<div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-center text-3xl font-extrabold text-white">
						Welcome back to Awesome App!
					</h2>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form className="space-y-6" onSubmit={loginUser}>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email Address
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-gray-900"
										onChange={(e) => setData({ ...data, email: e.target.value })}
										value={data.email}
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Password
								</label>
								<div className="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm text-gray-900"
										onChange={(e) => setData({ ...data, password: e.target.value })}
										value={data.password}
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
								>
									Sign in
								</button>
							</div>

							<div className="flex justify-center align-middle w-full space-x-2">
								<button
									className="bg-slate-100 w-full border border-transparent rounded-md p-2 text-orange-600 font-medium hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm hover:shadow-md focus:ring-orange-400"
									onClick={() => signIn("github")}
								>
									Sign In with GitHub
								</button>
								<button
									className="bg-slate-100 w-full border border-transparent rounded-md p-2 text-orange-600 font-medium hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm hover:shadow-md focus:ring-orange-400"
									onClick={() => signIn("google")}
								>
									Sign In with Gmail
								</button>
							</div>
						</form>

						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300"></div>
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">
										Don't have an account?
									</span>
								</div>
							</div>
							<div className="mt-6">
								<Link
									href="/register"
									className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
								>
									Sign up
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
