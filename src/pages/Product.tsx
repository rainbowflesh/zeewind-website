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
                <Stack>
                  <img src="images/rce1u/front2.jpg" alt="Image 1" className="rounded ml-1" />
                  <img src="images/rce1u/front1.jpg" alt="Image 2" className="rounded" />
                </Stack>
              </Link>
            </div>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};
