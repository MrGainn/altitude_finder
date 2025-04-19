import Image from "next/image";
import { Suspense } from "react";
import FAQSection from "../../components/FAQSection";
import GallerySlider from "../../components/GallerySlider";
import SkeletonGallery from "../../components/SkeletonGallery";





export default function Home() {
  return (
    <div className="font-sans text-white bg-[rgba(26,27,32,1)] min-h-screen w-full overflow-x-hidden">
      <header className="text-center py-8 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {/* Logo */}
          <Image
            src="/logo.png" // 🔁 replace with your actual path
            alt="Altitude Finder Logo"
            width={110}
            height={110}
            className="rounded-xl"
          />

          {/* Title */}
          <h1 className="text-5xl font-extrabold tracking-tight">
            Altitude Finder
          </h1>
        </div>

        <p className="text-xl text-gray-400 mt-2 max-w-2xl mx-auto">
          Explore Altitude & Compass Like Never Before
        </p>
      </header>

      {/* Client-only slider */}
      <Suspense fallback={<SkeletonGallery />}>
        <GallerySlider />
      </Suspense>

      {/* Store Buttons */}
      <section className="flex justify-center gap-6 my-16">
        <a href="https://apps.apple.com/" target="_blank">
          <Image
            src="/appstore.svg"
            alt="Download on the App Store"
            width={180}
            height={54}
          />
        </a>
        <a href="https://play.google.com/store/apps" target="_blank">
          <Image
            src="/play_store.png"
            alt="Get it on Google Play"
            width={180}
            height={54}
          />
        </a>
      </section>

      {/* Features */}
      <div className="px-4 sm:px-6">
        <section className="bg-[rgba(33,36,43,1)] px-5 md:px-8 py-12 my-16 rounded-2xl max-w-6xl mx-auto shadow-glow">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Why You'll Love This App
          </h2>
          <ul className="space-y-4 text-gray-300 list-disc list-inside text-lg max-w-2xl mx-auto">
            <li>Real-time GPS altimeter with historical tracking</li>
            <li>Precision compass with sleek custom UI</li>
            <li>Dark theme optimized for outdoor and night use</li>
            <li>Privacy-focused – no unnecessary data collection</li>
          </ul>
        </section>
      </div>

      <FAQSection />

      {/* Policy Buttons */}
      <section className="flex justify-center gap-6 mt-16">
        <a
          href="/privacy-policy"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition"
        >
          Terms of Service
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-12 text-sm space-y-3">
        <p>&copy; 2025 Altitude Finder. All rights reserved.</p>
        <div className="flex justify-center space-x-4 text-xs">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
