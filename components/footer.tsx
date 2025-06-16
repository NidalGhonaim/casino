import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

const data = {
  payments: [
    {
      src: "/images/payment-icons/icon-payment-1.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-2.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-3.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-4.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-5.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-6.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-7.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-8.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-9.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-10.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-11.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-12.svg",
    },
    {
      src: "/images/payment-icons/icon-payment-13.svg",
    },
  ],
  legal: [
    {
      src: "/images/legal-logos/legal-logo-1.png",
    },
    {
      src: "/images/legal-logos/legal-logo-2.png",
    },
    {
      src: "/images/legal-logos/legal-logo-3.png",
    },
    {
      src: "/images/legal-logos/legal-logo-4.png",
    },
  ],
};

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.nav}>
          <div className={styles.brand}>
            <p>Casino</p>
            <p>
              Strike it rich at *******! Experience heart-pounding action with
              massive jackpots, fast payouts, and VIP treatment that keeps
              champions coming back. Join thousands of winners today - your
              fortune awaits!
            </p>
          </div>
          <div className={styles.column}>
            <p className={styles.title}>Games</p>
            <Link className={styles.link} href={"#slots"}>
              Slots
            </Link>
            <Link className={styles.link} href={"#live-dealers"}>
              Live Dealers
            </Link>
            <Link className={styles.link} href={"#table-games"}>
              Table Games
            </Link>
            <Link className={styles.link} href={"#video-poker"}>
              Video Poker
            </Link>
            <Link className={styles.link} href={"#crash"}>
              Crash
            </Link>
          </div>
          <div className={styles.column}>
            <p className={styles.title}>Promotions</p>
            <Link className={styles.link} href={"#welcome-bonus"}>
              Welcome Bonus
            </Link>
            <Link className={styles.link} href={"#cash-back-deals"}>
              Cash Back Deals
            </Link>
            <Link className={styles.link} href={"#weekly-cashback"}>
              Weekly Cashback
            </Link>
            <Link className={styles.link} href={"#tournaments"}>
              Tournaments
            </Link>
            <Link className={styles.link} href={"#vip-club"}>
              VIP Club
            </Link>
          </div>
          <div className={styles.column}>
            <p className={styles.title}>Banking</p>
            <Link className={styles.link} href={"#deposit-options"}>
              Deposit Options
            </Link>
            <Link className={styles.link} href={"#withdraw-options"}>
              Withdraw Options
            </Link>
            <Link className={styles.link} href={"#refund-policy"}>
              Refund Policy
            </Link>
            <Link className={styles.link} href={"#payment-security"}>
              Payment Security
            </Link>
            <Link className={styles.link} href={"#aml-policy"}>
              AML Policy
            </Link>
          </div>
          <div className={styles.column}>
            <p className={styles.title}>Casino</p>
            <Link className={styles.link} href={"#terms-and-conditions"}>
              Terms & Conditions
            </Link>
            <Link className={styles.link} href={"#privacy-policy"}>
              Privacy Policy
            </Link>
            <Link className={styles.link} href={"#bonus-terms"}>
              Bonus Terms
            </Link>
            <Link className={styles.link} href={"#affiliate-program"}>
              Affiliate Program
            </Link>
            <Link className={styles.link} href={"#about-casino"}>
              About Casino
            </Link>
          </div>
          <div className={styles.column}>
            <p className={styles.title}>Customer Care</p>
            <Link className={styles.link} href={"#live-chat"}>
              Live Chat
            </Link>
            <Link className={styles.link} href={"#phone-support"}>
              Phone Support
            </Link>
            <Link className={styles.link} href={"#email-support"}>
              Email Support
            </Link>
            <Link className={styles.link} href={"#help-desk"}>
              Help Desk
            </Link>
            <Link className={styles.link} href={"#responsible-gaming"}>
              Responsible Gaming
            </Link>
          </div>
        </div>
        <div className={styles.payments}>
          {data.payments.map((logo) => (
            <Image
              className={styles.logo}
              key={logo.src}
              src={logo.src}
              alt=""
              width={80}
              height={45}
            />
          ))}
        </div>
        <div className={styles.legal}>
          <div className={styles.logos}>
            {data.legal.map((logo) => (
              <Image
                className={styles.logo}
                key={logo.src}
                src={logo.src}
                alt=""
                width={80}
                height={45}
              />
            ))}
          </div>
          <p>© 2025 *******. All Rights Reserved.</p>
          <p>GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!</p>
          <p>
            ******* casino is operated by *******, ensuring a secure and fair
            gaming environment for all players. We strictly adhere to all
            regulatory requirements to maintain transparency and fairness. Our
            commitment to integrity and ethical practices is at the core of our
            business. We employ advanced security measures, including SSL
            encryption and robust firewall systems, to protect your personal and
            financial information. Promoting responsible gaming is a priority at
            ******* Casino. We provide tools and resources to help you gamble
            responsibly. We offer a variety of secure payment methods and ensure
            seamless transactions. All payment processes are encrypted and
            compliant with industry standards. Our customer support team is
            available 24/7 to assist you with any questions or issues you may
            have. Contact us via Live Chat, Email, or Phone for prompt and
            professional assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
