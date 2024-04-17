import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src="/logo.svg" alt="Logo" width={164} height={70} />
      <Link href="/">Home</Link>
      <Link href="/iframe">Iframe</Link>
    </nav>
  );
};

export default Navbar;
