import Link from "next/link";
import styles from "./mobile-menu.module.scss";
import MenuIconHome from "./icons/menu-icon-home";
import MenuIconMonies from "./icons/menu-icon-monies";
import MenuIconSearch from "./icons/menu-icon-search";
import MenuIconChat from "./icons/menu-icon-chat";
import MenuIconBars from "./icons/menu-icon-bars";

const MobileMenu = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href={"#home"}>
        <MenuIconHome />
        <span className={styles.label}>Home</span>
      </Link>
      <Link className={styles.link} href={"#search"}>
        <MenuIconSearch />
        <span className={styles.label}>Search</span>
      </Link>
      <Link className={styles.link} href={"#deposit"}>
        <MenuIconMonies />
        <span className={styles.label}>Deposit</span>
      </Link>
      <Link className={styles.link} href={"#chat"}>
        <MenuIconChat />
        <span className={styles.label}>Chat</span>
      </Link>
      <Link className={styles.link} href={"#menu"}>
        <MenuIconBars />
        <span className={styles.label}>Menu</span>
      </Link>
    </div>
  );
};

export default MobileMenu;
