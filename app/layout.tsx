import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hazlosports.com"),
  title: {
    default: "Hazlo - Connect, Play, and Inspire",
    template: `%s | Hazlo`,
  },
  description:
    "Join Hazlo, the ultimate sports community to connect with players, create events, and get inspired by like-minded athletes. Discover your passion for sports with Hazlo!",
  keywords: [
    "Hazlo",
    "sports community",
    "connect with players",
    "sports events",
    "athletes",
    "health and fitness",
    "sports app",
    "sports coaching",
  ],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Hazlo - Connect, Play, and Inspire",
    description:
      "Discover a vibrant sports community where you can share your journey, create events, and connect with athletes and coaches. Hazlo empowers you to live healthier and stay active.",
    images: [""],
    url: "https://hazlosports.com",
    siteName: "Hazlo",
  },
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(montserrat.className, "antialiased")}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
