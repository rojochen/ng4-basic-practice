export const UseFactory = (logFun): number => {
    logFun.error(Math.random());
    return Math.random();
};
