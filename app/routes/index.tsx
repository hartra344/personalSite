import { motion } from "framer-motion";
import { useRef } from "react";
import ReactRotatingText from "react-rotating-text";
import { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Travis Harris",
  };
};
const index = () => {
  const elementRef = useRef(null);
  const executeScroll = () =>
    (elementRef.current as any)?.scrollIntoView({ behavior: "smooth" });

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
