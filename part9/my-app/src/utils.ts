export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discrimination union member ${JSON.stringify(value)}`
  );
};
