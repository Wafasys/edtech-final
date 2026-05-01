---
name: Admission LMS
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#444652'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#747683'
  outline-variant: '#c4c6d4'
  surface-tint: '#3959b0'
  primary: '#001d59'
  on-primary: '#ffffff'
  primary-container: '#003087'
  on-primary-container: '#7f9df8'
  inverse-primary: '#b4c5ff'
  secondary: '#006e26'
  on-secondary: '#ffffff'
  secondary-container: '#99f89e'
  on-secondary-container: '#0e742c'
  tertiary: '#4d0009'
  on-tertiary: '#ffffff'
  tertiary-container: '#760013'
  on-tertiary-container: '#ff7675'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#1c4197'
  secondary-fixed: '#99f89e'
  secondary-fixed-dim: '#7edb85'
  on-secondary-fixed: '#002106'
  on-secondary-fixed-variant: '#00531b'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#410006'
  on-tertiary-fixed-variant: '#93001a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  question-text:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 20px
  gutter: 16px
  tap-target-min: 48px
  card-padding: 24px
---

## Brand & Style

The design system is engineered for high-stakes academic environments, specifically tailored for the Bangladeshi admission coaching sector. The brand personality is authoritative, elite, and intensely focused, mirroring the seriousness of university entrance exams. It eschews "edutainment" tropes like badges or social feeds in favor of a distraction-free, premium interface that respects the student's time and cognitive load.

The visual style follows a **Corporate/Modern** aesthetic with heavy **Minimalist** influences. It prioritizes clarity and functional hierarchy, ensuring that the interface never competes with the educational content. The UI evokes a sense of reliability and institutional trust, positioning the platform as a professional tool for success rather than a casual learning app.

## Colors

This design system utilizes a high-contrast palette optimized for mobile readability under various lighting conditions. 

- **Primary (Deep Blue):** Used for primary actions, navigation headers, and branding elements to instill a sense of institutional stability.
- **Success (Green):** Reserved strictly for correct answers, score improvements, and completed modules.
- **Error (Red):** Used for incorrect answers in practice exams and critical alerts.
- **Neutrals:** A sophisticated range of cool grays. `#F8F9FA` serves as the primary background for light mode to reduce eye strain, while `#E9ECEF` provides subtle distinction for card containers and dividers.

In **Dark Mode**, the palette shifts to a deep charcoal background (`#0B0E14`) with elevated surfaces using a slightly lighter gray (`#161B22`) to maintain depth without losing the premium feel.

## Typography

The design system relies on **Inter** for its exceptional legibility and systematic structure. The type scale is intentionally generous to accommodate the intensive reading required for coaching materials and exam questions.

- **Headings:** Bold and oversized to provide clear section anchoring.
- **Exam Questions:** Set at a specific `question-text` level (20px) to ensure they are the most prominent element on the mobile screen during practice sessions.
- **Readability:** Paragraphs utilize a 1.6 line-height to prevent "line-skipping" during fast-paced reading. 
- **Hierarchy:** Contrast is achieved through weight (Regular vs. Bold) rather than excessive color variation.

## Layout & Spacing

The design system employs a **mobile-first fluid layout** built on an 8px base grid. 

- **Safe Zones:** A standard 20px margin is maintained on the left and right edges of the screen to ensure content does not feel cramped on edge-to-edge mobile displays.
- **Touch Targets:** All interactive elements (buttons, choice chips, navigation links) adhere to a minimum height of 48px to accommodate ergonomic thumb-tap movements.
- **Vertical Rhythm:** Generous vertical spacing (24px - 32px) is used between content blocks to facilitate a focused, one-item-at-a-time reading experience.
- **Exam Layout:** In testing modes, the UI transitions to a "focus mode" where the header is minimized and the question-to-options ratio takes up 90% of the viewport.

## Elevation & Depth

To maintain a premium and minimal feel, the design system avoids heavy shadows. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Depth is communicated by shifting background colors (e.g., a white card on a `#F8F9FA` background).
- **Elevation levels:**
  - **Level 0 (Background):** Base canvas color.
  - **Level 1 (Cards):** 1px border using `#E9ECEF` or a very soft, highly diffused 10% opacity shadow (0px 4px 20px).
  - **Level 2 (Modals/Overlays):** A more pronounced 15% opacity shadow to separate critical interaction layers from the content.
- **Dark Mode Depth:** In dark mode, depth is strictly tonal; higher-level elements use lighter shades of gray rather than shadows.

## Shapes

The shape language is **Soft (Level 1)**. 

Buttons and input fields use a 0.25rem (4px) corner radius. This subtle rounding maintains the "Professional/Serious" vibe, appearing more disciplined than circular "pill" shapes while being more approachable than hard 90-degree angles. Large containers and cards may use `rounded-lg` (8px) to provide a gentle containerized feel for complex data sets like result breakdowns or performance graphs.

## Components

- **Buttons:** Primary buttons are solid Deep Blue with white text. Secondary buttons use a 1px Deep Blue border. There is no hover state on mobile, but "active" states must provide immediate visual feedback via a slight opacity shift.
- **Progress Circles:** Clean, 4px-stroke weight circles. Success Green indicates completion or correct percentages; Primary Blue indicates current progress. No glows or gradients.
- **Choice Chips (Exam Options):** Large, full-width blocks for exam answers. When selected, the background shifts to a light tint of Primary Blue with a 2px solid border.
- **Cards:** Minimal padding (24px), no unnecessary icons. Used to group related information like "Recent Exams" or "Subject Chapters."
- **Input Fields:** Outlined style with 1px gray borders. Labels are always visible above the field (never floating) to maintain clarity for Bangladeshi students who may be less familiar with complex UI patterns.
- **Icons:** Minimal, stroke-based (2px) icons. Used sparingly only to aid navigation (e.g., Home, Profile, Exams).
- **Result Summaries:** High-contrast typography showing "Correct," "Incorrect," and "Skipped" with immediate color-coding (Green/Red/Gray).