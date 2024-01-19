import { Footer } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const FooterBar = () => {
  const { t } = useTranslation();
  return (
    <Footer className="p-10 bg-neutral text-neutral-content">
      <div>
        <Footer.Title>{t("string.services")}</Footer.Title>
        <Link to={"/products"} className="link link-hover">
          {t("string.products")}
        </Link>
        <Link to={"/consult"} className="link link-hover">
          {t("string.consult")}
        </Link>
      </div>
      <div>
        <Footer.Title>{t("string.company")}</Footer.Title>
        <Link to={"/about"} className="link link-hover">
          {t("string.about")}
        </Link>
        <Link to={"/contact"} className="link link-hover">
          {t("string.contact")}
        </Link>
      </div>
      <div>
        <Footer.Title>{t("string.legal")}</Footer.Title>
        <Link to={"/tos"} className="link link-hover">
          {t("string.tos")}
        </Link>
      </div>
    </Footer>
  );
};
