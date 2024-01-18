import { useState } from "react";
import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const [isProductMenuOpen, setOpenProductMenu] = useState(false);
  const [isSupportMenuOpen, setOpenSupportMenu] = useState(false);

  let productMenuTimer: number = 0;
  let supportMenuTimer: number = 0;

  const handleProductMenuMouseEnter = () => {
    clearTimeout(productMenuTimer);
    setOpenProductMenu(true);
  };

  const handleProductMenuMouseLeave = () => {
    productMenuTimer = window.setTimeout(() => {
      setOpenProductMenu(false);
    }, 600);
  };

  const handleSupportMenuMouseEnter = () => {
    clearTimeout(supportMenuTimer);
    setOpenSupportMenu(true);
  };

  const handleSupportMenuMouseLeave = () => {
    supportMenuTimer = window.setTimeout(() => {
      setOpenSupportMenu(false);
    }, 600);
  };

  return (
    <Navbar className="line-background px-2 font-sans bg-base-300 rounded-box mx-auto max-w-screen-xl sm:px-6 lg:px-8 h-4">
      <Navbar.Start className="flex flex-wrap md:flex-wrap-reverse truncate">
        <Button tag="a" className="text-xl normal-case md:flex md:items-center" color="ghost" href="/">
          <img src="favicon.svg" className="size-8" />
          <div>
            <span className="text-lg text-left font-bold ml-1 -mt-1 flex">{t("title.company_name_short")}</span>
            <span className="text-sm text-left font-extralight ml-1 -mt-2 block">{t("title.products_name_full")}</span>
          </div>
        </Button>
      </Navbar.Start>
      <Navbar.Center className="flex flex-wrap md:flex-wrap-reverse h-16 items-center justify-between">
        <div className="hidden md:block" aria-label="Global">
          <Menu horizontal={true}>
            <Menu.Item
              className="flex items-center text-sm relative"
              onMouseEnter={handleProductMenuMouseEnter}
              onMouseLeave={handleProductMenuMouseLeave}
            >
              <details open={isProductMenuOpen}>
                <summary>{t("title.products")}</summary>
                <ul>
                  <li>
                    {t("products.recon_module")}
                    <ul>
                      <li>
                        <Link to={"arm01"}>{t("products.arm01")}</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t("products.drone")}{" "}
                    <ul>
                      <li>
                        <a>{t("products.test")}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </details>
            </Menu.Item>
          </Menu>
          <Menu horizontal={true}>
            <Menu.Item
              className="relative"
              onMouseEnter={handleSupportMenuMouseEnter}
              onMouseLeave={handleSupportMenuMouseLeave}
            >
              <details open={isSupportMenuOpen}>
                <summary>{t("title.supports")}</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                </ul>
              </details>
            </Menu.Item>
          </Menu>
        </div>
      </Navbar.Center>
      <Navbar.End className="">
        <Dropdown className="flex items-center gap-4">
          <Dropdown.Toggle button={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu className="mt-48 relative -ml-24">
            <Dropdown.Item
              onClick={() => {
                i18n.changeLanguage("en_US");
              }}
            >
              English
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                i18n.changeLanguage("ch-ZH");
              }}
            >
              中文
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                i18n.changeLanguage("ru_RU");
              }}
            >
              Русский
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                i18n.changeLanguage("jp_JP");
              }}
            >
              日本語
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="flex items-center gap-4">
          <div className="block md:hidden">
            <Dropdown.Toggle className="btn btn-ghost rounded-btn" button={false}>
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-52 mt-2 -ml-32">
              <Dropdown.Item>Products</Dropdown.Item>
              <Dropdown.Item>Services</Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </Dropdown>
      </Navbar.End>
    </Navbar>
  );
};
