"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AboutPage() {
  const aboutUs = [
    {
      description: "Who we are",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit suscipit asperiores ullam itaque similique delectus esse nobis eaque adipisci.",
    },
    {
      description: "What we do",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit suscipit asperiores ullam itaque similique delectus esse nobis eaque adipisci.",
    },
    {
      description: "What we stand for",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit suscipit asperiores ullam itaque similique delectus esse nobis eaque adipisci.",
    },
    {
      description: "Customers testimony",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit suscipit asperiores ullam itaque similique delectus esse nobis eaque adipisci.",
    },
    {
      description: "Design proceedures",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit suscipit asperiores ullam itaque similique delectus esse nobis eaque adipisci.",
    },
  ];
  return (
    <div className="container max-w-4xl mx-auto flex flex-col justify-center items-center gap-6 px-4 lg:px-0">
      <h4 className="text-xl font-semibold text-center mt-4">About Us</h4>
      <Accordion
        variant="shadow"
        defaultExpandedKeys={["1"]}
        // className="shadow-md"
      >
        {aboutUs.map((about, index) => (
          <AccordionItem
            aria-label={about.description}
            key={index.toString()}
            title={<h4 className="font-medium">{about.description}</h4>}
          >
            {about.text}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
