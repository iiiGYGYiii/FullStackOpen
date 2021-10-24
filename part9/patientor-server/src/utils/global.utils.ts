export const isDate = (date: string): boolean => Boolean(Date.parse(date));

export const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const parseString = (str: unknown): string => {
  if (!str || !isString(str))
    throw new Error("Incorrect type or missing value");
  return str;
};

export const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date))
    throw new Error("Incorrect or missing date: " + date);
  return date;
};

export const parseArrayOfStings = (arr: unknown): string[] => {
  if (!arr || !Array.isArray(arr) || !arr.every(isString))
    throw new Error("Incorrect type or missing value");
  return arr;
};
