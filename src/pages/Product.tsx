import { Hero, Stack } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ProductIndex = () => {
  const { t } = useTranslation();
  return (
    <Hero className="dot-background">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{t("string.product_catalog")}</h1>
          <div className="product-list flex flex-wrap">
            <div className="product-list-item rce1u">
              <p className="py-6">{t("products.rce1u_describe_short")}</p>
              <Link to="/products/rce1u">
                <Stack className="group">
                  <img
                    src="/images/rce1u/front2.jpg"
                    alt="Image 1"
                    className="rounded transition-all duration-400 ease-in-out hover:-translate-y-1 delay-200"
                  />
                  <img
                    src="/images/rce1u/front1.jpg"
                    alt="Image 2"
                    className="rounded transition-all ease-in group-hover:!z-10 group-hover:opacity-100 duration-200"
                  />
                </Stack>
              </Link>
            </div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};
