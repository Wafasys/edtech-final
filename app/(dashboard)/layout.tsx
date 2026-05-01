import Script from "next/script";

const TAILWIND_CONFIG = `
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#99f89e",
        "surface-container-high": "#e7e8e9",
        "on-secondary": "#ffffff",
        "surface-container": "#edeeef",
        "on-background": "#191c1d",
        "on-primary-fixed-variant": "#1c4197",
        "inverse-surface": "#2e3132",
        "surface-container-lowest": "#ffffff",
        "on-secondary-container": "#0e742c",
        "on-tertiary-container": "#ff7675",
        "on-error": "#ffffff",
        "inverse-on-surface": "#f0f1f2",
        background: "#f8f9fa",
        "surface-tint": "#3959b0",
        "surface-dim": "#d9dadb",
        "on-tertiary": "#ffffff",
        "surface-bright": "#f8f9fa",
        "tertiary-container": "#760013",
        "on-tertiary-fixed-variant": "#93001a",
        "on-surface-variant": "#444652",
        "on-secondary-fixed": "#002106",
        error: "#ba1a1a",
        "primary-container": "#003087",
        "on-error-container": "#93000a",
        "tertiary-fixed-dim": "#ffb3b0",
        "outline-variant": "#c4c6d4",
        "on-primary-container": "#7f9df8",
        "secondary-fixed-dim": "#7edb85",
        secondary: "#006e26",
        "surface-container-highest": "#e1e3e4",
        primary: "#001d59",
        "on-tertiary-fixed": "#410006",
        "surface-container-low": "#f3f4f5",
        "primary-fixed-dim": "#b4c5ff",
        "surface-variant": "#e1e3e4",
        "on-secondary-fixed-variant": "#00531b",
        "on-primary-fixed": "#00174b",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "inverse-primary": "#b4c5ff",
        outline: "#747683",
        "on-surface": "#191c1d",
        "primary-fixed": "#dbe1ff",
        "secondary-container": "#99f89e",
        tertiary: "#4d0009",
        surface: "#f8f9fa",
        "tertiary-fixed": "#ffdad8"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        base: "8px",
        "container-margin": "20px",
        gutter: "16px",
        "tap-target-min": "48px",
        "card-padding": "24px"
      },
      fontFamily: {
        "label-sm": ["Inter"],
        "headline-md": ["Inter"],
        "display-lg": ["Inter"],
        "question-text": ["Inter"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"]
      }
    }
  }
};
`;

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <Script
        id="tailwind-cdn"
        src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
        strategy="beforeInteractive"
      />
      <Script
        id="tailwind-config"
        strategy="beforeInteractive"
      >
        {TAILWIND_CONFIG}
      </Script>
      <style>{`
        .dashboard-root, .dashboard-root * { box-sizing: border-box; }
        .dashboard-root { font-family: 'Inter', sans-serif; min-height: 100dvh; background: #f8f9fa; }
        .dashboard-root .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
      <div className="dashboard-root">{children}</div>
    </>
  );
}
