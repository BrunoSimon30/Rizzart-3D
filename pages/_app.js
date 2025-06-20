import "@/styles/globals.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { Darker_Grotesque } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import AudioPlayer from "@/components/AudioPlayer";

const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-grotesque",
});

// Schema.org data as separate JSON object
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Rizznart",
  image: "https://rizznart.com/img/ft-logo.png",
  "@id": "",
  url: "https://rizznart.com/",
  telephone: "+1 385-273-0071",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9980 South 300 West",
    addressLocality: "Sandy",
    addressRegion: "UT",
    postalCode: "84070",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.5700759,
    longitude: -111.9011767,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "21:00",
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Head>
        <title>High-Quality Design That Impress | RizzNArt</title>
        <link rel="canonical" href={`https://rizznart.com${router.asPath}`} />
        <meta
          name="google-site-verification"
          content="Vw8Mb1PQASI0J0UAhBVraLOUlo8DSoO2YjI12JqR5YM"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className={grotesque.variable}>
        <Component {...pageProps} />
        <AudioPlayer />
      </main>

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4VTSEKWBGY"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4VTSEKWBGY');
        `}
      </Script>
    </>
  );
}
