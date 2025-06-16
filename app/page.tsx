import Carousel from "@/components/carousel";
import styles from "./page.module.scss";
import PhotoGrid from "@/components/photo-grid";
import Browser from "@/components/browser";
import Shelf from "@/components/shelf";
import IconProviders from "@/components/icons/icon-providers";
import BuyBanner from "@/components/buy-banner";
import Terms from "@/components/terms";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Carousel
          slides={[
            { src: "/images/slides/slide-1.png", title: "example title 1" },
            { src: "/images/slides/slide-2.png", title: "example title 2" },
            { src: "/images/slides/slide-3.png", title: "example title 3" },
            { src: "/images/slides/slide-4.png", title: "example title 4" },
          ]}
        />
        <PhotoGrid />
      </div>
      <Browser />
      <Shelf
        title="Providers"
        icon={<IconProviders />}
        items={[
          { thumbnail: "/images/providers/provider-1.png", name: "provider 1" },
          { thumbnail: "/images/providers/provider-2.png", name: "provider 2" },
          { thumbnail: "/images/providers/provider-3.png", name: "provider 3" },
          { thumbnail: "/images/providers/provider-4.png", name: "provider 4" },
          { thumbnail: "/images/providers/provider-5.png", name: "provider 5" },
          { thumbnail: "/images/providers/provider-6.png", name: "provider 6" },
          { thumbnail: "/images/providers/provider-7.png", name: "provider 7" },
          { thumbnail: "/images/providers/provider-8.png", name: "provider 8" },
        ]}
        width={150}
        height={60}
      />
      <BuyBanner />
      <Terms />
    </div>
  );
}
