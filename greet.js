export function greet(name = "Stranger") {
  if (Array.isArray(name)) {
    return "Wrong input";
  }

  if (name === "Martin") {
    return `Hello Coach!`;
  }
  return `Hello ${name}!`;
}
