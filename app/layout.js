import "./globals.css";

export const metadata = {
    title: "Example App | Eunur",
    description: "Hello World!",
};

import { Tektur } from "next/font/google";

const font = Tektur({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    );
}
