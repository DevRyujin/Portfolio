import type { Metadata } from "next";
import { Montserrat, Roboto_Mono, Lexend_Zetta } from "next/font/google";
import "./globals.css";

// Import Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// Import Roboto Mono
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// Import Lexend Zetta
const lexendZetta = Lexend_Zetta({
  variable: "--font-lexend-zetta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrei's Portfolio",
  description:
    "Welcome to my personal portfolio website where I showcase my projects, skills, and experiences as a developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDarkMode = true; // Set to true for dark mode, false for light mode
  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <head>
        {/* Devicon CSS for official brand icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${montserrat.variable} ${robotoMono.variable} ${lexendZetta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
