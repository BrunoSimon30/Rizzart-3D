import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

const termsData = [
  {
    id: "your-agreement",
    content: `
    <h1 class="text-[#FFA100] text-[30px] uppercase font-semibold">Privacy Policy</h1>
    <p class="text-white text-[20px]">At Rizznart, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website, services, or contact us. By using our services, you’re agreeing to this policy—so let’s break it down in a way that actually makes sense.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">1. Information We Collect</h2>
    <p class="text-white text-[20px]">When you engage with Rizznart—whether by browsing our website, filling out a contact form, or working with us on a project—we may collect:</p>
    <ul class="list-disc list-inside text-white text-[20px] space-y-2">
        <li><strong>Personal Information:</strong>
            <ul class="list-disc list-inside pl-4 text-[20px]">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Other details you provide when reaching out or signing up for our newsletter.</li>
            </ul>
        </li>
        <li><strong>Payment Information:</strong> If you purchase our services, we collect billing details, though payments are processed securely via third-party payment providers.</li>
        <li><strong>Project Data:</strong> Any creative briefs, brand assets, or information shared for project collaboration are stored securely.</li>
        <li><strong>Technical Data:</strong> Our website collects data like IP addresses, browser type, and device information to enhance user experience and security.</li>
        <li><strong>Cookies & Tracking Technologies:</strong> We use cookies to track website traffic and user behavior to improve our content and services. You can manage your cookie settings anytime.</li>
    </ul>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">2. How We Use Your Information</h2>
    <p class="text-white text-[20px]">We collect data for one simple reason—to deliver top-tier creative services and improve your experience with Rizznart.</p>
    <ul class="list-disc list-inside text-white text-[20px] space-y-2">
        <li>Communicate with you regarding inquiries, projects, and collaborations.</li>
        <li>Process payments and send invoices securely.</li>
        <li>Customize our services based on your needs and preferences.</li>
        <li>Improve website functionality, security, and user experience.</li>
        <li>Send newsletters, updates, or promotional offers (but only if you opt-in—no spam here).</li>
        <li>Analyze website traffic and engagement trends for marketing and optimization purposes.</li>
    </ul>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">3. How We Protect Your Information</h2>
    <p class="text-white text-[20px]">Your data’s security is a top priority, and we take serious measures to protect it. We use industry-standard security measures to safeguard personal and payment information. We make sure limited access by allowing only authorized team members to access client-related information. We also make sure secure third-party integrations; any external tools we use (like payment processors) comply with strict security standards. We never sell or trade your personal data—because that’s just shady.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">4. Sharing & Disclosure of Information</h2>
    <p class="text-white text-[20px]">We only share your data when necessary and in responsible ways. We may share it with trusted partners when a project requires third-party collaboration (like printing, event setup, or external production teams), we may share relevant details—but only with your consent. We may share it with legal or governmental agencies for legal compliance when they require. If Rizznart undergoes a merger or acquisition, your data may be transferred, but we’ll notify you in advance.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">5. Your Rights & Choices</h2>
    <ul class="list-disc list-inside text-white text-[20px] space-y-2">
        <li>We believe in giving you control over your information.</li>
        <li>You reserve the right to unsubscribe from our emails with a single click (no hard feelings).</li>
        <li>If you need to change or correct any personal data, you can just reach out with our approval.</li>
        <li>If you want us to delete your data, you can send us a request, and we’ll handle it unless legal or contractual obligations require us to keep it.</li>
    </ul>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">6. Cookies & Tracking</h2>
    <p class="text-white text-[20px]">Rizznart uses cookies and analytics tools to enhance user experience. Cookies help us understand which content performs best, optimize website performance, and serve relevant marketing. You can disable cookies by adjusting your browser settings, enabling you to block or remove cookies anytime. You can manage your preferences by disabling some tracking technologies in our cookie settings pop-up.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">7. Third-Party Links & External Services</h2>
    <p class="text-white text-[20px]">Our website may contain links to external sites (such as social media platforms or partner pages). Rizznart is not responsible for the privacy policies or security of third-party websites, so always review their terms before engaging.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">8. Changes to This Privacy Policy</h2>
    <p class="text-white text-[20px]">We may update this Privacy Policy occasionally to reflect changes in our services or legal requirements. If major changes occur, we’ll notify you through our website or email. By continuing to use our services, you accept any revised policies.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">9. Contact Us</h2>
    <p class="text-white text-[20px]">If you have any questions about this Privacy Policy or need assistance with your data, feel free to contact us.</p>
    `,
  },
];



export default function Privacy() {
  return (
    <>
      <Head>
        <title>Rizznart Privacy Policy | Data Collection & Protection</title>
        <meta
          name="description"
          content="At Rizznart, we protect your privacy. Learn how we collect, use, and safeguard your data when you engage with our services. Read our full Privacy Policy."
        />
        <meta
          name="google-site-verification"
          content="Vw8Mb1PQASI0J0UAhBVraLOUlo8DSoO2YjI12JqR5YM"
        />
      </Head>
      <Header />
      <section className="innerBan-sec p-8  ">
        <div className="h-[40vh] md:h-[80vh] bg-[url('/img/secbg1.jpg')] py-12 flex items-center justify-center bg-fixed bg-center relative rounded-xl">
          <h1 className="up text-[#B1FF01] text-[40px] md:text-[4.271vw] font-[600] uppercase  tall">
            Privacy Policy
          </h1>
        </div>
      </section>
      <section className="term-sec py-32 px-6 xl:px-0">
        <div className="container mx-auto max-w-screen-xl space-y-6">
          <div>
            <h2 className="text-white text-[25px] font-semibold">11-03-2025</h2>
          </div>
          {termsData.map((section) => (
            <div
              className="text-white"
              key={section.id}
              dangerouslySetInnerHTML={{ __html: section.content }}
            ></div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
