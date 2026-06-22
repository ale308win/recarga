/**
 * Content section card with gold title bar and dark body.
 * Primary layout primitive for all form and result panels across the @ale308win ecosystem.
 */
export interface SectionProps {
  /** Emoji icon prefix — pick from the brand icon map in readme.md */
  icon?: string;
  /** Section title — rendered uppercase in Oswald */
  title: string;
  /** Body content */
  children?: React.ReactNode;
  /** Extra element placed in the right of the title bar (badge, control, etc.) */
  extra?: React.ReactNode;
  /** Outer wrapper style overrides */
  style?: React.CSSProperties;
}
