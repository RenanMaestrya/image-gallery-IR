import Image from "next/image";
import styles from "./page.module.css";

import { placeholder64 } from "@/utils/placeholder64";
import blurData from "../utils/images64";

const localImages = [
  { src: "/images/cat.jpg", blur: blurData.cat },
  { src: "/images/heart.jpg", blur: blurData.heart },
  { src: "/images/horse.jpg", blur: blurData.horse },
];

const remoteImages = [
  "https://picsum.photos/id/300/400/300",
  "https://picsum.photos/id/301/400/300",
  "https://picsum.photos/id/302/400/300",
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Image Gallery</h1>

      <section>
        <h2 className={styles.subtitle}>Local Images</h2>
        <div className={styles.gallery}>
          {localImages.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt=""
              width={400}
              height={300}
              placeholder="blur"
              blurDataURL={img.blur}
              className={styles.image}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.subtitle}>Remote Images</h2>
        <div className={styles.gallery}>
          {remoteImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Imagem remota ${index + 1}`}
              width={400}
              height={300}
              placeholder="blur"
              blurDataURL={placeholder64}
              className={styles.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
