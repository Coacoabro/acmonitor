// pages/index.js
import Head from "next/head";
import { Sun, Thermometer, AlertCircle, CheckCircle, Wifi, MapPin, PhoneOutgoing } from "lucide-react";
import { Button } from "@/components/ui/button"; // from shadcn/ui
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Thermonitor WNY | Temperature Monitoring for Panels</title>
                <meta
                    name="description"
                    content="Prevent costly panel failures with real-time temperature monitoring and alerts. Thermonitor WNY installs and monitors sensors, coordinating with HVAC/AC contractors."
                />
                {/* <link rel="icon" href="/images/favicon.ico" /> */}
                <link rel="icon" href="/thermometer-sun.svg" type="svg" />
            </Head>

            <main className="font-sans space-y-4">
                {/* Hero Section */}
                <section
                    className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center px-4"
                    style={{ backgroundImage: "url('/Engineer.jpeg')" }}
                    id="home"
                >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-75"></div>

                {/* Content */}
                <div className="relative z-10 text-white max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Prevent Costly Panel Failures
                    </h1>
                    <p className="text-lg md:text-2xl mb-8">
                    Thermonitor WNY installs and monitors temperature sensors on your
                    equipment, alerting you before panels overheat—and coordinating with
                    HVAC/AC contractors.
                    </p>
                    <a href="#contact">
                        <Button variant="destructive" size="lg" className="cursor-pointer px-8 py-4">
                            Schedule a Quick Consultation
                        </Button>
                    </a>
                </div>
                </section>

                

                {/* How It Works Section */}
                <section id="how-it-works" className="py-20 px-4 bg-white text-gray-800">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
                        <Thermometer className="w-12 h-12 text-blue-600 mb-4" />
                        <h3 className="font-semibold text-xl mb-2">1. Install</h3>
                        <p>
                            Industrial-grade temperature sensors are installed on your key
                            panels. Non-invasive, no downtime.
                        </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
                        <Wifi className="w-12 h-12 text-red-600 mb-4" />
                        <h3 className="font-semibold text-xl mb-2">2. Monitor</h3>
                        <p>
                            Temperatures are monitored in real time by our team. Alerts are
                            triggered before issues become critical.
                        </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
                        <PhoneOutgoing className="w-12 h-12 text-green-600 mb-4" />
                        <h3 className="font-semibold text-xl mb-2">3. Action</h3>
                        <p>
                            If a problem is detected, we contact your HVAC or AC contractor
                            immediately to prevent costly downtime.
                        </p>
                        </div>
                    </div>
                </section>

                {/* Why Thermonitor WNY */}
                <section id="why-us" className="py-20 px-4 bg-blue-900 text-white">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Why Thermonitor WNY?
                    </h2>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
                            <h3 className="font-semibold text-xl mb-2">Peace of Mind</h3>
                            <p>Know your panels are safe 24/7 with continuous monitoring.</p>
                        </div>
                        <div className="p-6">
                            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-400" />
                            <h3 className="font-semibold text-xl mb-2">Prevent Downtime</h3>
                            <p>Early alerts prevent costly equipment failures before they happen.</p>
                        </div>
                        <div className="p-6">
                            <MapPin className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                            <h3 className="font-semibold text-xl mb-2">Local & Responsive</h3>
                            <p>Based in WNY, we understand your plant’s specific needs.</p>
                        </div>
                    </div>
                </section>

                {/* Rising Temperature / Preventative Maintenance */}
                <section className="py-16 px-4 bg-gray-50 text-gray-800 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8 rounded-xl">
                    <Sun className="w-24 h-24 text-yellow-500" />
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Rising Temperatures Put Your Panels at Risk
                        </h2>
                        <p className="text-lg">
                            Summers are getting hotter every year. Overheating panels are a
                            leading cause of unexpected downtime in manufacturing plants.
                            Even a small temperature spike can cause equipment failure or
                            production stoppages. Thermonitor WNY provides real-time
                            monitoring to catch problems before they become costly.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 px-4 bg-gray-50 text-gray-800 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Interested in a Pilot Installation?
                </h2>
                <p className="mb-8 max-w-2xl mx-auto">
                    Fill out the form below or email me directly to schedule a free consultation.
                </p>

                <form className="max-w-2xl mx-auto grid gap-4">
                    <Input type="text" placeholder="Name" />
                    <Input type="text" placeholder="Company" />
                    <Input type="email" placeholder="Email" />
                    <Input type="tel" placeholder="Phone" />
                    <Textarea placeholder="Message / Notes" rows={4} />
                    <Button type="submit" variant="destructive" size="lg" className="cursor-pointer">
                        Schedule Consultation
                    </Button>
                </form>

                <p className="mt-6 text-sm">
                    Or email:{" "}
                    <a
                    href="mailto:aaron@thermonitorwny.com"
                    className="underline text-blue-700"
                    >
                    aaron@thermonitorwny.com
                    </a>
                </p>
                </section>

            </main>
        </Layout>
    );
}
