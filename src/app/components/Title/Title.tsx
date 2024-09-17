import React from 'react'
import classNames from 'classnames'
import styles from './Title.module.css'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	size?: 'small' | 'medium' | 'large'
	align?: 'left' | 'center' | 'right'
	children: React.ReactNode
	className?: string // Принимаем className через пропсы
}

const Title: React.FC<TitleProps> = ({
	children,
	size = 'medium',
	align = 'left',
	className,
	...props
}) => {
	const titleClass = classNames(
		styles.title,
		{
			[styles.large]: size === 'large',
			[styles.small]: size === 'small',
			[styles.medium]: size === 'medium',
			[styles.center]: align === 'center',
			[styles.right]: align === 'right',
			[styles.left]: align === 'left',
		},
		className
	)

	return (
		<h1 className={titleClass} {...props}>
			{children}
		</h1>
	)
}

export default Title
