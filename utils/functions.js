export const trimDate = (date) => {
  const fullDate = new Date(date);

  const trimmed = fullDate.toString().split("").slice(0, 24).join("");
  return trimmed;
};
