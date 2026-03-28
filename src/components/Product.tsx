import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Zap",
    title: "Молниеносная скорость",
    desc: "Технология нового поколения обеспечивает работу в 10× быстрее любых аналогов на рынке.",
    color: "var(--neon-purple)",
  },
  {
    icon: "Shield",
    title: "Максимальная защита",
    desc: "Военный уровень шифрования и многоуровневая система безопасности для ваших данных.",
    color: "var(--neon-cyan)",
  },
  {
    icon: "Layers",
    title: "Гибкая интеграция",
    desc: "Подключается к любым системам и сервисам без сложных настроек за 5 минут.",
    color: "var(--neon-pink)",
  },
  {
    icon: "BarChart3",
    title: "Умная аналитика",
    desc: "ИИ-аналитика в реальном времени с прогнозами и персональными рекомендациями.",
    color: "var(--neon-purple)",
  },
  {
    icon: "Globe",
    title: "Везде и всегда",
    desc: "Работает на всех устройствах и платформах без потери качества и функций.",
    color: "var(--neon-cyan)",
  },
  {
    icon: "HeartHandshake",
    title: "Поддержка 24/7",
    desc: "Команда экспертов всегда на связи — мы не бросаем клиентов после покупки.",
    color: "var(--neon-pink)",
  },
];

const Product = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="product"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      <div
        className="absolute inset-0 grid-bg opacity-50"
        style={{ pointerEvents: "none" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4 neon-border px-4 py-1 rounded-full glass-card">
            О продукте
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
            Почему выбирают{" "}
            <span className="gradient-text">LaunchX?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Мы создали продукт, который решает реальные проблемы. Без лишнего
            шума — только то, что важно для вашего роста.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`glass-card rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 group cursor-default reveal delay-${(i + 1) * 100}`}
              style={{
                borderColor: `${feature.color}30`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}30, ${feature.color}10)`,
                  border: `1px solid ${feature.color}40`,
                }}
              >
                <Icon
                  name={feature.icon as any}
                  size={22}
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 reveal">
          <div
            className="glass-card rounded-3xl p-8 md:p-12 neon-border"
            style={{ background: "rgba(168,85,247,0.05)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                  Как это работает
                </span>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white mt-3 mb-5">
                  Три шага к{" "}
                  <span className="gradient-text">результату</span>
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    { step: "01", text: "Оформляете предзаказ и получаете приоритетный доступ" },
                    { step: "02", text: "Мы присылаем продукт первым — до публичного релиза" },
                    { step: "03", text: "Используете и растёте — мы всегда рядом" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-sm"
                        style={{
                          background: "linear-gradient(135deg, var(--neon-purple), var(--neon-pink))",
                        }}
                      >
                        {item.step}
                      </div>
                      <p className="text-white/70 mt-2 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { label: "Скорость работы", value: 95 },
                  { label: "Удовлетворённость клиентов", value: 98 },
                  { label: "Экономия времени", value: 80 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/60">{bar.label}</span>
                      <span className="text-purple-400 font-semibold">
                        {bar.value}%
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${bar.value}%`,
                          background:
                            "linear-gradient(90deg, var(--neon-purple), var(--neon-pink))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
