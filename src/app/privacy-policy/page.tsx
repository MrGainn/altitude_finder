export default function PrivacyPolicyPage() {
    return (
        <main className="bg-[rgba(26,27,32,1)] text-white px-6 py-12 max-w-5xl mx-auto font-sans">
  <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
  
        <section className="mb-8">
          <p className="text-gray-300">
            This privacy policy is applicable to the <strong>Altitude Finder</strong> mobile application
            (hereinafter referred to as the "Application"). This Application is provided as a free,
            standalone utility with no account registration and no backend server.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Open Source and Local-First Design</h2>
          <p className="text-gray-300 mb-2">
            The Application is built using the open source{" "}
            <a
              href="https://expo.dev"
              className="text-blue-400 underline hover:text-blue-300"
              target="_blank"
            >
              Expo
            </a>{" "}
            framework and related open source technologies. It is designed as a simple,
            privacy-respecting altimeter app that functions entirely offline.
          </p>
          <p className="text-gray-300">
            All data, including altitude readings, session history, and preferences, are stored{" "}
            <strong>locally on your device only</strong>. There is no cloud integration or external server communication.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">What information does the Application collect?</h2>
          <p className="text-gray-300 mb-2">
            <strong>Location Data:</strong> The Application accesses your device's location in order to
            display altitude-related data. This information is:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
            <li>Used only on your device</li>
            <li>Never transmitted, stored remotely, or shared with any third party</li>
            <li>Not linked to any personal identity</li>
          </ul>
          <p className="text-gray-300">
            The Application does <strong>not</strong> collect, store, or transmit any personal data or usage analytics.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How is your data used?</h2>
          <p className="text-gray-300">
            All data gathered by the Application stays <strong>entirely on your device</strong> and is
            used only to display real-time altitude information. No data is uploaded to any server or
            shared externally.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Do third parties see or have access to any information?</h2>
          <p className="text-gray-300">
            No. The Application does <strong>not</strong> use any third-party services, SDKs, or
            analytics tools. There are no ads, tracking, or cloud-based components.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Does the Application collect precise real-time location information?</h2>
          <p className="text-gray-300">
            Yes. The Application uses your device's <strong>real-time location</strong> to calculate and
            display altitude data. This data remains <strong>on your device only</strong> and is not stored or shared.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Security</h2>
          <p className="text-gray-300">
            Because the Application does not transmit or store your data, there is no risk of
            server-side data breaches. Your location data is used temporarily while the Application is
            running and is not retained between sessions.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Children’s Privacy</h2>
          <p className="text-gray-300">
            The Application is not intended for use by children under the age of 13. We do not
            knowingly collect any personal data from users of any age.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
          <p className="text-gray-300">
            This privacy policy may be updated from time to time. Any changes will be reflected within
            the Application or in this document. You are advised to review this policy periodically for
            any updates.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions or concerns about this Privacy Policy or the Application’s data
            handling, you can contact the developer at:
          </p>
          <p className="text-blue-400">
            <a href="mailto:support@onerack.eu">support@onerack.eu</a>
          </p>
        </section>
  
        <footer className="text-sm text-gray-400 border-t border-white/10 pt-6 mt-12 text-center">
          &copy; 2025 Altitude Finder. All rights reserved.
        </footer>
      </main>
    );
  }
  