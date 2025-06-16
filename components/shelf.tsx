"use client";

import { ReactNode, useRef, useState } from "react";
import Button from "./button";
import IconArrowLeft from "./icons/icon-arrow-left";
import IconArrowRight from "./icons/icon-arrow-right";
import styles from "./shelf.module.scss";
import Link from "next/link";
import Image from "next/image";

type ShelfProps = {
  title: string;
  icon: ReactNode;
  items: {
    thumbnail: string;
    name: string;
  }[];
  width: number;
  height: number;
};

const Shelf = ({ title, icon, items, width, height }: ShelfProps) => {
  const slider = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  // TODO: Detect when the users scrolls manually on touch devices.

  const scrollLeft = () => {
    if (!slider.current) return;

    const el = slider.current;
    const newScrollLeft = el.scrollLeft - el.clientWidth;

    el.scrollTo({ left: newScrollLeft, behavior: "smooth" });

    setAtEnd(false);
    if (newScrollLeft <= 0) {
      setAtStart(true);
    } else {
      setAtStart(false);
    }
  };

  const scrollRight = () => {
    if (!slider.current) return;

    const el = slider.current;
    const newScrollLeft = el.scrollLeft + el.clientWidth;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    el.scrollTo({ left: newScrollLeft, behavior: "smooth" });

    setAtStart(false);
    if (newScrollLeft >= maxScrollLeft) {
      setAtEnd(true);
    } else {
      setAtEnd(false);
    }
  };

  return (
    <div className={styles.category}>
      <div className={styles.header}>
        <p className={styles.title}>
          {icon} {title}
        </p>
        <div className={styles.controls}>
          <Button
            icon={<IconArrowLeft />}
            iconOnly
            onClick={scrollLeft}
            disabled={atStart}
          >
            scroll left
          </Button>
          <Button
            icon={<IconArrowRight />}
            iconOnly
            onClick={scrollRight}
            disabled={atEnd}
          >
            scroll right
          </Button>
        </div>
      </div>
      <div className={styles.slider} ref={slider}>
        {items.map((game) => (
          <Link key={game.name} href={`#${game.name}`} className={styles.link}>
            <Image
              src={game.thumbnail}
              alt={game.name}
              width={width}
              height={height}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shelf;
