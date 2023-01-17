const firstLetterUppercaseHandler = (word) => {
  const str = word;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
};

export default firstLetterUppercaseHandler;
