import { greet } from "./greet.js";

test("return 'Hello Jane!' if called greet('Jane')", () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});

test("return 'Hello Stranger!' if called greet() without an argument", () => {
  const result = greet();
  expect(result).toBe("Hello Stranger!");
});

test("return 'Hello Coach!' if called greet('Martin')", () => {
  const result = greet("Martin");
  expect(result).toBe("Hello Coach!");
});

test("return 'wrongt input' if greet() is called with other than a string as agrument", () => {
  const result = greet(["Martin"]);
  expect(result).toBe("Wrong input");
});
