"use client";

import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./carousel.module.scss";
import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from "next/link";

const isMac = () => {
  return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
};

type CarouselProps = {
  slides: {
    src: string;
    title: string;
  }[];
};

const Carousel = ({ slides }: CarouselProps) => {
  const size = useWindowSize();
  const slidesPerView = size.width && size.width < 1024 ? 1 : 2;

  return (
    <Swiper
      className={styles.container}
      modules={[Zoom, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={8}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      loop
      cssMode={isMac()}
    >
      {slides.map((slide) => (
        <SwiperSlide className={styles.slide} key={slide.title}>
          <Link href={`#${slide.title}`}>
            <Image
              key={slide.title}
              src={slide.src}
              alt={slide.title}
              width={595}
              height={300}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
