import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import { Game } from "@/api";
import { Label } from "@/components/Shared";
import { fn } from "@/utils";
import styles from "./BannerLastGamePublished.module.scss";

const gameCtrl = new Game();

export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();
        setGame(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!game) return null;

  const wallpaper = game.attributes.fondo_pantalla;
  const releaseDate = new Date(game.attributes.createdAt).toISOString();
  const price = fn.calcDiscountedPrice(
    game.attributes.precio,
    game.attributes.descuento
  );

  return (
    <div className={styles.container}>
      <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />

      <Link className={styles.infoContainer} href={game.attributes.url}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>

          <h2>{game.attributes.titulo}</h2>

          <p className={styles.price}>
            <Label.Discount>-{game.attributes.descuento}%</Label.Discount>
            <span className={styles.finalPrice}>{price}$</span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
