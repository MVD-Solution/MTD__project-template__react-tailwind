import en from "./en";
import vi from "./vi";

const getMessages = (locale: string) => {
  switch (locale) {
    case "en":
      return {
        ...en,
      };
    case "vi":
      return {
        ...en,
        ...vi,
      };
    default:
      return { ...en };
  }
};
export { getMessages };
