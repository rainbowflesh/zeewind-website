import { Footer } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LogoDark } from "./Logos";

export const FooterBar = () => {
  const { t } = useTranslation();
  return (
    <Footer className="p-10 bg-neutral text-neutral-content">
      <div>
        <Footer.Title>{t("string.product")}</Footer.Title>
        <Link to={"/product/cuas"} className="link link-hover">
          {t("string.recon_module")}
        </Link>
        <Link to={"/product/uav"} className="link link-hover">
          {t("string.uav")}
        </Link>
        <Link to={"/product/accessories"} className="link link-hover">
          {t("string.accessories")}
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
      <div className="items-end px-8 ">
        <p className="text-xs max-w-128">
          © 2023 ZEEWIND Ltd., its logo, brand, products, service, and process names appearing in this website are the
          trademarks or service marks of ZEEWIND Ltd., or its affiliated companies. All other brand, product, service,
          and process names appearing are the trademarks of their respective holders. Nothing contained herein shall be
          construed as conferring by implication, estoppel, or otherwise any license or right under any patent,
          copyright, trademark, or other intellectual property right of ZEEWIND Ltd. or any third party, except as
          expressly granted herein. All information in this website is for general information only, and can be changed
          without notice.
        </p>
      </div>
    </Footer>
  );
};
