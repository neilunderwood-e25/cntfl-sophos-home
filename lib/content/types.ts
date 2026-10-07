import { BannerFrontendComponent, HeroFrontendComponent, SectionTypename } from "./enum";

export type HeroFrontendComponent =
  (typeof HeroFrontendComponent)[keyof typeof HeroFrontendComponent];

export type BannerFrontendComponent =
  (typeof BannerFrontendComponent)[keyof typeof BannerFrontendComponent];

export type SectionTypename =
  (typeof SectionTypename)[keyof typeof SectionTypename];
