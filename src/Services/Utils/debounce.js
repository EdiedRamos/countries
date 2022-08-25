export const debounce = (callback, time) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      callback(...args);
    }, time);
  };
};
