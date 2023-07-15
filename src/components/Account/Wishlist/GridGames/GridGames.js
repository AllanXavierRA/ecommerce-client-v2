import Link from "next/link";
import { map } from "lodash";
import { Label, WishlistIcon } from "@/components/Shared";
import { fn } from "@/utils";
import styles from "./GridGames.module.scss";

export function GridGames(props) {
  const { wishlist, onReload } = props;

  return (
    <div className={styles.gridGames}>
      {map(wishlist, (item) => {
        const game = item.attributes.reloj.data ;
        const cover = game.attributes.portada.data;

        return (
          <div key={item.id} className={styles.game}>
            <Link href={`/${game.attributes.url}`}>
              <div>
                <img src={cover.attributes.url} />

                {game.attributes.descuento > 0 && (
                  <Label.Discount className={styles.discount}>
                    {`-${game.attributes.descuento}%`}
                  </Label.Discount>
                )}
              </div>

              <div>
                <span>{game.attributes.titulo}</span>
                <span className={styles.price}>
                  {fn.calcDiscountedPrice(
                    game.attributes.precio,
                    game.attributes.descuento
                  )}
                  $
                </span>
              </div>
            </Link>

            <WishlistIcon
              gameId={game.id}
              className={styles.whislistIcon}
              removeCallback={onReload}
            />
          </div>
        );
      })}
    </div>
  );
}
