import Link from "next/link";
import { map } from "lodash";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";
import styles from "./GridGames.module.scss";

export function GridGames(props) {
  const { games } = props;

  return (
    <div className={styles.gridGames}>
      {map(games, (game) => (
        <Link
          key={game.id}
          href={`/${game.attributes.url}`}
          className={styles.game}
        >
          <div>
            <img src={game.attributes.portada.data.attributes.url} />
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
      ))}
    </div>
  );
}
