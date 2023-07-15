import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" />
            </Link>
          </div>

          <div>
            {/* <ul> */}
              {/* TODO: agregar(datos) o quitar links */}
              {/* <Link href="#">Términos y condiciones</Link> */}
              {/* <Link href="#">Política de privacidad</Link> */}
              {/* <Link href="#">Contacto</Link> */}
              {/* <Link href="#">FAQs</Link> */}
            {/* </ul> */}
          </div>

          {/* TODO: Redes sociales: CAMBIAR HREF */}
          <div className={styles.social}>
            {/* <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" circular color="twitter" icon="twitter" />
            <Button as="a" href="#" circular color="linkedin" icon="linkedin" />
            <Button as="a" href="#" circular color="youtube" icon="youtube" /> */}
          </div>
        </div>

        <div className={styles.copyright}>
          {/* TODO: Cambiar copyright */}
          <span>Copyright © 2023 TRINITY - All rights reserved</span>
        </div>
      </Container>
    </div>
  );
}
