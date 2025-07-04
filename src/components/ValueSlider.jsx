import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const values = [
  { title: "Ship, shipmate, self", img: "/images/shipmate.png", desc: "We prioritize the mission..." },
  { title: "Own the outcome", img: "/images/ownership.png", desc: "We take initiative, embrace responsibility..." },
  { title: "Clear eyes", img: "/images/clarity.png", desc: "We approach challenges with honesty..." },
  { title: "What's next", img: "/images/whats-next.png", desc: "We’re always curious and improving..." },
  { title: "Adapt and overcome", img: "/images/adapt.png", desc: "We evolve with challenges..." },
  { title: "Trust in the team", img: "/images/trust.png", desc: "We grow together through trust..." },
];

export default function ValuesSlider() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Measure cards per page
  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current || !cardRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = cardRef.current.offsetWidth + 16; // include gap-4
      const perPage = Math.floor(containerWidth / cardWidth) || 1;
      const pages = Math.ceil(values.length / perPage);

      setCardsPerPage(perPage);
      setTotalPages(pages);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Scroll handler
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const pageWidth = container.offsetWidth;
      const currentPage = Math.round(scrollLeft / pageWidth);
      setActivePage(currentPage);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToPage = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const pageWidth = container.offsetWidth;
    container.scrollTo({ left: index * pageWidth, behavior: "smooth" });
    setActivePage(index);
  };

  const next = () => {
    if (activePage < totalPages - 1) scrollToPage(activePage + 1);
  };

  const prev = () => {
    if (activePage > 0) scrollToPage(activePage - 1);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our daily values</h2>
          <p className="text-gray-600 text-lg">
            We’re looking for people who align with our value framework.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 hidden md:block"
            disabled={activePage === 0}
          >
            <BiChevronLeft size={24} />
          </button>

          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1 scroll-smooth
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {values.map((item, i) => (
              <div
                key={i}
                ref={i === 0 ? cardRef : null}
                className="snap-start shrink-0 rounded-xl bg-gray-50 shadow-md 
                flex flex-col items-center text-center justify-center 
                p-6 min-w-[300px] sm:min-w-[350px] md:min-w-[400px] lg:min-w-[420px] 
                h-[420px]"
              >
                <img src={item.img} alt={item.title} className="w-20 h-20 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-4 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 hidden md:block"
            disabled={activePage === totalPages - 1}
          >
            <BiChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              className={`h-2 w-2 rounded-full transition duration-300 ${
                activePage === i ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
