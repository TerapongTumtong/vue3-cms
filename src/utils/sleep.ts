export const sleep = (ms: number | undefined) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('');
    }, ms);
  });
