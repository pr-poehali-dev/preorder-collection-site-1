import { useState } from "react";
import Icon from "@/components/ui/icon";

const Preorder = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="preorder"
        className="py-32"
        style={{ backgroundColor: "var(--dark-bg)" }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow"
            style={{
              background:
                "linear-gradient(135deg, var(--neon-purple), var(--neon-pink))",
            }}
          >
            <Icon name="CheckCheck" size={40} className="text-white" />
          </div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Предзаказ оформлен! 🎉
          </h2>
          <p className="text-white/60 text-lg mb-6 leading-relaxed">
            Мы получили вашу заявку. На{" "}
            <span className="text-white font-semibold">{form.email}</span>{" "}
            придёт подтверждение с инструкциями.
          </p>
          <div className="glass-card neon-border rounded-2xl p-6 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Info" size={18} className="text-purple-400" />
              <span className="text-white font-semibold">Что дальше?</span>
            </div>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Check" size={14} className="text-green-400" /> Письмо с подтверждением — в течение 5 минут
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={14} className="text-green-400" /> Ссылка на оплату — там же в письме
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Check" size={14} className="text-green-400" /> Доступ к продукту — в день запуска
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", email: "", phone: "" });
            }}
            className="mt-6 text-white/40 hover:text-white/70 text-sm transition-colors"
          >
            Оформить ещё один предзаказ
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="preorder"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,45,155,0.1) 0%, transparent 70%)",
          bottom: 0,
          right: 0,
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4 neon-border px-4 py-1 rounded-full glass-card">
            Предзаказ
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
            Оформить <span className="gradient-text">предзаказ</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Специальные условия для первых покупателей — действуют только сейчас.
          </p>
        </div>

        <div className="glass-card neon-border rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-white/60 text-xs mb-2 ml-1">Имя *</label>
              <input
                type="text"
                placeholder="Иван Иванов"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-white placeholder-white/20 text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(168,85,247,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(168,85,247,0.2)")
                }
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs mb-2 ml-1">Email *</label>
              <input
                type="email"
                placeholder="ivan@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-white placeholder-white/20 text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(168,85,247,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(168,85,247,0.2)")
                }
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs mb-2 ml-1">Телефон</label>
              <input
                type="tel"
                placeholder="+7 (999) 000-00-00"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-white placeholder-white/20 text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(168,85,247,0.6)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(168,85,247,0.2)")
                }
              />
            </div>

            <div className="mt-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon name="Lock" size={14} className="text-white/30" />
                  <span className="text-white/30 text-xs">Безопасная оплата</span>
                </div>
                <div className="flex gap-2">
                  {["Visa", "MC", "МИР", "SBP"].map((m) => (
                    <span
                      key={m}
                      className="text-xs px-2 py-0.5 rounded text-white/40"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full glow-btn shimmer-btn relative text-white font-bold py-4 rounded-2xl text-base overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Icon name="CreditCard" size={18} />
                  Оформить предзаказ
                </span>
              </button>
            </div>

            <p className="text-white/25 text-xs text-center leading-relaxed">
              Нажимая кнопку, вы соглашаетесь с условиями оферты. Оплата
              производится через защищённый шлюз.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Preorder;
