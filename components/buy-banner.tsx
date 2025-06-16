import Image from "next/image";
import Button from "./button";
import styles from "./buy-banner.module.scss";

const data = [
  {
    thumbnail: "/images/payments/payment-1.png",
    name: "Visa",
  },
  {
    thumbnail: "/images/payments/payment-2.png",
    name: "Master Card",
  },
  {
    thumbnail: "/images/payments/payment-3.png",
    name: "Apple Pay",
  },
  {
    thumbnail: "/images/payments/payment-4.png",
    name: "Google Pay",
  },
  {
    thumbnail: "/images/payments/payment-5.png",
    name: "Neteller",
  },
  {
    thumbnail: "/images/payments/payment-6.png",
    name: "Skrill",
  },
  {
    thumbnail: "/images/payments/payment-7.png",
    name: "Revolut",
  },
];

const BuyBanner = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {`You don't have Crypto?`}
        <br />
        {`No problem.`}
      </p>
      <div className={styles.logos}>
        {data.map((payment) => (
          <Image
            key={payment.name}
            src={payment.thumbnail}
            alt={payment.name}
            width={80}
            height={55}
          />
        ))}
      </div>
      <Button className={styles.button} stretch>
        Buy Now
      </Button>
    </div>
  );
};

export default BuyBanner;
