import React from 'react'
import styles from './Modal.module.css'
import useStore from '@/app/store/useStore'
import Button from '../Button/Button'
import { Close } from '@/app/icons'
import { useForm } from 'react-hook-form'

const Modal: React.FC = () => {
	const { selectedName, isModalOpen, setIsModalOpen } = useStore()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})

	if (!isModalOpen) return null

	const handleClose = () => {
		setIsModalOpen(false)
	}

	return (
		<div className={styles.modalOverlay} onClick={handleClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<Close className={styles.close} onClick={handleClose} />
				<h2 className={styles.title}>Your name</h2>
				<p className={styles.name}>{selectedName}</p>
				<form className={styles.form} onSubmit={handleSubmit(console.log)}>
					<input
						type='email'
						className={styles.input}
						placeholder='Enter your email'
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Invalid email address',
							},
						})}
					/>
					<small className={styles.small}>
						Your information is 100% secure. We don’t share your personal
						information.
					</small>
					<span>{errors.email && errors.email.message?.toString()}</span>
				</form>
				<Button color='orange' onClick={handleClose}>
					Continue
				</Button>
			</div>
		</div>
	)
}

export default Modal
