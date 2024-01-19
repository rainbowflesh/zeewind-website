import { Button, Carousel, Hero } from "react-daisyui";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Hero className="dot-background">
      <Hero.Content className="text-center">
        <Carousel
          className="rounded-box max-w-10/12 max-h-10/12 min-w-1/5 snap-center place-items-center   "
          display="sequential"
          snap="center"
        >
          <Carousel.Item alt="new-showcase" src="images/placeholder_KalebKendall.jpg" />
          <Carousel.Item alt="new-showcase" src="images/placeholder_KalebKendall.jpg" />
        </Carousel>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{t("string.greeting")}</h1>
          <p className="py-6 bg-slate-50 rounded-box mt-2 mb-2">{t("string.company_introduce")}</p>
          <div>
            <Button className="mr-8">{t("string.learn_more")}</Button>
            <Button color="neutral">{t("string.buy_now")}</Button>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};
