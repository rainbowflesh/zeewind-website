import { Button, Menu, Navbar } from "react-daisyui";
import { useTranslation } from "react-i18next";

export const NavigationBar = () => {
  const { t } = useTranslation();
  return (
    <Navbar className="line-background my-32 px-2 font-sans bg-base-300 rounded-box">
      <Navbar.Start className="px-2 lg:flex-none">
        <Button tag="a" className="text-xl normal-case" color="ghost" onClick={() => {}}>
          <img src="favicon.svg" className="size-8" />
          <span className="text-lg font-bold">{t("titles.company_name_short")} - 先进空域安全解决方案</span>
        </Button>
      </Navbar.Start>
      <Navbar.Center className="flex-none">
        <Menu horizontal={true} className="px-1">
          <Menu.Item>
            <details>
              <summary>SCOUT</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </Menu.Item>
          <Menu.Item>
            <details>
              <summary>DRONE</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </Menu.Item>
        </Menu>
      </Navbar.Center>
      <Navbar.End>
        <Button shape="square" color="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>{" "}
          <Dropdown {...args} dataTheme={dataTheme}>
            <Dropdown.Toggle className="btn btn-ghost rounded-btn" button={false}>
              Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-52 mt-4">
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Button>
      </Navbar.End>
    </Navbar>
  );
};
