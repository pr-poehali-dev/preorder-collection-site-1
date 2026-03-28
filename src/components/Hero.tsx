import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };
    el.addEventListener("mousemove", handleMouse);
    return () => el.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise-bg"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none animate-orb"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)",
          top: "20%",
          right: "10%",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,45,155,0.12) 0%, transparent 70%)",
          bottom: "20%",
          left: "10%",
          filter: "blur(40px)",
          animationDelay: "3s",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass-card neon-border px-4 py-2 rounded-full text-sm font-medium text-purple-300 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Приём предзаказов открыт
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 animate-fade-in-up delay-100">
          Будущее уже{" "}
          <span className="gradient-text neon-text-purple">здесь.</span>
          <br />
          Будь первым.
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
          Революционный продукт, который изменит твой подход. Оформи предзаказ
          сегодня и получи эксклюзивные условия для первых покупателей.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <button
            onClick={() => scrollTo("preorder")}
            className="glow-btn shimmer-btn relative text-white font-bold px-8 py-4 rounded-2xl text-base overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Icon name="Rocket" size={18} />
              Оформить предзаказ
            </span>
          </button>

        </div>

        <div className="flex items-center justify-center gap-10 mt-16 animate-fade-in-up delay-400">
          {[
            { value: "2 400+", label: "предзаказов" },
            { value: "73%", label: "цель собрана" },
            { value: "48ч", label: "до конца акции" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl gradient-text">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs md:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-float">
          <button
            onClick={() => scrollTo("product")}
            className="text-white/30 hover:text-white/60 transition-colors"
          >
            <Icon name="ChevronDown" size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;