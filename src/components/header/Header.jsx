import styles from './header.module.css'
import Logo from '../../assets/svg/Logo.svg'

export default function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <a href="#features">Tournaments</a>
        </li>
        <li>
          <a href="#pricing">Our Team</a>
        </li>
        <li>
          <a href="#contact">Our Sponsors</a>
        </li>
        <div>
          <img src={Logo} alt="Astro Logo" />
        </div>
        <li>
          <a href="#features">About Us</a>
        </li>
        <li>
          <a href="#pricing">Shop</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  )
}
