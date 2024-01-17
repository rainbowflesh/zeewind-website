import { Footer } from "react-daisyui";
export const FooterBar = () => {
  return (
    <Footer className="p-10 bg-neutral text-neutral-content">
      <div>
        <Footer.Title>Services</Footer.Title>
        <a className="link link-hover">Products</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Supports</a>
      </div>
      <div>
        <Footer.Title>Company</Footer.Title>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <Footer.Title>Legal</Footer.Title>
        <a className="link link-hover">Terms of use</a>
      </div>
    </Footer>
  );
};
