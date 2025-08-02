import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import type { Transition } from "framer-motion";

const dotTransition: Transition = {
  duration: 0.6,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut",
};

const ThinkingDots = () => {
  const t = useTranslations("Bot");

  return (
    <div className="flex gap-1 text-gray-500 items-center">
      <span>{t("thinking")}</span>
      <motion.span
        className="dot"
        animate={{ y: [0, -5, 0] }}
        transition={{ ...dotTransition, delay: 0 }}
      >
        .
      </motion.span>
      <motion.span
        className="dot"
        animate={{ y: [0, -5, 0] }}
        transition={{ ...dotTransition, delay: 0.2 }}
      >
        .
      </motion.span>
      <motion.span
        className="dot"
        animate={{ y: [0, -5, 0] }}
        transition={{ ...dotTransition, delay: 0.4 }}
      >
        .
      </motion.span>
    </div>
  );
};

export default ThinkingDots;
