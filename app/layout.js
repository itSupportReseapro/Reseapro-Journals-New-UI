import "./globals.css";

export const metadata = {
  title: "Reseapro Journals",
  description: "Reseapro Journals application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
