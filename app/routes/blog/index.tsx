export function headers() {
  return {
    "cache-control": "max-age=604800, stale-while-revalidate=86400",
  };
}

export default function Blog() {
  return <div>Blog</div>;
}
