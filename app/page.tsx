import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main>
      <div
        className="flex flex-col items-center justify-center container mx-auto p-4 space-y-8"
        id="Showcase"
      >
        <div className="max-w-md">
          <h4 className="text-4xl lg:text-6xl font-semibold text-center">
            Welcome
          </h4>
          <h4 className="text-xl lg:text-2xl font-medium text-center">
            NextUI Demo
          </h4>
        </div>
        <p className="text-base text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam et a
          recusandae. Veritatis illum ex reiciendis animi. Eos, illo amet?
        </p>
        <Button variant="solid" color="primary" className="max-w-lg  w-full">
          Learn More
        </Button>
      </div>

      <div className="h-screen" />
    </main>
  );
}
