import styles from './home.module.css'
import img1 from '../../assets/svg/img1.svg'
import img2 from '../../assets/svg/img2.svg'
import img3 from '../../assets/svg/img3.svg'
import img4 from '../../assets/svg/img4.svg'

export default function Home() {
  return (
    <section id='home'>
      <div className={styles.title_container}>
        <h1>
          Welcome to the <span>Esports</span><br/>
          <span>Multiverse</span>
        </h1>
      </div>
      <div></div>
    </section>
  )
}
