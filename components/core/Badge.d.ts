/**
 * 5-grade performance badge used in SD/ES/Energy result tables.
 * Maps directly to the @ale308win ballistic grading scale.
 * @startingPoint section="Components" subtitle="Badge — 5-grade green→red performance scale" viewport="700x100"
 */
export interface BadgeProps {
  /** Performance grade — maps to colour automatically */
  grade?: 'excellent' | 'good' | 'acceptable' | 'poor' | 'critical';
  /** Label override; defaults to PT-BR grade name (Excelente / Bom / …) */
  children?: React.ReactNode;
  /** Extra inline style overrides */
  style?: React.CSSProperties;
}
