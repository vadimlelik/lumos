import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './Button.module.css'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	color: 'blue' | 'orange'
	children: React.ReactNode
	className?: string
}

const Button: React.FC<ButtonProps> = ({
	color,
	children,
	className,
	...props
}) => {
	const buttonClass = classNames(
		styles.button,
		{
			[styles.blue]: color === 'blue',
			[styles.orange]: color === 'orange',
		},
		[[className]]
	)

	return (
		<button className={buttonClass} {...props}>
			{children}
		</button>
	)
}

export default Button
