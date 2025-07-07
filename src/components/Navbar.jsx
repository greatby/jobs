import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";


// const navItems = [
//   {
//     label: "Platform",
//     children: [
//       {
//         heading: "Talent Suite",
//         desc: "Manage and grow your people.",
//         subTabs: [
//           {
//             title: "Performance",
//             desc: "Identify your best, grow the rest.",
//             icon: "📈",
//           },
//         ],
//       },
//       {
//         heading: "HRIS",
//         desc: "Streamline and automate HR operations.",
//         subTabs: [
//           {
//             title: "HRIS",
//             desc: "Spend less time on paperwork and more time on people work.",
//             icon: "📅",
//           },
//           {
//             title: "Payroll",
//             desc: "Pay people your way with a powerful, intuitive tool. Easy money.",
//             icon: "🏦",
//           },
//           {
//             title: "Time Tracking",
//             desc: "Clock in, clock out. Frustration-free and fast timecard entry.",
//             icon: "⏰",
//           },
//         ],
//       },
//       {
//         heading: "AI",
//         desc: "People-first, AI-powered",
//         subTabs: [
//           {
//             title: "AI Overview",
//             desc: "Human-centered automation for smarter HR decisions.",
//             icon: "🤖",
//           },
//         ],
//       },
//       {
//         heading: "Innovation & Support",
//         desc: "Tools and assistance to support your journey.",
//         subTabs: [
//           {
//             title: "Innovation Hub",
//             desc: "Discover our latest HR innovations.",
//             icon: "💡",
//           },
//           {
//             title: "Support Center",
//             desc: "Get help and find resources.",
//             icon: "🛠️",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Solutions",
//     children: [
//       {
//         heading: "Performance Management",
//         desc: "Align and develop your workforce.",
//         subTabs: [
//           {
//             title: "Reviews",
//             desc: "Empower employee growth with 360° feedback.",
//             icon: "📈",
//           },
//           {
//             title: "Goals",
//             desc: "Set and achieve clear, trackable goals.",
//             icon: "🌟",
//           },
//         ],
//       },
//       {
//         heading: "Employee Engagement",
//         desc: "Understand employee sentiment and act on feedback.",
//         subTabs: [
//           {
//             title: "Surveys",
//             desc: "Gain insights from regular pulse checks.",
//             icon: "📊",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     children: [
//       {
//         heading: "Guides",
//         desc: "Deep dives into best practices.",
//         subTabs: [
//           {
//             title: "HR Playbook",
//             desc: "Everything you need to lead HR in 2025.",
//             icon: "📖",
//           },
//         ],
//       },
//       {
//         heading: "Webinars",
//         desc: "Live sessions with industry experts.",
//         subTabs: [
//           {
//             title: "People Strategy",
//             desc: "Interactive learning on culture and performance.",
//             icon: "📬",
//           },
//         ],
//       },
//     ],
//   },
// ];

const Navbar = () => {
//   const [open, setOpen] = useState(null);
//   const [activeTab, setActiveTab] = useState({});
//   const navRef = useRef();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [accordionOpen, setAccordionOpen] = useState(null);

//   useEffect(() => {
//     if (open) {
//       const current = navItems.find((nav) => nav.label === open);
//       if (current?.children?.length) {
//         const firstWithSubTabs = current.children.find((c) => c.subTabs);
//         if (firstWithSubTabs) {
//           setActiveTab({ label: open, tab: firstWithSubTabs.heading });
//         }
//       }
//     }
//   }, [open]);

//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (navRef.current && !navRef.current.contains(e.target)) {
//         setOpen(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
//   return (
//     <nav
//       ref={navRef}
//       className="fixed z-[9999] w-full border-b border-solid border-b-[#11110d1a] bg-[#ffffffa8] px-5 backdrop-blur-[3px]"
//     >
//       <div className="flex flex-wrap md:flex-nowrap justify-between items-center p-4">
//         <div className="text-xl font-bold">Payroll</div>
//         <button
//           className="md:hidden block"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? (
//             <IoMdClose className="w-6 h-6" />
//           ) : (
//             <GiHamburgerMenu className="w-6 h-6" />
//           )}
//         </button>
//         <div className="hidden md:flex gap-8 relative w-full justify-center">
//           {navItems.map((nav, navIdx) => (
//             <div key={navIdx} className="relative">
//               <button
//                 className="flex items-center gap-1 text-gray-700 font-medium"
//                 onClick={() => setOpen(open === nav.label ? null : nav.label)}
//               >
//                 {nav.label} <BiChevronDown className="w-4 h-4" />
//               </button>
//               {open === nav.label && (
//                 <div className="fixed left-1/2 -translate-x-1/2 top-20 z-50 w-full max-w-[95vw] md:w-[1000px] bg-white shadow-xl rounded-2xl p-6 flex">
//                   <div className="w-full md:w-1/4 bg-white space-y-4 relative">
//                     <p className="text-sm font-semibold text-gray-500">
//                       {nav.label}
//                     </p>
//                     {nav.children.map((item, idx) => {
//                       const isLast = idx === nav.children.length - 1;
//                       const isActive =
//                         activeTab.tab === item.heading &&
//                         activeTab.label === nav.label;
//                       return (
//                         <div
//                           key={idx}
//                           onClick={() =>
//                             item.subTabs &&
//                             setActiveTab({
//                               label: nav.label,
//                               tab: item.heading,
//                             })
//                           }
//                           className={`relative cursor-pointer px-3 py-2 rounded-lg rounded-tr-none rounded-br-none  transition-all duration-200 ease-in-out z-10
//                             ${
//                               isActive
//                                 ? `bg-gray-50 font-semibold menu-tab w--current ${
//                                     isLast ? "hide-after" : ""
//                                   }`
//                                 : "text-gray-700"
//                             }`}
//                         >
//                           <p className="text-gray-800">
//                             {item.heading} {item.subTabs && <span>›</span>}
//                           </p>
//                           {item.desc && (
//                             <p className="text-sm text-gray-500">{item.desc}</p>
//                           )}
//                         </div>
//                       );
//                     })}
//                   </div>

//                   <div className="w-full md:w-2/4 p-6 bg-gray-50 relative z-0">
//                     {(() => {
//                       const activeItem = nav.children.find(
//                         (item) =>
//                           item.subTabs &&
//                           activeTab.label === nav.label &&
//                           item.heading === activeTab.tab
//                       );
//                       if (activeItem?.subTabs)
//                         return (
//                           <div className="grid grid-cols-1 gap-4">
//                             {activeItem.subTabs.map((sub, idx) => (
//                               <div
//                                 key={idx}
//                                 className="flex items-start gap-3 transition-transform hover:scale-[1.01]"
//                               >
//                                 <div className="text-2xl">{sub.icon}</div>
//                                 <div>
//                                   <p className="text-base font-semibold text-slate-800">
//                                     {sub.title}
//                                   </p>
//                                   <p className="text-sm text-slate-600">
//                                     {sub.desc}
//                                   </p>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         );
//                       return (
//                         <p className="text-gray-400">No content available</p>
//                       );
//                     })()}
//                   </div>

//                   <div className="w-full md:w-1/4 bg-gradient-to-b ml-6 from-green-100 to-white rounded-tr-2xl rounded-br-2xl p-4 shadow-inner">
//                     <div className="bg-white rounded-lg p-3 shadow">
//                       <img
//                         src="/screenshots/hris.png"
//                         alt="Product"
//                         className="rounded-xl mb-2"
//                       />
//                       <p className="text-sm font-bold text-gray-800">
//                         {activeTab.tab || nav.label} Product Tour
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         Seeing is believing. Take Lattice for a spin.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       {mobileOpen && (
//         <div className="block md:hidden p-4 space-y-6">
//           {navItems.map((nav, navIdx) => (
//             <div key={navIdx} className="border rounded-lg overflow-hidden">
//               <button
//                 className="w-full text-left p-4 font-semibold flex justify-between items-center bg-white"
//                 onClick={() =>
//                   setAccordionOpen(
//                     accordionOpen === nav.label ? null : nav.label
//                   )
//                 }
//               >
//                 {nav.label}
//                 <BiChevronDown
//                   className={`w-4 h-4 transition-transform duration-200 ${
//                     accordionOpen === nav.label ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {accordionOpen === nav.label && (
//                 <div className="flex rounded-b-lg overflow-hidden border-t">
//                   {/* Left Tab Column */}
//                   <div className="w-1/3 bg-white flex flex-col">
//                     {nav.children.map((child, childIdx) => {
//                       const isActive =
//                         activeTab.label === nav.label &&
//                         activeTab.tab === child.heading;
//                       const isLast = childIdx === nav.children.length - 1;
//                       return (
//                         <div
//                           key={childIdx}
//                           onClick={() =>
//                             child.subTabs &&
//                             setActiveTab({
//                               label: nav.label,
//                               tab: child.heading,
//                             })
//                           }
//                           className={`relative px-4 py-3 text-sm cursor-pointer ${
//                             isActive
//                               ? `bg-gray-50 font-semibold text-black menu-tab w--current ${
//                                   isLast ? "hide-after" : ""
//                                 }`
//                               : "text-gray-600"
//                           }`}
//                         >
//                           <p>{child.heading}</p>
//                           <p className="text-xs">{child.desc}</p>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   {/* Right Content Column */}
//                   <div className="w-2/3 bg-gray-50 p-4 space-y-3">
//                     {(() => {
//                       const activeItem = nav.children.find(
//                         (item) =>
//                           activeTab.label === nav.label &&
//                           activeTab.tab === item.heading
//                       );
//                       if (activeItem?.subTabs)
//                         return activeItem.subTabs.map((sub, idx) => (
//                           <div
//                             key={idx}
//                             className="bg-white p-3 rounded-xl shadow-sm flex gap-3 items-start"
//                           >
//                             <div className="text-xl">{sub.icon}</div>
//                             <div>
//                               <p className="font-semibold text-sm">
//                                 {sub.title}
//                               </p>
//                               <p className="text-xs text-gray-600">
//                                 {sub.desc}
//                               </p>
//                             </div>
//                           </div>
//                         ));
//                       return (
//                         <p className="text-sm text-gray-500">
//                           Select a tab to see content.
//                         </p>
//                       );
//                     })()}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//           <style>{`
//             .menu-tab.w--current::before,
//             .menu-tab.w--current::after {
//               content: "";
//               position: absolute;
//               right: 0;
//               width: 1.5rem;
//               aspect-ratio: 1 / 1;
//               background-color: inherit;
//               z-index: 0;
//             }
//             .menu-tab.w--current::before {
//               top: -1.5rem;
//               mask: radial-gradient(
//                 circle at top left,
//                 transparent 72%,
//                 black 72%
//               );
//             }
//             .menu-tab.w--current::after {
//               bottom: -1.5rem;
//               mask: radial-gradient(
//                 circle at bottom left,
//                 transparent 72%,
//                 black 72%
//               );
//             }
//             .menu-tab.w--current.hide-after::after {
//               display: none;
//             }
//           `}</style>
//         </div>
//       )}

//       <style>{`
//         .menu-tab.w--current::before,
//         .menu-tab.w--current::after {
//           content: "";
//           position: absolute;
//           right: 0;
//           width: 2rem;
//           aspect-ratio: 1 / 1;
//           background-color: inherit;
//           z-index: 0;
//         }
//         .menu-tab.w--current::before {
//           top: -2rem;
//           mask: radial-gradient(circle at top left, transparent 72%, black 72%);
//         }
//         .menu-tab.w--current::after {
//           bottom: -2rem;
//           mask: radial-gradient(
//             circle at bottom left,
//             transparent 72%,
//             black 72%
//           );
//         }
//         .menu-tab.w--current.hide-after::after {
//           display: none;
//         }
//       `}</style>
//     </nav>
//   );
// };

 const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      label: "Products",
      dropdown: {
        PRODUCTS: [
          {
            label: "EPFdesk",
            desc: "EPFdesk makes PF easy for you.",
            href: "https://epfdesk.com",
          },
          // { label: "Plugins", desc: "AI in your IDE of choice" },
          // { label: "Reviews", desc: "Code reviews with AI" },
        ],
        // "CORE FEATURES": [
        //   { label: "Cascade", desc: "Agentic chat experience" },
        //   { label: "Tab", desc: "More than just autocomplete" },
        //   {
        //     label: "Cascade on JetBrains",
        //     desc: "Cascade in your JetBrains IDE",
        //   },
        // ],
      },
    },
    {
      label: "Enterprise",
      dropdown: {
        ENTERPRISE: [
          { label: "Solutions", desc: "Custom enterprise tools" },
          { label: "Security", desc: "Secure by default" },
          { label: "Scale", desc: "Built to scale fast" },
        ],
      },
    },
    {
      label: "Company",
      dropdown: {
        COMPANY: [{ label: "About Us",href:'https://about-us-flame.vercel.app/' }, 
          // { label: "Careers" }
        ],
      },
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#f9f3e9] text-black" : "bg-transparent text-white"
      }`}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold"><a href="https://workforce-livid.vercel.app/">WORKFORCE</a></div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <div
                onMouseEnter={() => link.dropdown && setHoveredMenu(link)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {/* Nav Item Label */}
                <a
                  href={link.href || "#"}
                  className={`flex items-center gap-1 px-2 py-1 text-sm font-semibold uppercase ${
                    scrolled
                      ? "bg-[#f9f3e9] text-black"
                      : "bg-transparent text-white"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      />
                    </svg>
                  )}
                </a>

                <AnimatePresence>
                  {hoveredMenu?.label === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 mt-2 rounded-md border border-gray-200 bg-[#fef9f3] p-1 shadow-xl"
                    >
                      <div className="relative inline-flex rounded-sm border border-gray-300 bg-[#fef9f3]">
                        <div className="flex divide-x divide-gray-300">
                          {Object.entries(hoveredMenu.dropdown).map(
                            ([sectionTitle, items], idx) => (
                              <div key={idx} className="px-6 py-4">
                                <p className="mb-4 text-xs font-semibold uppercase text-gray-500 tracking-wider">
                                  {sectionTitle}
                                </p>
                                <div className="flex flex-col gap-2 min-w-[180px]">
                                  {items.map((item, i) => (
                                    <a
                                      key={i}
                                      href={item.href || "#"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group rounded-sm transition-colors hover:bg-black/5  py-1 block"
                                    >
                                      <p className="text-sm font-semibold text-black">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {item.desc}
                                      </p>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Download (Desktop only) */}
        <a
          href="/download"
          className={`hidden lg:inline-block rounded px-4 py-2 text-sm font-semibold text-[#137A6C]`}
          style={{ backgroundColor: "transparent" }}
        ></a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </nav>

      {/* Mobile Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden overflow-hidden px-6 py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        className="w-full flex justify-between items-center text-left font-semibold uppercase text-sm"
                        onClick={() =>
                          setExpandedAccordion(
                            expandedAccordion === link.label ? null : link.label
                          )
                        }
                      >
                        {link.label}
                        <span>
                          {expandedAccordion === link.label ? "-" : "+"}
                        </span>
                      </button>
                      <AnimatePresence>
                        {expandedAccordion === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 pl-4"
                          >
                            {Object.entries(link.dropdown).map(
                              ([title, items], idx) => (
                                <div key={idx} className="">
                                  {/* <p className="text-xs font-semibold uppercase text-gray-500 mb-2">
                                    {title}
                                  </p> */}
                                  {items.map((item, i) => (
                                    <div key={i} className="mb-1">
                                      <a
                                        href={item.href || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${
                                          scrolled
                                            ? "bg-[#f9f3e9] text-[#000000ad]"
                                            : "bg-transparent text-[#fff9]"
                                        } font-semibold uppercase`}
                                      >
                                        {item.label}
                                      </a>
                                      {/* <p className="text-xs text-gray-500">
                                        {item.desc}
                                      </p> */}
                                    </div>
                                  ))}
                                </div>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        scrolled
                          ? "bg-[#f9f3e9] text-black"
                          : "bg-transparent text-white"
                      } font-semibold uppercase`}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}

              {/* <a
                href="/download"
                className="mt-4 inline-block w-full rounded bg-[#34E8BB] px-4 py-2 text-center text-sm font-medium text-[#137A6C]"
              >
                Download
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
