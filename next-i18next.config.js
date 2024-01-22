const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en_US",
    locales: ["en_US", "zh_cn", "ru_RU", "ja_JP"],
  },
  localePath: path.resolve("/locales"),
};
