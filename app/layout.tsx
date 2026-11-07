import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nirmata-digital.vercel.app"),
  title: {
    default: "Nirmata Digital | Websites, Ads and Content in Mumbai",
    template: "%s | Nirmata Digital",
  },
  description:
    "Nirmata Digital is a Mumbai agency for growth marketing, websites, content and automation.",
  openGraph: {
    siteName: "Nirmata Digital",
    locale: "en_IN",
    type: "website",
  },
};

const themeScript = `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}