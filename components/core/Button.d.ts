/**
 * Primary action button matching the @ale308win dark-gold aesthetic.
 * Use for any form submission, trigger, calculate, export, or delete action.
 * @startingPoint section="Components" subtitle="Button — 6 variants (primary/secondary/ghost/danger/success/info)" viewport="700x180"
 */
export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'info';
  /** Size scale */
  size?: 'sm' | 'md' | 'lg';
  /** Button label and optional icon */
  children?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Disables the button */
  disabled?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Extra inline style overrides */
  style?: React.CSSProperties;
}
