import Header from './components/Header/Header'
import MainScreen from './components/MainScreen/MainScreen'
import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<div className={styles.container}>
				<MainScreen />
			</div>
		</div>
	)
}
