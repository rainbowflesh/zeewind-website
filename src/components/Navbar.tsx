import { Button, Navbar } from "react-daisyui";

export const NavigationBar = () => {
  return (
    <Navbar>
      <Button tag="a" className="text-xl normal-case" color="ghost">
        daisyUI
      </Button>
    </Navbar>
  );
};
