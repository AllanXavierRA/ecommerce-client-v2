import { BasicLayout } from "@/layouts";
import { Game } from "@/components/Game";
import { Separator, Seo } from "@/components/Shared";

export default function GamePage(props) {
  const { game } = props;
  const wallpaper = game.attributes.fondo_pantalla;

  return (
    <>
      <Seo
        title={game.attributes.titulo}
        description={game.attributes.descripcion}
      />

      <BasicLayout>
        <Game.HeaderWallpaper image={wallpaper.data.attributes.url} />
        <Game.Panel gameId={game.id} game={game.attributes} />

        <Separator height={50} />

        <Game.Info game={game.attributes} />

        <Separator height={30} />

        <Game.Media
          // video={game.attributes.video}
          screenshots={game.attributes.carrusel_imagenes.data}
        />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
