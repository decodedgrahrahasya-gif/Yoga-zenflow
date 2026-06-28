---
version: 1.0.0
name: Konfirmity Security Compliance
description: A visual language for high-trust infosec platforms focused on clarity, auditability, and structured compliance data.
colors:
  background: "#F9FAFB"
  surface: "#FFFFFF"
  primary: "#10B981"
  primary-light: "#ECFDF5"
  text-main: "#111827"
  text-muted: "#6B7280"
  border: "#E5E7EB"
  amber-accent: "#F59E0B"
  amber-bg: "#FFFBEB"
  critical: "#EF4444"
typography:
  fontFamily: "'Inter', sans-serif"
  h1:
    fontSize: "1.875rem"
    fontWeight: "600"
    letterSpacing: "-0.025em"
  body:
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.25rem"
  nav:
    fontSize: "1rem"
    fontWeight: "500"
  label:
    fontSize: "0.75rem"
    fontWeight: "600"
    textTransform: "uppercase"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  sidebar-w: "256px"
  right-panel-w: "384px"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "999px"
components:
  navigation:
    style: "Vertical sidebar with 0.5px spacing between items"
    activeState: "emerald-700 on emerald-50 background"
  cards:
    style: "Bordered white surfaces with hover shadow elevation"
    padding: "16px"
  stats:
    style: "Tonal backgrounds with heavy weight tracking-tight numeric values"
  table:
    style: "Row-based divide with group-hover opacity transitions for action buttons"
  floating-bar:
    style: "Pill-shaped fixed bottom center with backdrop-blur-sm"
    elevation: "shadow-lg"
motion:
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
  hover-scale: "scale-110"
---
## Overview
The Konfirmity visual system is engineered for security and compliance workflows. It prioritizes data density without sacrificing readability, using a restricted emerald and gray palette to signal stability and professional trust.

## Colors
The palette is grounded in Neutral Grays (50-900) for UI structural elements. Emerald-500 is used exclusively for success states, active document status, and brand presence. Amber and Red are utilized sparingly for "Waiting for Approval" and "Critical/Overdue" tasks respectively to manage user attention.

## Typography
Built on the 'Inter' typeface. The system uses a hierarchy that favors medium-to-semibold weights for navigation and headings to maintain legibility against high-density data tables. Uppercase tracking is applied to small labels for semantic categorization.

## Spacing
A consistent 4px baseline grid is used. Page padding is generous at 32px (p-8) to balance the high-density components. Sidebar and panel widths are fixed to maintain predictable viewport layouts for tabular data.

## Layout
The architecture follows a Three-Column Grid: Left Navigation (Fixed Width), Main Content (Fluid), and Right Context/Task Panel (Fixed Width). Z-index layering is used for the Floating Action Bar (z-50) which sits centered at the bottom of the viewport.

## Elevation & Depth
Depth is primarily communicated through subtle borders (1px) rather than heavy shadows. Shadows are reserved for floating elements (Floating Action Bar) and interactive card states (hover:shadow-md) to indicate clickability.

## Shapes
Rounded corners are tiered: 8px (lg) for standard inputs and buttons, 12px (xl) for container cards, and 'Full' for status chips and the primary floating action bar. Avatars use 100% circular clipping.

## Components
- **Status Chips**: Pill-shaped with a 1.5px dot indicator (Status + Color dot).
- **Task Cards**: Bordered containers with condensed header text and bottom-aligned metadata.
- **Data Table**: Header-first layout with light gray dividers (divide-gray-100) and hidden actions that appear on row hover.
- **Search Bar**: Integrated filter-tag UI with emerald focus rings and 20% opacity glow.

## Motion
Interactions utilize a 200ms ease-in-out transition. Key motions include the group-hover opacity for table actions and the scale-110 transformation on AI-powered icons to draw focus to high-value features.

## Do's and Don'ts
- **Do**: Use emerald for positive or active compliance statuses.
- **Do**: Keep action buttons for tables hidden until the row is focused/hovered.
- **Don't**: Use emerald for destructive actions; reserve Red for critical tasks or overdue items.
- **Don't**: Overuse shadows; prefer borders for defining structural areas.

## Accessibility
Selection states use high-contrast emerald-100/900 combinations. Input fields must maintain a visible 2px focus ring when active. Navigation items use 1.5pt stroke weights on icons to ensure clear recognition at small sizes.