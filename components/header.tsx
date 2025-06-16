import Button from "./button";
import DepositButton from "./deposit-button";
import styles from "./header.module.scss";
import IconBell from "./icons/icon-bell";
import IconUser from "./icons/icon-user";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>Casino</p>
        <div className={styles.controls}>
          <DepositButton />
          <Button icon={<IconBell />} iconOnly>
            Notifications
          </Button>
          <Button icon={<IconUser />} iconOnly>
            Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
