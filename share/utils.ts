// Function to scroll to a specific element
export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};
