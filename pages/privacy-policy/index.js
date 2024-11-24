import Layout from "../../components/Layout";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen py-10">
                <div className="container mx-auto px-6 lg:px-12 max-w-4xl bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h1>
                    <p className="text-gray-500 mb-6 text-center">
                        Effective Date: <span className="font-semibold">24 Nov 2025</span>
                    </p>

                    <p className="text-gray-600 mb-4">
                        Morfozz Ltd. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting and
                        respecting your privacy. This Privacy Policy explains how we collect,
                        use, and protect your information when you use &lt;span className=&quot;font-semibold&quot;&gt;Learn Driving&lt;/span&gt; (the
                        &quot;App&quot;).
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        1. Information We Collect
                    </h2>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>
                            <strong>Personal Information:</strong> Name, email address, and any
                            information you provide during registration.
                        </li>
                        <li>
                            <strong>Usage Information:</strong> Data about your interactions
                            with the App, including test progress and scores.
                        </li>
                        <li>
                            <strong>Device Information:</strong> Details about the device you
                            use, such as operating system version and device model.
                        </li>
                        <li>
                            <strong>Payment Information:</strong> Transaction details for in-app
                            purchases (handled by Apple; we do not store payment details).
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        2. How We Use Your Information
                    </h2>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>
                            <strong>App Functionality:</strong> To deliver features like
                            tracking scores and providing personalized feedback.
                        </li>
                        <li>
                            <strong>Improvement:</strong> To analyze usage data and enhance the
                            App experience.
                        </li>
                        <li>
                            <strong>Purchases:</strong> To manage in-app purchases and
                            subscriptions through Apple.
                        </li>
                        <li>
                            <strong>Communication:</strong> To send updates or respond to
                            inquiries.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        3. Data Storage and Processing
                    </h2>
                    <p className="text-gray-600">
                        Your data is stored securely using <strong>Supabase</strong>, which
                        provides backend services and adheres to strict data protection
                        standards.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        4. In-App Purchases
                    </h2>
                    <p className="text-gray-600">
                        In-app purchases are processed through Apple’s App Store. We do not
                        collect or store your payment details. Please refer to Apple’s privacy
                        policy for details on how your payment information is handled.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        5. Data Sharing
                    </h2>
                    <p className="text-gray-600">
                        We do not sell your personal information. Data may be shared only in
                        the following cases:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>
                            <strong>Service Providers:</strong> Trusted third-party providers
                            (e.g., Supabase) to operate the App.
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> Compliance with applicable laws
                            or law enforcement requests.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        6. Data Security
                    </h2>
                    <p className="text-gray-600">
                        We implement reasonable security measures to protect your data against
                        unauthorized access or misuse.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        7. Your Rights
                    </h2>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>
                            <strong>Access and Correction:</strong> Request access to or
                            correction of your personal data.
                        </li>
                        <li>
                            <strong>Deletion:</strong> Request deletion of your data, subject to
                            legal requirements.
                        </li>
                        <li>
                            <strong>Objection:</strong> Restrict or object to certain processing
                            activities.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        8. Contact Us
                    </h2>
                    <p className="text-gray-600">
                        For questions or to exercise your rights, please contact us at{" "}
                        <a
                            href="mailto:uguboz@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            uguboz@gmail.com
                        </a>
                        .
                    </p>
                </div>
            </div>
        </Layout>
    );
}
