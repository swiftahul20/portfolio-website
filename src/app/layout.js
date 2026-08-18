import localFont from "next/font/local";
import Footer from "../components/footer/page";
import "./globals.css";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const jakartaSans = localFont({
  src: [
    {
      path: "./fonts/jakarta-sans/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/jakarta-sans/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/jakarta-sans/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/jakarta-sans/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jakarta-sans",
  display: "swap",
});

const dmSans = localFont({
  src: [
    {
      path: "./fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "MH Portfolio",
  description: "Welcome to my website",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={`${jakartaSans.variable} ${dmSans.variable}`}>
        <body className={`${jakartaSans.className} font-sans antialiased`}>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
