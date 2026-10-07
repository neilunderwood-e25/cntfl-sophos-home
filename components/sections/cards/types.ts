import type { BannerButton } from "@/components/sections/banner/types";
import type { SectionTypename } from "@/lib/content/enum";
import type { CardsFrontendComponent } from "@/lib/content/types";
import type { CfAsset, Sys } from "@/types/contentful";

/** Contentful `Card` as queried in the Cards fragment. */
export type CardsCard = {
  sys?: Sys;
  icon?: CfAsset | null;
  heading?: string | null;
  body?: string | null;
};

/** Normalized data shared by the Cards family's visual variants. */
export type CardsSection = {
  __typename: typeof SectionTypename.Cards;
  frontendComponent?: CardsFrontendComponent | null;
  sys?: Sys;
  heading?: string | null;
  description?: string | null;
  cards?: CardsCard[] | null;
  buttons?: BannerButton[] | null;
};
