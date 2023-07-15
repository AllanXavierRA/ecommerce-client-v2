import { useState } from "react";
import { Button, Container, Icon, Image } from "semantic-ui-react";
import { fn } from "@/utils";
import { useCart } from "@/hooks";
import { WishlistIcon } from "@/components/Shared";
import styles from "./Panel.module.scss";

export function Panel(props) {
  const { gameId, game } = props;
  const [loading, setLoading] = useState(false);
  const { addCart } = useCart();

  const platform = game.plataforma.data;
  const buyPrice = fn.calcDiscountedPrice(game.precio, game.descuento);

  const addCartWrapper = () => {
    setLoading(true);
    addCart(gameId);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContiner}>
        <Image src={game.portada.data.attributes.url} />
      </div>

      <div className={styles.actionsContainer}>
        <div>
          <h2>{game.titulo}</h2>

          <div className={styles.moreInfo}>
            <span>
              
              {/* <Image src={platform.attributes.icono.data.attributes.url} /> */}
              {platform.attributes.titulo}
            </span>
            <span>
              <Icon name="check" />
              En stock
            </span>
          </div>

          <div className={styles.price}>
            {game.descuento > 0 && (
              <>
                <span className={styles.originalPrice}>
                  <Icon name="tag" />
                  {game.precio}$
                </span>

                <span className={styles.discount}>-{game.descuento}%</span>
              </>
            )}

            <span className={styles.price}>{buyPrice}$</span>
          </div>

          {/* <Button primary fluid onClick={addCartWrapper} loading={loading}>
            Comprar ahora
          </Button> */}

          <WishlistIcon gameId={gameId} className={styles.heart} />
        </div>
      </div>
    </Container>
  );
}
