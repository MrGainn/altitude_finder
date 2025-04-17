export default function TermsPage() {
  return (
    <main className="bg-[rgba(26,27,32,1)] text-white px-6 py-12 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4  text-center">Terms of Service</h1>

      <p className="text-gray-400 mb-6">Last updated: April 16, 2025</p>

      <p className="text-gray-300 mb-6">
        By downloading, accessing, or using the <strong>Altitude Finder</strong>{" "}
        mobile application (hereinafter referred to as "the App"), you agree to
        these Terms.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Use of the App</h2>
        <p className="text-gray-300">
          The App is intended for personal, non-commercial use. You agree not to
          misuse the App or attempt to interfere with its operation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Data and Privacy</h2>
        <p className="text-gray-300">
          Use of the App may involve the collection of certain data. Please
          refer to our{" "}
          <a
            href="/privacy-policy"
            className="text-blue-400 underline hover:text-blue-300"
          >
            Privacy Policy
          </a>{" "}
          for more information on how your data is handled.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          3. Intellectual Property
        </h2>
        <p className="text-gray-300">
          All content, design, and code within the App is the property of the
          developer and is protected under applicable copyright laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          4. Limitation of Liability
        </h2>
        <p className="text-gray-300">
          We are not liable for any damages or losses arising from the use or
          inability to use the App.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
        <p className="text-gray-300">
          We may update these terms at any time. Continued use of the App after
          changes implies your acceptance of the new terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
        <p className="text-gray-300">
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:support@onerack.eu"
            className="text-blue-400 underline"
          >
            support@onerack.eu
          </a>
          .
        </p>
      </section>

      <footer className="text-sm text-gray-400 border-t border-white/10 pt-6 mt-12 text-center">
        &copy; 2025 Altitude Finder. All rights reserved.
      </footer>
    </main>
  );
}
