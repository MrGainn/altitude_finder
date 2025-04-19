

export default function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>

      <div className="space-y-4">
        <details className="bg-[rgba(33,36,43,1)] p-5 rounded-xl shadow-glow">
          <summary className="text-white font-medium cursor-pointer text-lg">
            How accurate is the altitude measurement?
          </summary>
          <p className="text-gray-300 mt-2">
            Altitude Finder uses both GPS and barometric sensor data (if available) to provide highly accurate elevation readings.
            You can trust it for both casual exploration and serious outdoor tracking.
          </p>
        </details>

        <details className="bg-[rgba(33,36,43,1)] p-5 rounded-xl shadow-glow">
          <summary className="text-white font-medium cursor-pointer text-lg">
            Does the app work offline?
          </summary>
          <p className="text-gray-300 mt-2">
            Yes! You can record altitude sessions and use the compass offline. GPS will continue to work without an internet connection,
            though map viewing requires a connection unless previously cached.
          </p>
        </details>

        <details className="bg-[rgba(33,36,43,1)] p-5 rounded-xl shadow-glow">
          <summary className="text-white font-medium cursor-pointer text-lg">
            Can I export my altitude and route data?
          </summary>
          <p className="text-gray-300 mt-2">
            Absolutely. You can export session data including graphs and GPS routes for personal analysis or backup.
          </p>
        </details>

        <details className="bg-[rgba(33,36,43,1)] p-5 rounded-xl shadow-glow">
          <summary className="text-white font-medium cursor-pointer text-lg">
            What activities is Altitude Finder good for?
          </summary>
          <p className="text-gray-300 mt-2">
            It’s ideal for hiking, trail running, mountaineering, cycling, and any activity where elevation and navigation matter.
          </p>
        </details>

        <details className="bg-[rgba(33,36,43,1)] p-5 rounded-xl shadow-glow">
          <summary className="text-white font-medium cursor-pointer text-lg">
            Is my data private?
          </summary>
          <p className="text-gray-300 mt-2">
            100%. All data is stored locally on your device. We do not collect or upload your location or activity data — your privacy is our priority.
          </p>
        </details>
      </div>
    </section>
  );
}
