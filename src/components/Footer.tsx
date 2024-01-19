import { Footer } from "react-daisyui";
import { useTranslation } from "react-i18next";
export const FooterBar = () => {
  const { t } = useTranslation();
  return (
    <Footer className="p-10 bg-neutral text-neutral-content">
      <div>
        <Footer.Title>{t("string.services")}</Footer.Title>
        <a className="link link-hover">{t("string.products")}</a>
        <a className="link link-hover">{t("string.consults")}</a>
      </div>
      <div>
        <Footer.Title>{t("string.company")}</Footer.Title>
        <a className="link link-hover">{t("string.about")}</a>
        <a className="link link-hover">{t("string.contact")}</a>
      </div>
      <div>
        <Footer.Title>{t("string.legal")}</Footer.Title>
        <a className="link link-hover">{t("string.tos")}</a>
      </div>
    </Footer>
  );
};
