import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { db } from "~/utils/db.server";

import { Cloudinary } from "@cloudinary/url-gen";
import Gallery from "~/components/Gallery/Gallery";
import { Photo } from ".prisma/client";
import { motion } from "framer-motion";
import { useMedia } from "react-use";

type LoaderData = {
  photos: (Photo & {
    src: string;
    lgHeight: number;
    lgWidth: number;
    alt: string;
  })[];
};

export const loader: LoaderFunction = async ({
  params,
}): Promise<LoaderData> => {
  const photos = await db.photo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const cld = new Cloudinary({
    cloud: {
      cloudName: "travisdevsite",
    },
  });
  return {
    photos: photos.map((photo) => {
      const img = cld.image(photo.name).quality(100).toURL();
      return {
        ...photo,
        src: img,
        height: photo.height,
        width: photo.width,
        lgHeight: photo.height,
        lgWidth: photo.width,
        alt: "",
      };
    }),
  };
};

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
  const data = useLoaderData<LoaderData>();

  const cld = new Cloudinary({
    cloud: {
      cloudName: "travisdevsite",
    },
  });

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
        photos={data.photos as any}
        direction={"column"}
        columns={cols}
      />
    </motion.div>
  );
}
