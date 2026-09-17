import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Register font variables; elements using font-sans or font-mono can use them.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Default browser-tab title and search description; individual pages can override these.
export const metadata: Metadata = {
  // Social platforms need a full site address to resolve the preview image.
  metadataBase: new URL("https://sahilminhas.com"),
  title: "Sahil's Portfolio",
  description:
    "Explore my projects, interests, and work as a software developer.",

  // Controls the title, description, and image shown when someone shares a link.
  openGraph: {
    title: "Sahil's Portfolio",
    description:
      "Explore my projects, interests, and work as a software developer.",
    url: "https://sahilminhas.com",
    siteName: "Sahil Minhas Portfolio",
    type: "website",
    images: [
      {
        // Add your 1200 x 630 image at public/preview.png.
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Sahil Minhas portfolio",
      },
    ],
  },

  // Large image preview for platforms that read Twitter card metadata.
  twitter: {
    card: "summary_large_image",
    title: "Sahil's Portfolio",
    description:
      "Explore my projects, interests, and work as a software developer.",
    images: ["/preview.png"],
  },
};

// Run before the page is painted to avoid flashing the wrong theme.
// A saved choice takes priority over the device's color preference.
const themeScript = `
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  try {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      theme = savedTheme;
    }
  } catch {
    // Use the device preference when storage is unavailable.
  }

  document.documentElement.dataset.theme = theme;
`;

// Next.js wraps every route in this layout. children is the active page content.
// Readonly describes inputs that this component should not modify.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The theme script changes an HTML attribute before hydration (React attaching
    // to server HTML). Suppress that expected attribute difference on this element.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Next.js runs this before hydration; use Script rather than a raw script tag. */}
        <Script id="portfolio-theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
