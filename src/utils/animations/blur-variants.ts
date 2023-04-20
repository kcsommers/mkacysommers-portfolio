export const blurVariants = (blurDuration = 1, nonBlurDuration = 0.5) => ({
  blurState: {
    filter: 'blur(10px)',
    opacity: 0,
    transition: {
      duration: blurDuration,
    },
  },
  nonBlurState: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      duration: nonBlurDuration,
    },
  },
});
