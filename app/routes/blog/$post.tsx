import styles from "@hydralite/vortex/dist/style.css";
import Blog from "@hydralite/vortex";
import { ClientOnly, useHydrated } from "remix-utils";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function BlogPost() {
  let isHydrated = useHydrated();

  if (isHydrated) {
    return <Blog layout="Hashnode" content="Test Content" />;
  }
  return <div>Loading</div>;
}
