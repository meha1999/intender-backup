import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionProps {
  i: number;
  expanded: number | false;
  setExpanded: (index: number | false) => void;
  title: React.ReactNode;
  description: React.ReactNode;
  containerStyle?: string;
  childrenStyle?: string;
  className?: string;
  arrow?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  i,
  expanded,
  setExpanded,
  title,
  description,
  containerStyle,
  childrenStyle,
  className,
  arrow,
}) => {
  const isOpen = i === expanded;

  return (
    <div className={className}>
      <motion.div
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className={containerStyle}
      >
        <div className="flex justify-between">
          {title}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
              className={"origin-top " + childrenStyle}
            >
              {description}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
