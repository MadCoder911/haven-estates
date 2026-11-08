import "./globals.css";
export const metadata = {
  title: "Haven Estates | Find a place to belong",
  description: "A premium real estate experience concept by Go Digital."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
