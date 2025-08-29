import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
    BarChart,
    Bar
} from "recharts";
import {
    ShieldCheck,
    Thermometer,
    Activity,
    BellRing,
    Link2,
    Wifi,
    SignalHigh,
    Cloud,
    Gauge,
    Factory,
    Lock,
    Settings,
    Smartphone,
    MonitorSmartphone
} from "lucide-react";

    // Simple UI primitives (shadcn-like)
const Card = ({ className = "", children }) => (
    <div className={`rounded-2xl shadow-lg bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-6 ${className}`}>{children}</div>
);
const Button = ({ className = "", children, ...props }) => (
    <button
        className={`px-4 py-2 rounded-2xl shadow hover:shadow-md transition text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 ${className}`}
        {...props}
    >
        {children}
    </button>
);
const Badge = ({ children }) => (
    <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{children}</span>
);

// Mock sensor data
const makeSeries = () => [
    { t: "08:00", temp: 77, panel: "P-1" },
    { t: "09:00", temp: 80, panel: "P-1" },
    { t: "10:00", temp: 82, panel: "P-1" },
    { t: "11:00", temp: 91, panel: "P-1" },
    { t: "12:00", temp: 95, panel: "P-1" },
    { t: "13:00", temp: 97, panel: "P-1" },
    { t: "14:00", temp: 99, panel: "P-1" },
    { t: "15:00", temp: 94, panel: "P-1" },
    { t: "16:00", temp: 90, panel: "P-1" }
];

const mockAlerts = [
    { id: 1, ts: "2025-08-27 14:12", panel: "Line 2 / MCC-03", severity: "High", msg: "Cooling coil efficiency trending down 18% vs baseline" },
    { id: 2, ts: "2025-08-27 09:40", panel: "Line 1 / VFD-07", severity: "Medium", msg: "Ambient temp exceeded 95°F for 23 minutes" },
    { id: 3, ts: "2025-08-26 16:03", panel: "Robot Cell / Panel A", severity: "High", msg: "Airflow sensor dropped below threshold; fan likely stalled" }
];

const Feature = ({ Icon, title, desc }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-indigo-50 text-indigo-700"><Icon size={22} /></div>
        <div>
        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
        </div>
    </div>
);

const Hero = ({ onGetDemo }) => (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950" />
        <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Prevent HVAC-caused downtime.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">IIoT monitoring for industrial panels.</span>
        </motion.h1>
        <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl">
            We install wireless sensors (e.g., Monnit™-compatible) on control panels & HVAC assets, stream data over LTE/WiFi, and alert your team *before* heat kills drives and PLCs.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button onClick={onGetDemo}>Get a live demo</Button>
            <button className="px-4 py-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800">View sample dashboard</button>
            <div className="flex items-center gap-2">
            <Badge>Air-gapped friendly</Badge>
            <Badge>LTE / LoRa / WiFi</Badge>
            <Badge>30–60 min install</Badge>
            </div>
        </div>

        {/* Decorative schematic */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
            <Card>
            <Feature Icon={Thermometer} title="Panel temperature tracking" desc="Probe or puck-antenna sensors mounted to MCC/VFD enclosures; instant alerts when heat rises above safe thresholds." />
            </Card>
            <Card>
            <Feature Icon={Wifi} title="No-IT network options" desc="Use client WiFi, private VLAN, or our LTE gateway. Keep corporate networks isolated and happy." />
            </Card>
            <Card>
            <Feature Icon={BellRing} title="Smart escalation" desc="Text/email alerts to maintenance and (optionally) your HVAC vendor with photos, trend graphs, and SOPs." />
            </Card>
        </div>
        </div>
    </section>
);

const Logos = () => (
    <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm uppercase tracking-wider text-zinc-500 text-center">Designed to work with</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-80">
            <Card className="flex items-center justify-center h-20"><span className="font-semibold text-zinc-600">Monnit™</span></Card>
            <Card className="flex items-center justify-center h-20"><span className="font-semibold text-zinc-600">LoRaWAN®</span></Card>
            <Card className="flex items-center justify-center h-20"><span className="font-semibold text-zinc-600">BACnet / Modbus</span></Card>
            <Card className="flex items-center justify-center h-20"><span className="font-semibold text-zinc-600">CMMS / Email</span></Card>
        </div>
        </div>
    </section>
);

const HowItWorks = () => (
    <section className="py-20 bg-gradient-to-br from-white to-indigo-50/40 dark:from-zinc-950 dark:to-indigo-950/20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">From install to insight in under a day</h2>
            <ul className="mt-6 space-y-5 text-zinc-700 dark:text-zinc-300">
            <li className="flex gap-3"><ShieldCheck className="mt-1" size={18}/> NEMA/UL-aware install on AC panels, MCCs, VFDs using magnetic or DIN adapters.</li>
            <li className="flex gap-3"><Link2 className="mt-1" size={18}/> Gateways connect via LTE (private APN), plant WiFi, or LoRa backhaul to a site hub.</li>
            <li className="flex gap-3"><Cloud className="mt-1" size={18}/> Data flows to our secure cloud; we baseline normal temperatures and detect drift.</li>
            <li className="flex gap-3"><BellRing className="mt-1" size={18}/> We notify maintenance (and optionally your HVAC vendor) with actionable SOPs.</li>
            <li className="flex gap-3"><MonitorSmartphone className="mt-1" size={18}/> View a clean dashboard by line/cell with trends, thresholds, and acknowledgements.</li>
            </ul>
        </div>
        <Card>
            <div className="text-sm text-zinc-500">Sample trend (Panel P-1)</div>
            <div className="h-64 mt-2">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={makeSeries()} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="t" />
                <YAxis domain={[70, 105]} />
                <Tooltip />
                <Area type="monotone" dataKey="temp" stroke="#6366f1" fillOpacity={1} fill="url(#g)" />
                </AreaChart>
            </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm">
            <Gauge size={18} /> Baseline: 80–90°F • Alert: &gt;95°F for 15 min
            </div>
        </Card>
        </div>
    </section>
);

const Pricing = () => (
    <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white text-center">Simple pricing that scales</h2>
        <p className="text-center text-zinc-600 dark:text-zinc-300 mt-3">Upfront install covers sensors + gateway + commissioning. Monthly covers monitoring, alerts & reporting.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card>
            <div className="text-sm text-zinc-500">Starter (pilot)</div>
            <h3 className="mt-2 text-2xl font-bold">$500<span className="text-base font-normal text-zinc-500">/mo</span></h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Up to 10 panels</li>
                <li>Email/SMS alerts</li>
                <li>Baseline & thresholds</li>
                <li>Monthly report</li>
            </ul>
            <Button className="mt-6 w-full">Start pilot</Button>
            </Card>
            <Card className="border-2 border-indigo-500">
            <div className="text-sm text-zinc-500">Growth</div>
            <h3 className="mt-2 text-2xl font-bold">$1,000<span className="text-base font-normal text-zinc-500">/mo</span></h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Up to 25 panels</li>
                <li>HVAC vendor CC/escalation</li>
                <li>Weekly performance email</li>
                <li>CSV export/API access</li>
            </ul>
            <Button className="mt-6 w-full">Book a walkthrough</Button>
            </Card>
            <Card>
            <div className="text-sm text-zinc-500">Premium</div>
            <h3 className="mt-2 text-2xl font-bold">$2,000<span className="text-base font-normal text-zinc-500">/mo</span></h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>50+ panels & multi-site</li>
                <li>Priority response SLAs</li>
                <li>CMMS integration</li>
                <li>Quarterly reliability review</li>
            </ul>
            <Button className="mt-6 w-full">Talk to sales</Button>
            </Card>
        </div>
        <p className="text-center text-xs text-zinc-500 mt-4">Typical install: sensors $209 ea + gateway $650 + on-site labor. We support Monnit™, LoRaWAN®, and custom pipelines.</p>
        </div>
    </section>
);

const Dashboard = () => {
    const data = useMemo(() => makeSeries(), []);
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white flex items-center gap-3"><Factory size={24}/> Plant A — Overview</h2>
            <div className="flex gap-2">
            <Button>New alert rule</Button>
            <button className="px-4 py-2 rounded-2xl border border-zinc-300 dark:border-zinc-700">Export CSV</button>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
            <div className="text-sm text-zinc-500">Panels in range</div>
            <div className="mt-2 text-3xl font-extrabold">18<span className="text-lg text-emerald-500">/20</span></div>
            <div className="mt-2 text-xs text-zinc-500">2 panels above 95°F in last hour</div>
            </Card>
            <Card>
            <div className="text-sm text-zinc-500">Open alerts</div>
            <div className="mt-2 text-3xl font-extrabold">3</div>
            <div className="mt-2 text-xs text-zinc-500">1 High • 2 Medium</div>
            </Card>
            <Card>
            <div className="text-sm text-zinc-500">7‑day average temp (P‑1)</div>
            <div className="h-24 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="t" hide />
                    <YAxis domain={[70, 105]} hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp" stroke="#0ea5e9" dot={false} />
                </LineChart>
                </ResponsiveContainer>
            </div>
            </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="md:col-span-2">
            <div className="flex items-center justify-between">
                <div>
                <div className="text-sm text-zinc-500">Panel P-1 — Temperature</div>
                <div className="text-xl font-semibold mt-1">Trend & threshold</div>
                </div>
                <div className="text-xs text-zinc-500">Baseline 80–90°F • Alert &gt;95°F</div>
            </div>
            <div className="h-64 mt-2">
                <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="t"/>
                    <YAxis domain={[70, 105]}/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="temp" stroke="#06b6d4" fillOpacity={1} fill="url(#g2)"/>
                </AreaChart>
                </ResponsiveContainer>
            </div>
            </Card>
            <Card>
            <div className="text-sm text-zinc-500">Active alerts</div>
            <ul className="mt-3 space-y-3">
                {mockAlerts.map(a => (
                <li key={a.id} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800">
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{a.ts}</span>
                    <span className={`px-2 py-0.5 rounded-full ${a.severity === 'High' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>{a.severity}</span>
                    </div>
                    <div className="mt-1 font-medium">{a.panel}</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-300">{a.msg}</div>
                </li>
                ))}
            </ul>
            </Card>
        </div>

        <Card className="mt-8">
            <div className="flex items-center justify-between">
            <div>
                <div className="text-sm text-zinc-500">Panels</div>
                <div className="text-xl font-semibold">Inventory & status</div>
            </div>
            <div className="text-sm">
                <Button className="bg-zinc-900 hover:bg-zinc-800">Add panel</Button>
            </div>
            </div>
            <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="text-left text-zinc-500">
                <tr>
                    <th className="py-2">Name</th>
                    <th>Location</th>
                    <th>Last Temp</th>
                    <th>Status</th>
                    <th>Last Seen</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                    { name: "MCC-03", loc: "Line 2", temp: "97°F", status: "Hot", seen: "2 min ago" },
                    { name: "VFD-07", loc: "Line 1", temp: "92°F", status: "Warning", seen: "5 min ago" },
                    { name: "PLC-A", loc: "Robot Cell", temp: "84°F", status: "OK", seen: "1 min ago" },
                ].map((r, i) => (
                    <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="py-2 font-medium">{r.name}</td>
                    <td>{r.loc}</td>
                    <td>{r.temp}</td>
                    <td>
                        <span className={`px-2 py-1 rounded-full text-xs ${r.status === 'OK' ? 'bg-emerald-100 text-emerald-700' : r.status === 'Warning' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>{r.status}</span>
                    </td>
                    <td>{r.seen}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </Card>
        </div>
    );
};

export default function AppPage() {
    const [view, setView] = useState("landing"); // "landing" | "dashboard"
    const [email, setEmail] = useState("");

    return (
        <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-indigo-600 text-white font-bold">HV</span>
                <span className="font-semibold">HeatVision</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
                <a href="#features" className="hover:text-zinc-900 dark:hover:text-white">Features</a>
                <a href="#how" className="hover:text-zinc-900 dark:hover:text-white">How it works</a>
                <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white">Pricing</a>
            </nav>
            <div className="flex items-center gap-3">
                <button className="px-3 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700" onClick={() => setView("dashboard")}>View demo</button>
                <Button onClick={() => setView("dashboard")}>Sign in</Button>
            </div>
            </div>
        </header>

        {view === "landing" ? (
            <>
            <Hero onGetDemo={() => setView("dashboard")} />
            <div id="features"><Logos /></div>
            <div id="how"><HowItWorks /></div>
            <div id="pricing"><Pricing /></div>

            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                <Card>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                        <h3 className="text-2xl font-bold">Ready to catch failures before they cost you a shift?</h3>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-300">Book a quick walkthrough. We’ll review your environment and quote an install that fits your site.</p>
                    </div>
                    <form className="flex gap-3" onSubmit={(e) => { e.preventDefault(); setView("dashboard"); }}>
                        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="flex-1 px-4 py-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"/>
                        <Button type="submit">Get a demo</Button>
                    </form>
                    </div>
                </Card>
                </div>
            </section>

            <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 text-sm text-zinc-500 flex flex-wrap gap-3 justify-between">
                <span>© {new Date().getFullYear()} HeatVision (demo). All rights reserved.</span>
                <span>Works with Monnit™ sensors & LTE/LoRa gateways. BACnet/Modbus optional.</span>
                </div>
            </footer>
            </>
        ) : (
            <Dashboard />
        )}
        </main>
    );
}
