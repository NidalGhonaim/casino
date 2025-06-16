"use client";

import styles from "./menu.module.scss";
import IconBaccarat from "./icons/icon-baccarat";
import IconBlackjack from "./icons/icon-blackjack";
import IconCollections from "./icons/icon-collections";
import IconCrash from "./icons/icon-crash";
import IconDice from "./icons/icon-dice";
import IconFavorites from "./icons/icon-favorites";
import IconLanguage from "./icons/icon-language";
import IconLiveDealers from "./icons/icon-live-dealers";
import IconPromotions from "./icons/icon-promotions";
import IconProviders from "./icons/icon-providers";
import IconRecent from "./icons/icon-recent";
import IconRoulette from "./icons/icon-roulette";
import IconSlots from "./icons/icon-slots";
import IconSupport from "./icons/icon-support";
import IconTournament from "./icons/icon-tournament";
import IconVideoPoker from "./icons/icon-video-poker";
import IconVIP from "./icons/icon-vip";
import Link from "next/link";
import IconBars from "./icons/icon-bars";
import { useState } from "react";
import classNames from "classnames";

// This would come from some type of CMS or Backend
const data = [
  {
    label: "Promotions",
    icon: <IconPromotions />,
    link: "#promotions",
    group: "a",
  },
  {
    label: "VIP",
    icon: <IconVIP />,
    link: "#vip",
    group: "a",
  },
  {
    label: "Tournament",
    icon: <IconTournament />,
    link: "#tournament",
    group: "a",
  },
  {
    label: "Slots",
    icon: <IconSlots />,
    link: "#slots",
    group: "a",
  },
  {
    label: "Blackjack",
    icon: <IconBlackjack />,
    link: "#blackjack",
    group: "a",
  },
  {
    label: "Roulette",
    icon: <IconRoulette />,
    link: "#roulette",
    group: "a",
  },
  {
    label: "Baccarat",
    icon: <IconBaccarat />,
    link: "#baccarat",
    group: "a",
  },
  {
    label: "Live Dealers",
    icon: <IconLiveDealers />,
    link: "#live-dealers",
    group: "a",
  },
  {
    label: "Crash",
    icon: <IconCrash />,
    link: "#crash",
    group: "a",
  },
  {
    label: "Dice",
    icon: <IconDice />,
    link: "#dice",
    group: "a",
  },
  {
    label: "Video Poker",
    icon: <IconVideoPoker />,
    link: "#video-poker",
    group: "a",
  },
  {
    label: "Favorites",
    icon: <IconFavorites />,
    link: "#favorites",
    group: "b",
  },
  {
    label: "Recent",
    icon: <IconRecent />,
    link: "#recent",
    group: "b",
  },
  {
    label: "Collections",
    icon: <IconCollections />,
    link: "#collections",
    group: "c",
  },
  {
    label: "Providers",
    icon: <IconProviders />,
    link: "#providers",
    group: "c",
  },
  {
    label: "Support",
    icon: <IconSupport />,
    link: "#support",
    group: "d",
  },
  {
    label: "Language",
    icon: <IconLanguage />,
    link: "#language",
    group: "d",
  },
];

const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded((current) => !current);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.group}>
          <button
            className={styles.toggle}
            onClick={toggle}
            title={expanded ? "minimize" : "expand"}
          >
            <IconBars />
          </button>
        </div>
        {[...new Set(data.map((item) => item.group))].map((group) => (
          <div className={styles.group} key={group}>
            {data
              .filter((item) => item.group === group)
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  className={classNames(styles.link, {
                    [styles.expanded]: expanded,
                  })}
                >
                  {item.icon} <span className={styles.label}>{item.label}</span>
                </Link>
              ))}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
