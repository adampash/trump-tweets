const pipe = data => (...fns) => fns.reduce((acc, fn) => fn(acc), data);

export const asyncPipe = data =>
  (...fns) =>
    fns.reduce(
      (acc, fn) => Promise.resolve(acc).then(fn),
      Promise.resolve(data)
    );

export default pipe;
