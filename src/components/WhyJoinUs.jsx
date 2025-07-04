import { BriefcaseIcon, HeartIcon,StarIcon,RocketLaunchIcon, LightBulbIcon, UsersIcon, ArrowTrendingUpIcon  } from "@heroicons/react/24/outline";
import { FiCheckCircle } from "react-icons/fi";
const benefits = [
  {
    icon: BriefcaseIcon,
    title: "Competitive Compensation",
    description: "Excellent salaries and performance incentives that reward your contributions.",
  },
  {
    icon: HeartIcon,
    title: "Comprehensive Benefits",
    description: "Robust health and wellness programs for you and your family.",
  },
  {
    icon: LightBulbIcon,
    title: "Continuous Learning",
    description: "Opportunities for professional development and certifications in cutting-edge tech.",
  },
  {
    icon: UsersIcon,
    title: "Vibrant Culture",
    description: "Collaborative, inclusive, and energetic environment that values every voice.",
  },
  {
    icon: ArrowTrendingUpIcon ,
    title: "Work-Life Balance",
    description: "Promotes a sustainable balance between professional and personal life.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="bg-white py-20 px-4 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">More Than Just a Job: A Mission to Transform</h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-lg text-gray-700">
          At Your Company, your career will be defined by impact, innovation, and unparalleled growth. We're not just adapting to the future — we're building it.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 p-6 bg-gray-50 flex flex-col items-start gap-4"
            >
              <item.icon className="w-8 h-8 text-indigo-600" />
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function YourRoleInTransformation() {
  const items = [
    {
      title: "Innovate",
      description: "Work on groundbreaking technologies at the intersection of HR and AI.",
      icon: LightBulbIcon,
    },
    {
      title: "Grow",
      description: "Develop unparalleled skills and stay ahead in the evolving tech landscape.",
      icon: ArrowTrendingUpIcon,
    },
    {
      title: "Impact",
      description: "Shape the future of enterprise and make a real-world difference.",
      icon: StarIcon,
    },
    {
      title: "Lead",
      description: "Help build the Layer 3 Unified Agentic AI Platform that defines the next decade.",
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 text-black">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Be a Pioneer: From People to AI Agents</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Join us on our journey to transition from managing people to managing AI agents that transform enterprise workflows.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-lg bg-white p-6 shadow hover:shadow-md transition">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhoWeAreLookingFor() {
  const traits = [
    "Driven by curiosity and a desire to learn new technologies.",
    "A problem-solver with a knack for creative solutions.",
    "Collaborative and thrive in a team-oriented environment.",
    "Passionate about making a tangible impact on the future of work.",
    "Eager to be part of a company that thinks decades ahead.",
  ];

  return (
    <section className="bg-white py-24 px-6 text-black">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Are You Ready to Redefine the Future?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We’re seeking visionary minds ready to challenge norms and shape the future of work through innovation and purpose.
          </p>
        </div>

        {/* Traits Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {traits.map((trait, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg bg-gray-50 p-5 shadow-sm hover:shadow-md transition"
            >
              <FiCheckCircle className="text-indigo-600 text-xl shrink-0 mt-1" />
              <p className="text-gray-800 text-base">{trait}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/careers#positions"
            className="inline-block rounded-sm bg-[#00f5d4] px-4 py-6 text-black text-lg font-medium hover:bg-[#5bf5de] transition"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
}
