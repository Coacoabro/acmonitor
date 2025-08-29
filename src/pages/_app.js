import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "A/C Monitor Dashboard",
    description: "Monitoring your panels to make sure A/C units don't fail",
};

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
