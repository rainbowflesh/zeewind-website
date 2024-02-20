import { Button } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const LogoLight = () => {
  const { t } = useTranslation();
  return (
    <Link to="/">
      <Button className="text-xl text-left normal-case md:flex md:items-center" color="ghost">
        <img src="/favicon.svg" className="size-12 left-1 mr-auto text-left " />
        <div className="flex flex-col ml-1">
          <span className={"self-start"}>{t("string.company_name_short")}</span>
          <span className="text-sm font-light block -mt-1">{t("string.company_slogan")}</span>
        </div>
      </Button>
    </Link>
  );
};

export const LogoDark = () => {
  const { t } = useTranslation();
  return (
    <Link to="/">
      <Button className="text-xl text-left normal-case md:flex md:items-center" color="ghost">
        <img src="/favicon_dark.svg" className="size-12 left-1 mr-auto text-left" />
        <div className="flex flex-col ml-1">
          <span className={"self-start"}>{t("string.company_name_short")}</span>
          <span className="text-sm font-light block -mt-1">{t("string.company_slogan")}</span>
        </div>
      </Button>
    </Link>
  );
};
