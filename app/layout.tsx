

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Home page of the FilmGuru",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className="bg-black text-white "
                suppressHydrationWarning={true}
            >
              

                {children}
            </body>
        </html>
    );
}
