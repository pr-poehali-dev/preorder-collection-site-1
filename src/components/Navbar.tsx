import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card py-3 shadow-lg shadow-purple-500/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="font-display font-bold text-xl text-white">
            PrintmakerTomsk
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "О продукте", id: "product" },
            { label: "Предзаказ", id: "preorder" },
            { label: "Контакты", id: "contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/70 hover:text-white text-sm font-medium transition-all duration-200 hover:text-purple-400"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("preorder")}
          className="hidden md:flex glow-btn text-white font-semibold text-sm px-5 py-2 rounded-xl relative overflow-hidden shimmer-btn"
        >
          Оформить предзаказ
        </button>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4">
          {[
            { label: "О продукте", id: "product" },
            { label: "Предзаказ", id: "preorder" },
            { label: "Контакты", id: "contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/70 hover:text-white text-left font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("preorder")}
            className="glow-btn text-white font-semibold text-sm px-5 py-3 rounded-xl mt-2"
          >
            Оформить предзаказ
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;