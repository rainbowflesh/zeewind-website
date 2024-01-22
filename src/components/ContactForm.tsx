import { Button, Textarea } from "react-daisyui";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <div className="isolate bg-white dark:bg-base-300 px-6 py-8 lg:px-8">
      <form action="https://formspree.io/f/moqgjqll" method="POST">
        <div className="grid grid-cols-2 gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">{t("string.first_name")}</span>
            </div>
            <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
          </label>
          <label>
            <div className="label">
              <span className="label-text">{t("string.last_name")}</span>
            </div>
            <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
          </label>
        </div>
        <label>
          <div className="label">
            <span className="label-text">{t("string.company")}</span>
          </div>
          <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
        </label>
        <label>
          <div className="label">
            <span className="label-text">{t("string.email")}</span>
          </div>
          <input
            type="email"
            name="email"
            className="textarea-primary input text-xs input-bordered w-full max-w-xs"
            placeholder={t("string.required")}
          />
        </label>
        <label>
          <div className="label">
            <span className="label-text">{t("string.phone")}</span>
          </div>
          <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
        </label>
        <label>
          <div className="label">
            <span className="label-text">{t("string.ur_msg")}</span>
          </div>
          <Textarea
            className="textarea-primary textarea textarea-bordered textarea-lg text-xs w-full max-w-xs"
            placeholder={t("string.ur_msg_placeholder")}
            name="message"
          />
        </label>
        <br />
        <Button className="mt-2" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
}
