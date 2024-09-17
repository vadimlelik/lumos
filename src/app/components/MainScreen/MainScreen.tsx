'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Button from '../Button/Button'
import Title from '../Title/Title'
import styles from './MainScreen.module.css'
import { Location, Servers } from '@/app/icons'
import { Result } from '@/app/types/type'
import ChooseList from '../ChooseList/ChooseList'
import Modal from '../Modal/Modal'
import useStore from '@/app/store/useStore'

const MainScreen = () => {
	const [data, setData] = useState<Result[] | undefined>()
	const [isWideScreen, setIsWideScreen] = useState(true)
	const [isLoading, setIsLoading] = useState(false)
	const scrollToFirstScreen = useStore((state) => state.scrollToFirstScreen)
	const firstScreenRef = useRef<HTMLDivElement>(null)
	const setFirstScreenRef = useStore((state) => state.setFirstScreenRef)

	useEffect(() => {
		setIsLoading(true)
		fetch('https://randomuser.me/api/?results=3')
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setData(data.results as Result[])
				setIsLoading(false)
			})
	}, [])

	useEffect(() => {
		if (firstScreenRef.current) {
			setFirstScreenRef(firstScreenRef)
		}
	}, [setFirstScreenRef])

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth < 590)
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className={styles['main-screen']}>
			<Title size='large' align='center' className={styles.title}>
				Access <span className='blue'>everything securely</span> with VPN
			</Title>
			<Image
				src='/assets/main_bg.png'
				alt='logo'
				width={540}
				height={209}
				layout={isWideScreen ? 'responsive' : 'intrinsic'}
				className='image'
			/>
			<Button color='orange' onClick={scrollToFirstScreen}>
				Get VPN
			</Button>
			<div className='citation'>
				<p>Trusted by</p>
				<p className='bold'>50M+ Users</p>
			</div>
			<div className={styles.info}>
				<div className={styles['info-item']}>
					<Location />
					<div>
						<span className={styles.count}>50+</span>
						<span className={styles['info-item']}>Locations</span>
					</div>
				</div>
				<div className={styles['info-item']}>
					<Servers />
					<div>
						<span className={styles.count}>1000+</span>
						<span className={styles['info-item']}>Servers</span>
					</div>
				</div>
			</div>
			<Title align='center' size='small' className={styles.subtitle}>
				VPN-your <span className='blue'>ultimate</span> solution for a private
				and secure online experience!
			</Title>
			<div className={styles.benefits}>
				<div className={styles['benefits-item']}>
					<div className='icon'>
						<Image
							src='/assets/content.png'
							alt='logo'
							width={104}
							height={52}
						/>
					</div>
					<Title
						size='medium'
						align='center'
						className={styles['benefits__title']}
					>
						<span className='orange'> Unlimited</span>
						<br />
						<span className='blue'> access to content</span>
					</Title>
					<Title
						size='small'
						align='center'
						className={styles['benefits__text']}
					>
						Enjoy unlimited bandwidth to stay connected to the world s best
						shows, apps, and games!
					</Title>
				</div>
				<div className={styles['benefits-item']}>
					<div className='icon'>
						<Image src='/assets/speed.png' alt='logo' width={104} height={52} />
					</div>
					<Title
						size='medium'
						align='center'
						className={styles['benefits__title']}
					>
						<span className='orange'> Flashing</span>
						<br />
						<span className='blue'> connecting speed</span>
					</Title>
					<Title
						size='small'
						align='center'
						className={styles['benefits__text']}
					>
						VPN Lumos offers unlimited bandwidth for faster loading and no
						buffering!
					</Title>
				</div>
				<div className={styles['benefits-item']}>
					<div className='icon'>
						<Image
							src='/assets/location.png'
							alt='logo'
							width={104}
							height={52}
						/>
					</div>
					<Title
						size='medium'
						align='center'
						className={styles['benefits__title']}
					>
						<span className='orange'> Hide</span>
						<br />
						<span className='blue'>your location</span>
					</Title>
					<Title
						size='small'
						align='center'
						className={styles['benefits__text']}
					>
						Get your own unique IP for added security and access to restricted
						sites, apps, and services!
					</Title>
				</div>
				<div className={styles['benefits-item']}>
					<div className='icon'>
						<Image
							src='/assets/blocked_sites.png'
							alt='logo'
							width={104}
							height={52}
						/>
					</div>
					<Title
						size='medium'
						align='center'
						className={styles['benefits__title']}
					>
						<span className='orange'> Bypass</span>
						<br />
						<span className='blue'> blocked sites</span>
					</Title>
					<Title
						size='small'
						align='center'
						className={styles['benefits__text']}
					>
						Access any website safely and anonymously!
					</Title>
				</div>
			</div>

			<div className={styles.choose} ref={firstScreenRef}>
				<Title align='center'>
					<span className='blue'>Millions of people trust us!</span>
				</Title>
				<Title size='medium' className={styles['choose__title']}>
					Choose <span className='blue'>your Name</span>
				</Title>
				{isLoading ? <p>Loading...</p> : <ChooseList items={data} />}

				<Button color='orange' className={styles['choose__button']}>
					Get VPN
				</Button>
			</div>

			<Modal />
		</div>
	)
}

export default MainScreen
