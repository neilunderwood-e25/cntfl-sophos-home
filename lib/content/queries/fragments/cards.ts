import { gql } from "@/lib/cms/graphql";

/**
 * One fragment for the Cards family, including its variant selector.
 * Keep the union of fields consumed by the family's built variants.
 *
 * `cards` and `buttons` are short lists, so they stay inline with small `limit:`s.
 */
export const CARDS_FRAGMENT = gql`
  fragment CardsFields on Cards {
    sys {
      id
    }
    frontendComponent
    heading
    description
    cardsCollection(limit: 12) {
      items {
        sys {
          id
        }
        icon {
          url
          title
          description
          width
          height
        }
        heading
        body
      }
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
  }
`;

export const CARDS_FRAGMENTS = [CARDS_FRAGMENT];
