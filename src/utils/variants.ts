export const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

export const selectVariants = {
  open: {
    opacity: 1,
    y: 0,
    display: "flex",
  },
  closed: {
    opacity: 0,
    y: "-10%",
    transitionEnd: {
      display: "none",
    },
  },
};

export const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
