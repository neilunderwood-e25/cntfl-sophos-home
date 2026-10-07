import { CardsFrontendComponent } from "@/lib/content/enum";
import type { Section } from "@/types/contentful";
import { CardWithSteps } from "./cardWithSteps";
import type { CardsSection } from "./types";

/** One registry entry per family; exact CMS values select sibling variants. */
export function Cards({ section }: { section: Section }) {
  const data = section as CardsSection;

  switch (section.frontendComponent) {
    case CardsFrontendComponent.CardWithSteps:
      return <CardWithSteps section={data} />;
    default:
      return null;
  }
}
