import React from "react"
import styles from "./Button.module.css"

interface ButtonProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean
	/**
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large"
	/**
	 * Button contents
	 */
	label: string
	/**
	 * Optional click handler
	 */
	onClick?: () => void
}

export const Button = ({
	primary = false,
	size = "medium",
	label,
	...props
}: ButtonProps) => {
	const mode = primary ? styles.primary : styles.secondary

	let sizeClass = styles.medium
	switch (size) {
		case "large":
			sizeClass = styles.large
			break
		case "medium":
			sizeClass = styles.medium
			break
		case "small":
			sizeClass = styles.small
			break
	}

	return (
		<button
			type="button"
			className={[styles.button, sizeClass, mode].join(" ")}
			{...props}
		>
			{label}
		</button>
	)
}
