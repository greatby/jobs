import React from "react";
import {
  FaMoneyBillWave,
  FaHeartbeat,
  FaUmbrellaBeach,
  FaUtensils,
  FaUsers,
  FaPiggyBank,
} from "react-icons/fa";

const perks = [
  {
    icon: <FaMoneyBillWave className="text-2xl text-black" />,
    title: "Competitive Salaries & Benefits",
    description: "Like any great Indian employer — insurance, paid leave, flexible hours, hybrid work, and performance incentives.",
  },
  {
    icon: <FaHeartbeat className="text-2xl text-black" />,
    title: "Mission-Driven Work",
    description:
      "Every day you spend here is an investment in the future — not just for us, but for how every company in India manages its workforce.",
  },
  {
    icon: <FaUmbrellaBeach className="text-2xl text-black" />,
    title: "Career 3.0: Human + Tech + AI",
    description:
      "We don’t just offer jobs. We offer careers at the edge of automation and intelligence — where you’ll learn to work alongside, build, and manage AI agents.",
  },
  {
    icon: <FaUtensils className="text-2xl text-black" />,
    title: "Solve Problems That Matter",
    description:
      "From streamlining compliance to building the next HR language model, your work will shape the systems and intelligence that millions will depend on.",
  },
  {
    icon: <FaUsers className="text-2xl text-black" />,
    title: "Regular team events",
    description:
      "We have a wide range of events and offsites to engage with our community.",
  },
  {
    icon: <FaPiggyBank className="text-2xl text-black" />,
    title: "401k nonelective contribution",
    description:
      "We contribute to your 401(k) so you can focus on what matters today.",
  },
];

export default function PerksAndBenefits() {
  return (
    <section className="relative z-0 bg-[#f6eede] py-36 text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-5">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Perks and Benefits
        </h1>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="flex h-48 flex-col justify-center gap-4 rounded-md border border-black/15 bg-[#f9f3e9] px-6 text-black shadow-sm"
            >
              <div>{perk.icon}</div>
              <div className="flex flex-col gap-2">
                <div className="text-base font-medium">{perk.title}</div>
                <div className="text-sm text-black/60">{perk.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
