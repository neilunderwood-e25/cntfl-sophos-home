"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import Container from "@/components/ui/Container";
import type { BannerSection } from "../types";

function isInternalUrl(url: string) {
  return url.startsWith("/") && !url.startsWith("//");
}

/** Internal destinations use next/link; external URLs and hashes stay native anchors. */
function CtaLink({
  url,
  openInNewTab,
  className,
  children,
}: {
  url: string;
  openInNewTab?: boolean | null;
  className?: string;
  children: ReactNode;
}) {
  const target = openInNewTab ? "_blank" : undefined;
  const rel = openInNewTab ? "noopener noreferrer" : undefined;

  if (isInternalUrl(url)) {
    return (
      <Link href={url} className={className} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <a href={url} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
}

export function BannerWithPricingCard({ section }: { section: BannerSection }) {
  const { heading, description, pricingCard } = section;
  const plans = pricingCard?.plans ?? [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPlan = plans[selectedIndex] ?? plans[0];
  const secondaryButton = pricingCard?.secondaryButton;
  const buyUrl = selectedPlan?.buyUrl;

  return (
    <section
      data-section="banner-with-pricing-card"
      className="bg-home-sophos-com-science-blue pt-xl pb-[22.5px] lg:py-3xl"
    >
      <Container className="flex flex-col gap-xl lg:flex-row lg:items-center lg:gap-5xl">
        <div className="flex min-w-0 flex-col gap-2xs text-white lg:w-[57.81%]">
          {heading ? (
            <h1 className="font-lexend-exa text-[35px] leading-[38.5px] font-light tracking-[0px] lg:web-title-1">
              {heading}
            </h1>
          ) : null}
          {description ? (
            <p className="web-title-4 lg:web-title-3">{description}</p>
          ) : null}
        </div>

        {pricingCard ? (
          <div className="flex w-full shrink-0 flex-col items-center overflow-hidden rounded-xs lg:w-[375px]">
            {pricingCard.badge ? (
              <p className="w-max max-w-[calc(100%+100px)] shrink-0 bg-cyan px-l py-3xs text-center text-white web-title-6">
                {pricingCard.badge}
              </p>
            ) : null}

            <div className="flex w-full flex-col items-center gap-[24px] bg-blue-50 px-l py-[24px]">
              <div className="flex w-full flex-col gap-[24px]">
                <div className="flex w-full flex-col gap-[24px]">
                  <div className="flex w-full flex-col items-center gap-4xs">
                    {pricingCard.productName ? (
                      <h2 className="w-full text-center text-home-sophos-com-science-blue web-title-4">
                        {pricingCard.productName}
                      </h2>
                    ) : null}
                    {selectedPlan?.price ? (
                      <p className="text-gray-700 web-title-1">
                        {selectedPlan.price}
                      </p>
                    ) : null}
                    {selectedPlan?.originalPrice ||
                    selectedPlan?.savingsLabel ? (
                      <p className="flex flex-wrap items-center justify-center gap-5xs">
                        {selectedPlan.originalPrice ? (
                          <span className="text-gray-300 web-title-6">
                            {selectedPlan.originalPrice}
                          </span>
                        ) : null}
                        {selectedPlan.savingsLabel ? (
                          <span className="text-home-sophos-com-science-blue web-title-6">
                            {selectedPlan.savingsLabel}
                          </span>
                        ) : null}
                      </p>
                    ) : null}
                  </div>

                  {plans.length > 0 ? (
                    <div className="relative w-full">
                      <select
                        aria-label={pricingCard.productName ?? undefined}
                        value={selectedIndex}
                        onChange={(event) =>
                          setSelectedIndex(Number(event.target.value))
                        }
                        className="block w-full cursor-pointer appearance-none rounded-xs border border-gray-200 bg-white py-[9px] pr-[44px] pl-[14px] text-center text-gray-300 web-body-large [text-align-last:center]"
                      >
                        {plans.map((plan, index) => (
                          <option key={plan.sys?.id ?? index} value={index}>
                            {plan.label ?? plan.price}
                          </option>
                        ))}
                      </select>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute top-[8.5px] right-[10px] flex h-[28px] w-[29px] items-center justify-center bg-white"
                      >
                        <span className="block h-[7px] w-[10px] bg-home-sophos-com-nevada [mask-image:var(--icon-sprite)] [mask-position:-39px_0] [mask-repeat:no-repeat] [mask-size:var(--icon-sprite-size)] [-webkit-mask-image:var(--icon-sprite)] [-webkit-mask-position:-39px_0] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:var(--icon-sprite-size)]" />
                      </span>
                    </div>
                  ) : null}
                </div>

                {pricingCard.buyButtonLabel && buyUrl ? (
                  <div className="btn btn--primary w-full">
                    <CtaLink
                      url={buyUrl}
                      className="btn__link h-[36px]! w-full text-[16px]!"
                    >
                      <span className="label">
                        {pricingCard.buyButtonLabel}
                      </span>
                      <span className="btn__icon" aria-hidden="true" />
                    </CtaLink>
                  </div>
                ) : null}
              </div>

              {pricingCard.disclaimer ||
              (secondaryButton?.label && secondaryButton.url) ? (
                <div className="flex w-full flex-col items-center gap-[12px]">
                  {pricingCard.disclaimer ? (
                    <p className="w-full text-center whitespace-pre-line text-gray-300 web-body-small">
                      {pricingCard.disclaimer}
                    </p>
                  ) : null}
                  {secondaryButton?.label && secondaryButton.url ? (
                    <div className="btn btn--link">
                      <CtaLink
                        url={secondaryButton.url}
                        openInNewTab={secondaryButton.openInNewTab}
                        className="btn__link"
                      >
                        <span className="label">{secondaryButton.label}</span>
                        <span className="btn__icon" aria-hidden="true" />
                      </CtaLink>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
