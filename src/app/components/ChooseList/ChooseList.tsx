import { Result } from '@/app/types/type'
import React from 'react'
import classNames from 'classnames'
import styles from './ChooseList.module.css'
import useStore from '@/app/store/useStore'
import { CheckBoxChecked, CheckBoxDefault } from '@/app/icons'

interface ChooseListProps {
	items?: Result[]
}

const ChooseList = ({ items }: ChooseListProps) => {
	const { selectedName, setSelectedName, setIsModalOpen } = useStore()

	const handleSelect = (name: string) => {
		setSelectedName(name)
		setIsModalOpen(true)
	}

	return (
		<ul className={styles.list}>
			{items?.map((item) => (
				<li
					key={item.login.uuid}
					onClick={() => handleSelect(item.name.last)}
					className={classNames(styles.listItem, {
						[styles.active]: selectedName === item.name.last,
					})}
				>
					{selectedName === item.name.last ? (
						<CheckBoxDefault />
					) : (
						<CheckBoxChecked />
					)}
					<span className={styles.name}>{item.name.last}</span>
				</li>
			))}
		</ul>
	)
}

export default ChooseList
