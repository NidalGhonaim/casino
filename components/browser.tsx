"use client";

import styles from "./browser.module.scss";
import Button from "./button";
import IconBaccarat from "./icons/icon-baccarat";
import IconBadge from "./icons/icon-badge";
import IconBlackjack from "./icons/icon-blackjack";
import IconCrash from "./icons/icon-crash";
import IconCrown from "./icons/icon-crown";
import IconDice from "./icons/icon-dice";
import IconFlame from "./icons/icon-flame";
import IconFlash from "./icons/icon-flash";
import IconGrid from "./icons/icon-grid";
import IconLiveDealers from "./icons/icon-live-dealers";
import IconRoulette from "./icons/icon-roulette";
import IconSearch from "./icons/icon-search";
import IconSlots from "./icons/icon-slots";
import Shelf from "./shelf";

const data = [
  {
    thumbnail: "/images/games/game-1.png",
    name: "game 1",
    category: { name: "Featured Games", icon: <IconCrown /> },
  },
  {
    thumbnail: "/images/games/game-2.png",
    name: "game 2",
    category: { name: "Featured Games", icon: <IconCrown /> },
  },
  {
    thumbnail: "/images/games/game-3.png",
    name: "game 3",
    category: { name: "Featured Games", icon: <IconCrown /> },
  },
  {
    thumbnail: "/images/games/game-4.png",
    name: "game 4",
    category: { name: "Featured Games", icon: <IconCrown /> },
  },
  {
    thumbnail: "/images/games/game-5.png",
    name: "game 5",
    category: { name: "Featured Games", icon: <IconCrown /> },
  },
  {
    thumbnail: "/images/games/game-6.png",
    name: "game 6",
    category: { name: "Featured Games", icon: <IconCrown /> },
  },
  {
    thumbnail: "/images/games/game-7.png",
    name: "game 7",
    category: { name: "Featured Games", icon: <IconCrown /> },
  },
  {
    thumbnail: "/images/games/game-8.png",
    name: "game 8",
    category: { name: "Featured Games", icon: <IconCrown /> },
  },
  {
    thumbnail: "/images/games/game-9.png",
    name: "game 9",
    category: { name: "New Releases", icon: <IconFlash /> },
  },
  {
    thumbnail: "/images/games/game-10.png",
    name: "game 10",
    category: { name: "New Releases", icon: <IconFlash /> },
  },
  {
    thumbnail: "/images/games/game-11.png",
    name: "game 11",
    category: { name: "New Releases", icon: <IconFlash /> },
  },
  {
    thumbnail: "/images/games/game-12.png",
    name: "game 12",
    category: { name: "New Releases", icon: <IconFlash /> },
  },
  {
    thumbnail: "/images/games/game-13.png",
    name: "game 13",
    category: { name: "New Releases", icon: <IconFlash /> },
  },
  {
    thumbnail: "/images/games/game-14.png",
    name: "game 14",
    category: { name: "New Releases", icon: <IconFlash /> },
  },
  {
    thumbnail: "/images/games/game-15.png",
    name: "game 15",
    category: { name: "New Releases", icon: <IconFlash /> },
  },
  {
    thumbnail: "/images/games/game-16.png",
    name: "game 16",
    category: { name: "New Releases", icon: <IconFlash /> },
  },
  {
    thumbnail: "/images/games/game-17.png",
    name: "game 17",
    category: { name: "Hot Games", icon: <IconFlame /> },
  },
  {
    thumbnail: "/images/games/game-18.png",
    name: "game 18",
    category: { name: "Hot Games", icon: <IconFlame /> },
  },
  {
    thumbnail: "/images/games/game-19.png",
    name: "game 19",
    category: { name: "Hot Games", icon: <IconFlame /> },
  },
  {
    thumbnail: "/images/games/game-20.png",
    name: "game 20",
    category: { name: "Hot Games", icon: <IconFlame /> },
  },
  {
    thumbnail: "/images/games/game-21.png",
    name: "game 21",
    category: { name: "Hot Games", icon: <IconFlame /> },
  },
  {
    thumbnail: "/images/games/game-22.png",
    name: "game 222",
    category: { name: "Hot Games", icon: <IconFlame /> },
  },
  {
    thumbnail: "/images/games/game-23.png",
    name: "game 23",
    category: { name: "Hot Games", icon: <IconFlame /> },
  },
  {
    thumbnail: "/images/games/game-24.png",
    name: "game 24",
    category: { name: "Hot Games", icon: <IconFlame /> },
  },
  {
    thumbnail: "/images/games/game-25.png",
    name: "game 25",
    category: { name: "Bonus Buy", icon: <IconBadge /> },
  },
  {
    thumbnail: "/images/games/game-26.png",
    name: "game 26",
    category: { name: "Bonus Buy", icon: <IconBadge /> },
  },
  {
    thumbnail: "/images/games/game-27.png",
    name: "game 27",
    category: { name: "Bonus Buy", icon: <IconBadge /> },
  },
  {
    thumbnail: "/images/games/game-28.png",
    name: "game 28",
    category: { name: "Bonus Buy", icon: <IconBadge /> },
  },
  {
    thumbnail: "/images/games/game-29.png",
    name: "game 29",
    category: { name: "Bonus Buy", icon: <IconBadge /> },
  },
  {
    thumbnail: "/images/games/game-30.png",
    name: "game 30",
    category: { name: "Bonus Buy", icon: <IconBadge /> },
  },
  {
    thumbnail: "/images/games/game-31.png",
    name: "game 31",
    category: { name: "Bonus Buy", icon: <IconBadge /> },
  },
  {
    thumbnail: "/images/games/game-32.png",
    name: "game 32",
    category: { name: "Bonus Buy", icon: <IconBadge /> },
  },
  {
    thumbnail: "/images/games/game-33.png",
    name: "game 33",
    category: { name: "Live Games", icon: <IconBaccarat /> },
  },
  {
    thumbnail: "/images/games/game-34.png",
    name: "game 34",
    category: { name: "Live Games", icon: <IconBaccarat /> },
  },
  {
    thumbnail: "/images/games/game-35.png",
    name: "game 35",
    category: { name: "Live Games", icon: <IconBaccarat /> },
  },
  {
    thumbnail: "/images/games/game-36.png",
    name: "game 36",
    category: { name: "Live Games", icon: <IconBaccarat /> },
  },
  {
    thumbnail: "/images/games/game-37.png",
    name: "game 37",
    category: { name: "Live Games", icon: <IconBaccarat /> },
  },
  {
    thumbnail: "/images/games/game-38.png",
    name: "game 38",
    category: { name: "Live Games", icon: <IconBaccarat /> },
  },
  {
    thumbnail: "/images/games/game-39.png",
    name: "game 39",
    category: { name: "Live Games", icon: <IconBaccarat /> },
  },
  {
    thumbnail: "/images/games/game-40.png",
    name: "game 40",
    category: { name: "Live Games", icon: <IconBaccarat /> },
  },
];

const Browser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label className={styles.label} htmlFor="search" title="search">
          <IconSearch />
        </label>
        <input
          className={styles.input}
          type="search"
          name="search"
          id="search"
          placeholder="Search your game"
        />
      </div>
      <div className={styles.controls}>
        <div className={styles.tags}>
          <Button secondary icon={<IconGrid />} active>
            All Games
          </Button>
          <Button secondary icon={<IconSlots />}>
            Slots
          </Button>
          <Button secondary icon={<IconBlackjack />}>
            Blackjack
          </Button>
          <Button secondary icon={<IconRoulette />}>
            Roulette
          </Button>
          <Button secondary icon={<IconLiveDealers />}>
            Live
          </Button>
          <Button secondary icon={<IconBaccarat />}>
            Baccarat
          </Button>
          <Button secondary icon={<IconCrash />}>
            Crash
          </Button>
          <Button secondary icon={<IconDice />}>
            Dice
          </Button>
        </div>
        {/* <p>select 1</p>
        <p>select 2</p> */}
      </div>
      {[
        ...new Map(
          data.map((game) => [game.category.name, game.category])
        ).values(),
      ].map((category) => (
        <Shelf
          key={category.name}
          title={category.name}
          icon={category.icon}
          items={data.filter((game) => game.category.name === category.name)}
          width={150}
          height={200}
        />
      ))}
    </div>
  );
};

export default Browser;
