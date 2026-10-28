import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Elsa’s checklist 🌸", description: "Elke dag kleine stapjes en trotse momentjes!", applicationName: "Elsa’s checklist", appleWebApp: { capable: true, statusBarStyle: "default", title: "Elsa’s checklist" } };
export const viewport: Viewport = { themeColor: "#fff1f7", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="nl"><body>{children}</body></html>; }
