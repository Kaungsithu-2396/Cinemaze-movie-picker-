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
            {/* <link
                href="https://api.fontshare.com/v2/css?f[]=excon@300&display=swap"
                rel="stylesheet"
            ></link> */}
            <body
                className="bg-black  text-white flex   justify-between  w-screen flex-col lg:flex-row "
                suppressHydrationWarning={true}
            >
                <Nav />

                {children}
            </body>
        </html>
    );
}
