import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="font-sans text-white bg-[rgba(26,27,32,1)] min-h-screen w-full px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">Support</h1>
        <p className="text-gray-400 text-center mb-10">
          Need help? We're here for you.
        </p>

        {/* About Us */}
        <div className="bg-[rgba(33,36,43,1)] rounded-2xl shadow-glow px-6 py-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Altitude Finder is developed by OneRack — a team passionate about creating elegant, privacy-focused outdoor tools.
            <br /><br />
            If you have any questions or need assistance, feel free to contact us at{" "}
            <a
              href="mailto:support@onerack.eu"
              className="text-white underline hover:text-gray-300 transition"
            >
              support@onerack.eu
            </a>.
          </p>
        </div>

        {/* Support Buttons Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
          <Link
            href="/privacy-policy"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition text-center min-w-[200px]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition text-center min-w-[200px]"
          >
            Terms of Service
          </Link>
          <a
            href="mailto:support@onerack.eu"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition text-center min-w-[200px]"
          >
            Contact Support
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm space-y-2">
          <p>&copy; 2025 Altitude Finder. All rights reserved.</p>
          <div className="flex justify-center space-x-4 text-xs">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
