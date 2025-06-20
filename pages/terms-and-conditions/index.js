import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";

const termsData = [
  {
    id: "your-agreement",
    content: `
    <h1 class="text-[#FFA100] text-[30px] uppercase font-semibold">Terms & Conditions</h1>
    <p class="text-white text-[20px]">Welcome to Rizznart! The below Terms & Conditions lay out the legal framework of working with us, whether you're a brand, an influencer, a creative collaborator, or just someone curious about our high-energy world of content creation. By using our website, services, or collaborating with us in any way, you’re agreeing to these terms—so read them carefully. If you don’t agree, we totally respect that, but it means we can’t work together.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">1. Who We Are & What We Do</h2>
    <p class="text-white text-[20px]">Rizznart is all about pushing creative boundaries. We provide content marketing, creative direction, motion graphics, art direction, event setups, product shoots, and videography to brands, influencers, and businesses looking to make waves in the digital ocean. Every project we take on is fueled by our core artistic vision, creative strategic storytelling, and high-level execution.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">2. Working With Us: The Process</h2>
    <p class="text-white text-[20px]">Hiring Rizznart doesn’t mean you’re just getting a service. This means you’re getting an experience. We start the process by discussing and understanding your vision, goals, and brand identity, then build a strategic creative plan that aligns with your needs. Throughout the process, we maintain transparent communication to ensure everything is well-informed and stays on track.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">3. Payments, Pricing & Refunds</h2>
    <p class="text-white text-[20px]">Quality creativity isn’t just magic—it takes time, talent, and effort. That’s why all projects require a deposit before we start. The full payment structure will be outlined in your project contract or invoice, and payments must be made on time to avoid delays in production.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">4. Ownership, Copyrights & Usage Rights</h2>
    <p class="text-white text-[20px]">Ownership of creative work depends on what’s agreed upon before the project starts. If a project is fully paid for and contractually transferred to you, you own the final deliverables within the agreed-upon scope. However, Rizznart retains the right to showcase completed work in our portfolio unless a confidentiality agreement states otherwise.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">5. Revisions & Feedback</h2>
    <p class="text-white text-[20px]">Great content comes from collaboration, and that means we’re happy to refine our work based on your feedback. However, all projects include a set number of revisions as specified in your contract. If additional revisions are requested beyond the agreed-upon limit, they may incur extra fees.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">6. Deadlines, Timelines & Project Delays</h2>
    <p class="text-white text-[20px]">We take deadlines seriously, but creativity isn’t something that can always be rushed. We commit to delivering projects within the agreed timeframe, provided all necessary materials, approvals, and payments are received on schedule.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">7. Collaboration & Conduct</h2>
    <p class="text-white text-[20px]">We love working with passionate brands, influencers, and creatives, but professionalism is key. At Rizznart, we maintain a respectful, positive, and inclusive work environment. Any form of disrespect, harassment, or unprofessional behavior will not be tolerated and may result in termination of our collaboration.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">8. Confidentiality & Privacy</h2>
    <p class="text-white text-[20px]">We respect your privacy. Any business information shared with us during a project is confidential between you and Rizznart. Likewise, we expect the same level of confidentiality regarding our creative strategies, techniques, and proprietary methods.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">9. Liability & Limitations</h2>
    <p class="text-white text-[20px]">While we strive for perfection, we don’t guarantee specific results from creative work—audience engagement, campaign performance, and social media virality depend on multiple factors beyond our control. We take on your project to craft visually compelling, strategically designed content, but we don’t take responsibility for how it performs once it’s in the hands of the internet.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">10. Updates & Modifications to These Terms</h2>
    <p class="text-white text-[20px]">The creative industry is always evolving, and so are we. Rizznart reserves the right to update these Terms & Conditions whenever needed. By continuing to use our services after any updates, you agree to the revised terms.</p>

    <h2 class="text-[#FFA100] text-[30px] uppercase font-semibold">11. Contact Us</h2>
    <p class="text-white text-[20px]">Rizznart is always within reach to create, disrupt, and make an impact. If you have any questions, let’s talk. Otherwise, let’s get to work and make something unforgettable. For inquiries, contracts, or legal matters, you can reach us at [Insert Contact Info].</p>
    `,
  },
];

export default function TermsConditions() {
  return (
    <>
      <Head>
        <title>Rizznart Terms & Conditions | Legal & Service Guidelines</title>
        <meta
          name="description"
          content="Review Rizznart’s Terms & Conditions outlining our services, payments, copyrights, revisions, and collaboration policies. Stay informed before working with us."
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
            Terms & Conditions
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
              className="text-white space-y-2"
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
