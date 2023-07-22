import Nav from "./components/Nav";
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
                className="bg-[#fdfff5] w-4/5 m-auto text-black "
                suppressHydrationWarning={true}
            >
                <Nav />
                {children}
            </body>
        </html>
    );
}
