import { META } from "@/constants/metadata";

function Meta() {
  return (
    <>
      <title>{META.TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={META.DESCRIPTION} />
      <meta property="og:title" content={META.TITLE} />
      <meta property="og:type" content={META.TYPE} />
      <meta property="og:url" content={META.URL} />
      <meta property="og:image" content={META.IMG} />
      <meta property="og:article:author" content={META.AUTHOR} />
      <link rel="icon" href={META.ICON} />
    </>
  );
}
export default Meta;
