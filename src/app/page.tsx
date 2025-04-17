// src/app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-white bg-[rgba(26,27,32,1)] min-h-screen">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Altitude Finder</h1>
        <p className="text-lg text-gray-400 mt-2">
          Explore Altitude & Compass Like Never Before
        </p>
      </header>

      {/* Screenshot Preview */}
      <section className="flex flex-col items-center px-4">
        <Image
          src="/screenshot.png" // 👈 Replace this with the correct public path
          alt="App Screenshot"
          width={450}
          height={900}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* Store Buttons */}
      <section className="flex justify-center gap-4 my-10">
        <a href="https://apps.apple.com/" target="_blank">
          <Image
            src="/appstore.svg"
            alt="Download on the App Store"
            width={160}
            height={48}
          />
        </a>
        <a href="https://play.google.com/store/apps" target="_blank">
          <Image
            src="/googleplay.svg"
            alt="Get it on Google Play"
            width={160}
            height={48}
          />
        </a>
      </section>

      {/* Features */}
      <section className="bg-[rgba(33,36,43,1)] px-6 py-10 rounded-2xl max-w-4xl mx-auto shadow-glow">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Why You'll Love This App
        </h2>
        <ul className="space-y-4 text-gray-300 list-disc list-inside">
          <li>Real-time GPS altimeter with historical tracking</li>
          <li>Precision compass with sleek custom UI</li>
          <li>Dark theme optimized for outdoor and night use</li>
          <li>Privacy-focused – no unnecessary data collection</li>
        </ul>
      </section>

      {/* Policy Buttons */}
      <section className="flex justify-center gap-4 mt-10">
        <a
          href="/privacy-policy"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition"
        >
          Terms of Service
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 text-sm space-y-2">
        <p>&copy; 2025 Altitude Finder. All rights reserved.</p>
        <div className="flex justify-center space-x-4 text-xs">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
