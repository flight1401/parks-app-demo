import React from "react"
import { Button } from "./Button"
import styles from "./Header.module.scss"

export type User = {
	name: string
}

interface HeaderProps {
	user?: User
	title: string
	onLogin: () => void
	onLogout: () => void
	onCreateAccount: () => void
}

export const Header = ({
	user,
	onLogin,
	onLogout,
	title,
	onCreateAccount,
}: HeaderProps) => (
	<header>
		<div className={styles.main}>
			<div>
				<h1>{title}</h1>
			</div>
			<div className={styles.right}>
				{user ? (
					<>
						<span className={styles.welcome}>
							Welcome, <b>{user.name}</b>!
						</span>
						<Button size="small" onClick={onLogout} label="Log out" />
					</>
				) : (
					<>
						<Button size="small" onClick={onLogin} label="Log in" />
						<Button
							primary
							size="small"
							onClick={onCreateAccount}
							label="Sign up"
						/>
					</>
				)}
			</div>
		</div>
	</header>
)
