import Head from "next/head";

export function Seo(props) {
  const {
    // TODO: CAMBIAR EL SEO
    title = "Gaming - Tus juegos favoritos",
    description = "Tus juegos favoritos para Steam, PlayStation, Xbox, Switch al mejor precio.",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}
