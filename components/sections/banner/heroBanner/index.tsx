import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import type { BannerButton, BannerSection } from "../types";

type ButtonAppearance = "purchase" | "secondary";

/** Existing styleguide appearances; the design's white CTA uses the purchase button geometry. */
const BUTTON_CLASSES: Record<
  ButtonAppearance,
  { wrapper: string; link: string }
> = {
  purchase: { wrapper: "btn btn--purchase", link: "btn__link" },
  secondary: {
    wrapper: "btn btn--secondary",
    link: "btn__link h-[36px]! px-[30px]! py-[10px]!",
  },
};

function isInternalUrl(url: string) {
  return url.startsWith("/") && !url.startsWith("//");
}

function BannerLink({
  button,
  appearance,
}: {
  button: BannerButton;
  appearance: ButtonAppearance;
}) {
  const { label, url, openInNewTab } = button;
  if (!label || !url) return null;

  const classes = BUTTON_CLASSES[appearance];
  const target = openInNewTab ? "_blank" : undefined;
  const rel = openInNewTab ? "noopener noreferrer" : undefined;
  const content = (
    <>
      <span className="label">{label}</span>
      <span className="btn__icon" aria-hidden="true" />
    </>
  );

  return (
    <div className={classes.wrapper}>
      {isInternalUrl(url) ? (
        <Link href={url} className={classes.link} target={target} rel={rel}>
          {content}
        </Link>
      ) : (
        <a href={url} className={classes.link} target={target} rel={rel}>
          {content}
        </a>
      )}
    </div>
  );
}

export function HeroBanner({ section }: { section: BannerSection }) {
  const { heading, description, image, buttonNote } = section;
  const buttons = (section.buttons ?? []).filter(
    (button) => button?.label && button?.url,
  );
  const lastIndex = buttons.length - 1;
  const imageUrl = image?.url
    ? image.url.startsWith("//")
      ? `https:${image.url}`
      : image.url
    : null;

  return (
    <section
      data-section="hero-banner"
      className="relative isolate overflow-hidden bg-home-sophos-com-science-blue pt-[60px] pb-[95.58px] text-white lg:pt-[30px] lg:pb-[80px]"
    >
      <Container>
        <div className="flex flex-col gap-m lg:flex-row lg:items-stretch lg:gap-0">
          <div className="relative z-10 order-1 lg:order-2 lg:ml-[-5.15625%] lg:w-[42.65625%] lg:shrink-0 lg:pt-[46px]">
            <div className="flex flex-col gap-m">
              {(heading || description) && (
                <div className="flex flex-col gap-2xs text-center lg:text-left">
                  {heading && (
                    <h1 className="font-lexend-exa text-[35px] leading-[38.5px] font-light tracking-[0px] text-white lg:text-size-54 lg:leading-[59.4px] lg:tracking-[-5.4px]">
                      {heading}
                    </h1>
                  )}
                  {description && (
                    <p className="web-body-large text-white">{description}</p>
                  )}
                </div>
              )}
              {(buttons.length > 0 || buttonNote) && (
                <div className="flex flex-col items-center gap-2xs lg:flex-row lg:items-start">
                  {buttons.map((button, index) => {
                    const link = (
                      <BannerLink
                        key={button.sys?.id ?? index}
                        button={button}
                        appearance={index === 0 ? "purchase" : "secondary"}
                      />
                    );
                    if (index !== lastIndex || !buttonNote) return link;
                    return (
                      <div
                        key={button.sys?.id ?? index}
                        className="flex flex-col items-center gap-4xs"
                      >
                        {link}
                        <p className="web-body-medium text-center text-white">
                          {buttonNote}
                        </p>
                      </div>
                    );
                  })}
                  {buttons.length === 0 && buttonNote && (
                    <p className="web-body-medium text-center text-white">
                      {buttonNote}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          {imageUrl && (
            <div className="relative order-2 aspect-[350/269.42] w-full lg:order-1 lg:aspect-[800/615] lg:w-[62.5%] lg:shrink-0 lg:self-start">
              <span
                aria-hidden="true"
                className="absolute top-[64.21%] bottom-[-95.58px] left-1/2 -z-10 w-screen -translate-x-1/2 bg-white lg:hidden"
              />
              <Image
                src={imageUrl}
                alt={image?.description ?? image?.title ?? ""}
                fill
                sizes="(min-width: 992px) 62.5vw, 100vw"
                className="object-fill"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
