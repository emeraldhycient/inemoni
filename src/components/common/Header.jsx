import styles from "./header.module.css"
import logo from "../../assets/logo/Inemoni.svg"
       
function Header() {
  return (
      <header id={styles.header}>
          <div className={styles.logo}>
              <img src={logo} alt="" />
          </div>
          <ul>
              <li><a href="">Payments</a></li>
              <li><a href="">Company</a></li>
              <li><a href="">Careers</a></li>
          </ul>
          <button className={styles.button}>
              <a href="">Get Started</a>
          </button>
      </header>
  )
}

export default Header