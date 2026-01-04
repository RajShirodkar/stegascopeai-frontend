import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "StegaScopeAI",
  description: "AI-powered steganalysis platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
