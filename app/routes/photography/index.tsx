import { MetaFunction } from "@remix-run/node";
import Gallery from "../../components/Gallery/Gallery";
import { motion } from "framer-motion";
import { useMedia } from "react-use";

import data from "../../components/photoData.json";

export function headers() {
  return {
    "cache-control": "max-age=604800, stale-while-revalidate=86400"
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Travis Harris - Photography",
    description: `Hi, I'm Travis. I'm an engineering manager at Microsoft, a Front End Developer and an Ameteur Photographer`,
  };
};
export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.3.0/css/lightgallery-bundle.min.css",
    },
  ];
}

export default function Index() {
  const medium = useMedia("(min-width: 720px)");
  const large = useMedia("(min-width: 1728px)");
  let cols = 1;
  if (large) {
    cols = 3;
  } else if (medium) {
    cols = 2;
  }
  return (
    <motion.div
      className="photography-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      <Gallery
        photos={data.sort((a, b) => b.createdAt - a.createdAt) as any}
        direction={"column"}
        columns={cols}
      />
    </motion.div>
  );
}
