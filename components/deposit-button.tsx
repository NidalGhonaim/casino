import styles from "./deposit-button.module.scss";
import IconDollar from "./icons/icon-dollar";
import IconMoney from "./icons/icon-money";

const DepositButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        <div className={styles.icon}>
          <IconDollar />
        </div>
        10,566.12
      </div>
      <button className={styles.button}>
        <span className={styles.icon}>
          <IconMoney />
        </span>
        <span className={styles.label}>DEPOSIT</span>
      </button>
    </div>
  );
};

export default DepositButton;
