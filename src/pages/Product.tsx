import { Hero, Stack } from "react-daisyui";

export const ProductIndex = () => {
  return (
    <Hero>
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Stack>
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Image 1"
              className="rounded ml-1"
            />
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Image 2"
              className="rounded"
            />
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Image 3"
              className="rounded"
            />
          </Stack>
        </div>
      </Hero.Content>
    </Hero>
  );
};
