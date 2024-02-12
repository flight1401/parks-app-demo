"use client"

import "@aaronellington/reset-css"
import { useState } from "react"
import styles from "./layout.module.scss"

const title = "Parks App Demo"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [user, setUser] = useState<User | undefined>(undefined)

	return (
		<html lang="en">
			<head>
				<title>{title}</title>
				<meta name="description" content="This is my site." />
			</head>
			<body>
				<div className={styles.main}>
					<Header
						title={title}
						user={user}
						onCreateAccount={() => {
							setUser({
								name: "New User",
							})
						}}
						onLogin={() => {
							setUser({
								name: "Existing User",
							})
						}}
						onLogout={() => {
							setUser(undefined)
						}}
					/>
					<div className={styles.page}>{children}</div>
				</div>
			</body>
		</html>
	)
}
