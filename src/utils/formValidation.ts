export const formValidator = (obj: any) => {
  if (Object.values(obj).some((item) => item === "")) {
    return true;
  }
};
