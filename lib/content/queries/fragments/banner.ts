import { gql } from "@/lib/cms/graphql";

/**
 * One fragment for the Banner family, including its variant selector.
 * Keep the union of fields consumed by the family's built variants.
 *
 * `buttons` is a short CTA list, so it stays inline with a small `limit:`.
 */
export const BANNER_FRAGMENT = gql`
  fragment BannerFields on Banner {
    sys {
      id
    }
    frontendComponent
    heading
    description
    image {
      url
      title
      description
      width
      height
    }
    buttonsCollection(limit: 3) {
      items {
        sys {
          id
        }
        label
        url
        openInNewTab
      }
    }
    buttonNote
  }
`;

export const BANNER_FRAGMENTS = [BANNER_FRAGMENT];
