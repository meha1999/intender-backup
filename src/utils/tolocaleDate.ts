export const toLocalDate = (date: number | string) =>
  new Date(+date * 1000).toLocaleDateString("fa-IR");
