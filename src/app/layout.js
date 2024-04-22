import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "venus",
  description: "Venus by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmsans.className}>
      <body>{children}</body>
    </html>
  );
}


