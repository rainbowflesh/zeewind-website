import { Card, Divider, Dropdown, Hero, Tooltip } from "react-daisyui";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

export const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <Hero className="dot-background">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mt-2 mb-2">{t("string.contact_us")}</h1>
          <div className="flex flex-col w-full border-opacity-50 ">
            <Card className="grid rounded-box place-items-center  dark:bg-base-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <p className="font-bold">{t("string.email")}:</p>
                  <a className="text-gray-400" href={"mailto:" + t("string.email_value")}>
                    {t("string.email_value")}
                  </a>
                </div>
                <div className="mb-4">
                  <p className="font-bold">{t("string.tel")}:</p>
                  <p className="text-gray-400">{t("string.tel_value")}</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">{t("string.wechat")}:</p>
                  <p className="text-gray-400">
                    {t("string.wechat_value")}
                    <Dropdown horizontal="right" vertical="top">
                      <Dropdown.Toggle button={false} className="btn btn-circle btn-ghost btn-xs text-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="card compact w-16 !p-0 shadow bg-base-100 dark:bg-base-300 rounded-box">
                        <img src="/public/images/Untitled.png" className="size-16" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </p>
                </div>
              </div>
            </Card>
            <Divider className="dark:text-white ">Or</Divider>
            <Card className="grid rounded-box place-items-center">
              <h1 className="text-3xl font-bold mt-2 mb-2">{t("string.leave_ur_contact")}</h1>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};
