'use client'
import React from 'react'
import style from './Header.module.css'
import { IconGlobe } from '@/app/icons'
import Button from '../Button/Button'
import { useStore } from './../../store/useStore'

const Header = () => {
	const scrollToFirstScreen = useStore((state) => state.scrollToFirstScreen)
	return (
		<header className={style.header}>
			<span className={style.logo}>
				<IconGlobe />
				VPN
			</span>
			<Button color='blue' onClick={scrollToFirstScreen}>
				Get VPN
			</Button>
		</header>
	)
}

export default Header
