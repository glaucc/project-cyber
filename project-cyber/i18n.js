// i18n.js
const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["az"],
  localePath: typeof window === "undefined" ? "public/locales" : "locales",
});
