import { BannerFrontendComponent } from "@/lib/content/enum";
import type { Section } from "@/types/contentful";
import { BannerWithPricingCard } from "./bannerWithPricingCard";
import { HeroBanner } from "./heroBanner";
import type { BannerSection } from "./types";

/** One registry entry per family; exact CMS values select sibling variants. */
export function Banner({ section }: { section: Section }) {
  const data = section as BannerSection;

  switch (section.frontendComponent) {
    case BannerFrontendComponent.HeroBanner:
      return <HeroBanner section={data} />;
    case BannerFrontendComponent.BannerWithPricingCard:
      return <BannerWithPricingCard section={data} />;
    default:
      return null;
  }
}
