import { Button, Carousel, Hero } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Hero className="dot-background dark:dot-background-dark">
      <Hero.Content className="text-center flex flex-col sm:flex-row">
        <Carousel
          className="rounded-box w-full sm:w-2/3 max-w-10/12 snap-center place-items-center"
          display="sequential"
          snap="center"
          buttonStyle={(value) => {
            return (
              <Button className="backdrop-blur-sm hover:backdrop-blur-lg" color="neutral" shape={"circle"}>
                {value}
              </Button>
            );
          }}
        >
          <Carousel.Item alt="product showcase front" src="/images/rce1u/preview1.png" />
          <Carousel.Item alt="product showcase back" src="images/rce1u/back.jpg" />
          <Carousel.Item alt="product showcase front" src="images/rce1u/front.jpg" />
          <Carousel.Item alt="product showcase back" src="images/rce1u/back1.jpg" />
        </Carousel>
        <div className="w-full sm:w-1/3">
          <article className="text-wrap">
            <h1 className="text-5xl font-bold">{t("string.greeting")}</h1>
            <p
              id="company-introduce"
              className="company-introduce py-6 bg-slate-50 dark:bg-base-200 rounded-box mt-2 mb-2 text-balance"
            >
              {t("string.company_introduce")}
            </p>
          </article>
          <div>
            <Button className="mr-8">
              <Link to="/learnmore">{t("string.learn_more")}</Link>
            </Button>
            <Button color="neutral">
              <Link to="/contact">{t("string.buy_now")}</Link>
            </Button>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};
