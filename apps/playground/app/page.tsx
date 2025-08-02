"use client";

import Button from "@rahulrajdahal/notr-button";

export default function page() {
  return (
    <main className="px-[12.5%] py-12">
      <h1 className="text-5xl font-bold">Notr Playground</h1>

      <div className="flex flex-col gap-4 mt-12">
        <h2 className="text-3xl font-semibold">Notr Buttons</h2>

        <div className="flex items-center gap-4">
          <Button>Notr</Button>
          <Button disabled>Notr</Button>

          <Button variant="fill">Notr Filled</Button>
          <Button variant="fill" disabled>
            Notr Filled Disabled
          </Button>

          <Button variant="outline">Notr Outline</Button>
          <Button variant="outline" disabled>
            Notr Outline Disabled
          </Button>

          <Button variant="text">Notr Text</Button>
          <Button variant="text" disabled>
            Notr Text Disabled
          </Button>
        </div>
      </div>
    </main>
  );
}
