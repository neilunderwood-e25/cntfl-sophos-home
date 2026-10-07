import { BannerFrontendComponent, CardsFrontendComponent, HeroFrontendComponent, SectionTypename } from "./enum";

export type HeroFrontendComponent =
  (typeof HeroFrontendComponent)[keyof typeof HeroFrontendComponent];

export type BannerFrontendComponent =
  (typeof BannerFrontendComponent)[keyof typeof BannerFrontendComponent];

export type CardsFrontendComponent =
  (typeof CardsFrontendComponent)[keyof typeof CardsFrontendComponent];

export type SectionTypename =
  (typeof SectionTypename)[keyof typeof SectionTypename];
