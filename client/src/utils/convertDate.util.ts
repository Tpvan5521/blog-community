const formatDate = (date: Date, locales: string | null = null, options: any | null = null) => {
  if (locales && options) return date.toLocaleString(locales, options);
  if (locales) return date.toLocaleString(locales);
  return date.toLocaleString();
};

export default formatDate;
