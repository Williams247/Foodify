// Formats name slugs
export const slugFormat = (context: string) => {
  return context.replaceAll(" ", "-").toLowerCase();
};
