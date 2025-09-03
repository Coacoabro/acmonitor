// components/Layout.js
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"

export default function Layout({ children, title = "Thermonitor WNY" }) {

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if(!element) return

        const isMobile = window.innerWidth < 640
        const yOffset = isMobile ? 0 : -70

        const y = element.getBoundingClientRect().top + window.scrollY + yOffset

        window.scrollTo({
            top: y,
            behavior: "smooth"
        })
    }

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
            <header className="bg-blue-900 text-white py-4 shadow-md sticky top-0 z-50">
                <div className="sm:max-w-6xl w-full mx-auto flex justify-between items-center px-2 sm:px-4">
                    <h1 className="text-lg sm:text-xl font-bold">
                        <button onClick={() => scrollToSection("home")} className="hover:underline cursor-pointer">
                            Thermonitor WNY
                        </button>
                    </h1>
                    <nav className="space-x-2 sm:space-x-6 text-sm sm:text-base">
                        <button onClick={() => scrollToSection("how-it-works")} className="hover:underline cursor-pointer">
                            How It Works
                        </button>
                        <button onClick={() => scrollToSection("why-us")} className="hover:underline cursor-pointer">
                            Why Us
                        </button>
                        <button onClick={() => scrollToSection("contact")} className="hover:underline cursor-pointer">
                            Contact
                        </button>
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
