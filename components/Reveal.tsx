import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimate, useAnimation } from "framer-motion";

const Parent = ({
  children,
  className,
  inline,
  delay,
}: {
  children: JSX.Element;
  className?: string;
  inline?: boolean;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);

  if (inline) {
    return (
      <motion.span
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        className={className}
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.span>
    );
  } else
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        className={className}
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    );
};

const Reveal = ({
  children,
  className,
  inline,
  delay,
}: {
  children: JSX.Element;
  className?: string;
  inline?: boolean;
  delay?: number;
}) => {
  return (
    <Parent className={className} delay={delay} inline={inline}>
      {children}
    </Parent>
  );
};

export default Reveal;
