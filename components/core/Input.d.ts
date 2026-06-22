/**
 * Form field — text, number, or select — with uppercase Rajdhani label.
 * Covers all data-entry surfaces across Cronógrafo, Custo de Recarga, and Hub.
 */
export interface InputProps {
  /** Field label — rendered uppercase in Rajdhani */
  label?: string;
  /** Controlled value */
  value?: string | number;
  /** Change handler — receives raw string from the input */
  onChange?: (value: string) => void;
  /** Input type (ignored when options is provided — renders a <select> instead) */
  type?: 'text' | 'number' | 'email' | 'password' | 'date';
  /** Placeholder text */
  placeholder?: string;
  /** Step attribute for numeric inputs */
  step?: string | number;
  /** Unit label appended after the field (e.g. "fps", "gr", "R$") */
  unit?: string;
  /** Validation error message shown below the field */
  error?: string;
  /** When provided, renders a <select> with these options */
  options?: Array<string | { value: string; label: string }>;
}
