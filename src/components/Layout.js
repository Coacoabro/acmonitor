// components/Layout.js
import Head from "next/head";
import { Button } from "@/components/ui/button";

export default function Layout({ children, title = "Thermonitor WNY" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                name="description"
                content="Prevent costly panel failures with real-time temperature monitoring and alerts. Thermonitor WNY installs and monitors sensors, coordinating with HVAC/AC contractors."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* Header / Navbar */}
            <header className="bg-blue-900 text-white py-4 shadow-md">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl font-bold">Thermonitor WNY</h1>
                <nav className="space-x-6">
                    <a href="#how-it-works" className="hover:underline">
                        How It Works
                    </a>
                    <a href="#why-us" className="hover:underline">
                        Why Us
                    </a>
                    <a href="#contact" className="hover:underline">
                        Contact
                    </a>
                </nav>
                </div>
            </header>

            {/* Main content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-400 py-6 text-center">
                <p>
                Thermmonitor WNY – Real-time temperature monitoring for your plant
                panels.
                </p>
                <p className="text-sm mt-2">© {new Date().getFullYear()} Thermmonitor WNY</p>
            </footer>
        </>
    );
}
