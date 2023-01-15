import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['cyrillic'] })

export default function Home() {
	return (
		<main className={styles.main}>

			<div className={styles.center}>
				<h1 className={styles.h1}>AgwaySports</h1>
			</div>
		</main>
	)
}
