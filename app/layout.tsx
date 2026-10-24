import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Crust n Crumb | Fresh Food Prishtina", description: "Healthy fast food made deliciously fresh.", robots: { index: false, follow: false } };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
