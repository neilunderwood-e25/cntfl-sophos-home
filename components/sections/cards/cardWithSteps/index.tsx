import Container from "@/components/ui/Container";
import type { CardsSection } from "../types";

/** "Card with steps": centered heading over numbered step cards (stacked on mobile, row from lg). */
export function CardWithSteps({ section }: { section: CardsSection }) {
  const { heading } = section;
  const cards = section.cards ?? [];

  if (!heading && cards.length === 0) return null;

  return (
    <section
      data-section="card-with-steps"
      className="bg-white py-xl lg:py-5xl"
    >
      <Container className="flex flex-col gap-xl">
        {heading ? (
          <h2 className="web-title-2 mx-auto w-full text-center text-[28px] text-home-sophos-com-science-blue lg:max-w-[700px] lg:text-size-44">
            {heading}
          </h2>
        ) : null}

        {cards.length > 0 ? (
          <ol className="mx-auto flex w-full list-none flex-col gap-s p-0 lg:max-w-[1000px] lg:flex-row lg:justify-between">
            {cards.map((card, index) => (
              <li
                key={card.sys?.id ?? index}
                className="flex w-full flex-col gap-2xs bg-white lg:w-[30%]"
              >
                <span
                  aria-hidden="true"
                  className="web-body-large flex size-[40px] shrink-0 items-center justify-center rounded-full bg-home-sophos-com-science-blue text-white"
                >
                  {index + 1}
                </span>
                <div className="flex flex-col gap-[16px]">
                  {card.heading ? (
                    <h3 className="web-title-4 text-[20px] text-gray-400 lg:text-size-24">
                      {card.heading}
                    </h3>
                  ) : null}
                  {card.body ? (
                    <p className="web-body-large text-gray-400">{card.body}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </Container>
    </section>
  );
}
