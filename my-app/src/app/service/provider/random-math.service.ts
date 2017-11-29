export const RandomMath = (logFun): number => {
  console.log('logFun: ', logFun);
  logFun.error(Math.random());
  return Math.random();
};
