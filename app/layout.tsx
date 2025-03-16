import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 
  title: "LifeQuest - Gamify Your Life",
  description: "Turn your life into a game and get rewarded for real-world achievements.",
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico', // Basic favicon
    apple: '/apple-touch-icon.png', // Apple touch icon
  },
  // Open Graph meta tags (adjust as needed)
  openGraph: {
    title: 'LifeQuest',
    description: 'Turn your life into a game and get rewarded for real-world achievements.',
    images: ['/og-image.png'],  //Replace with your OG image URL
    url: 'https://www.example.com', // Replace with your website URL
    type: 'website',
  },
  // Twitter meta tags (adjust as needed)
  twitter: {
    card: 'summary_large_image',
    title: 'LifeQuest',
    description: 'Turn your life into a game and get rewarded for real-world achievements.',
    images: ['/twitter-image.png'],  //Replace with your Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
