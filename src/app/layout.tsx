import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {FavoriteProductsProvider} from "@/lib/favorite-context";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Technical task",
    description: "Technical task for GoodGuys",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <FavoriteProductsProvider>
            <div
                className="items-center justify-items-center min-h-screen pb-20 gap-16 px-10 sm:px-20 py-10 font-[family-name:var(--font-geist-sans)]">
                <main className="w-full flex flex-col gap-8 row-start-2 justify-center items-center">
                    {children}
                </main>
            </div>
        </FavoriteProductsProvider>
        </body>
        </html>
    );
}
