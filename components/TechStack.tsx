"use client";

import Image from "next/image";

const techStack = [
  { src: "/next.svg", label: "Next.js" },
  { src: "/react.png", label: "React" },
  { src: "/ts.svg", label: "TypeScript" },
  { src: "/tailwind.png", label: "Tailwind CSS" },
  { src: "/tail.svg", label: "Tailwind UI" },
  { src: "/nodejs.svg", label: "Node.js" },
  { src: "/express.png", label: "Express" },
  { src: "/react-native.png", label: "React Native" },
  { src: "/expo.png", label: "Expo" },
  { src: "/mongodb.svg", label: "MongoDB" },
  { src: "/html.png", label: "HTML" },
  { src: "/css.png", label: "CSS" },
  { src: "/javascript.png", label: "JavaScript" },
];

const apisAndServices = [
  { src: "/openai.png", label: "OpenAI" },
  { src: "/stripe.png", label: "Stripe" },
  { src: "/aws.png", label: "AWS" },
  { src: "/googleCloud.png", label: "Google Cloud" },
  { src: "/whatsapp.png", label: "WhatsApp Cloud API" },
  { src: "/linkedin.png", label: "LinkedIn API" },
  { src: "/x.png", label: "X API" },
  { src: "/facebook.png", label: "Facebook API" },
  { src: "/instagram.png", label: "Instagram API" },
  { src: "/maps.png", label: "Google Maps Platform" },
  { src: "/cloudinary.png", label: "Cloudinary" },
  { src: "/firebase.png", label: "Firebase" },
  { src: "/shopify.png", label: "Shopify" },
  { src: "/wordpress.png", label: "WordPress" },
  { src: "/trello.png", label: "Trello API" },
  { src: "/hedera.png", label: "Hedera" },
  { src: "/metamask.png", label: "MetaMask" },
  { src: "/elevenLabs.png", label: "ElevenLabs" },
  { src: "/d-id.png", label: "D-ID" },
];

const TechStack = () => {
  return (
    <section className="py-16" id="stack">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="heading text-center">
          My <span className="text-purple">tech stack</span> and{" "}
          <span className="text-purple">APIs</span> I build with
        </h2>

        <div className="mt-10 space-y-8">
          {/* Tech stack row */}
          <div className="border border-white/10 rounded-3xl bg-[#04071d]/90 px-4 py-5 backdrop-blur-md relative overflow-hidden">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-[#8A8BA3] mb-3">
              Core tech stack
            </p>
            <div className="relative overflow-hidden">
              <div className="flex gap-4 animate-marquee">
                {[...techStack, ...techStack].map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#0C0E23] border border-white/5
                    shadow-[0_0_18px_rgba(112,66,255,0.18)]"
                  >
                    <div className="relative w-7 h-7">
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[10px] md:text-xs lg:text-sm text-[#E2E3F1]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* APIs row */}
          <div className="border border-white/10 rounded-3xl bg-[#04071d]/90 px-4 py-5 backdrop-blur-md relative overflow-hidden">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-[#8A8BA3] mb-3">
              APIs and platforms I integrate
            </p>
            <div className="relative overflow-hidden">
              <div className="flex gap-4 animate-marquee reverse">
                {[...apisAndServices, ...apisAndServices].map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#0C0E23] border border-white/5
                    shadow-[0_0_18px_rgba(203,172,249,0.18)]"
                  >
                    <div className="relative w-7 h-7">
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[10px] md:text-xs lg:text-sm text-[#E2E3F1]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub copy */}
          {/* <p className="text-center text-[11px] md:text-sm text-[#9C9EB6] max-w-2xl mx-auto">
            From full stack web and mobile apps to AI automation, payments,
            messaging, maps, media and blockchain integrations,
            everything connects cleanly inside production ready systems.
          </p> */}
        </div>
      </div>

      {/* Local marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
          width: max-content;
        }

        .animate-marquee.reverse {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
