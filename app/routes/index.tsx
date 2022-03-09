import { motion } from "framer-motion";
import ReactRotatingText from "react-rotating-text";
import { MetaFunction } from "remix";

export function headers() {
  return {
    "cache-control": "max-age=604800, stale-while-revalidate=86400",
  };
}

export let meta: MetaFunction = () => {
  return {
    title: "Travis Harris",
  };
};
const index = () => {
  return (
    <motion.div
      className="home-container main-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <section className="landing">
        <div
          className="landing-content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text">
            <h1>I'm Travis Harris</h1>
            <p>
              A{" "}
              <ReactRotatingText
                items={["Developer", "Dev Manager", "Photographer", "Gamer"]}
              />{" "}
              based in Seattle, Washington
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default index;
