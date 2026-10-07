import type { SectionTypename } from "@/lib/content/enum";
import type { BannerFrontendComponent } from "@/lib/content/types";
import type { CfAsset, Sys } from "@/types/contentful";

/** Contentful `Button` as queried in the Banner fragment. */
export type BannerButton = {
  sys?: Sys;
  label?: string | null;
  url?: string | null;
  openInNewTab?: boolean | null;
};

/** Normalized data shared by the Banner family's visual variants. */
export type BannerSection = {
  __typename: typeof SectionTypename.Banner;
  frontendComponent?: BannerFrontendComponent | null;
  sys?: Sys;
  heading?: string | null;
  description?: string | null;
  image?: CfAsset | null;
  buttons?: BannerButton[] | null;
  buttonNote?: string | null;
};
