import "./globals.css";

export const metadata = {
  title: "Bistalk | Instagram Growth Systems",
  description: "Done-for-you Instagram growth systems built to help brands generate more visibility, conversations, and clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
