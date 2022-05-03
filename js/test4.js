const capitalize = (str) => {
  const arr = str.split('');
  arr[0] = arr[0].toUpperCase();
  const capitalized = arr.join('');
  return capitalized;
};

module.exports = capitalize;
