// src/components/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Troo Demo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
