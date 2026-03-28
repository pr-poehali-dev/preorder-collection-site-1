import { useState } from "react";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(168,85,247,0.2)",
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-white placeholder-white/20 text-sm outline-none transition-all";

  return (
    <section
      id="contacts"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-400 mb-4 neon-border px-4 py-1 rounded-full glass-card">
            Контакты
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
            Остались <span className="gradient-text">вопросы?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Напишите нам — ответим в течение нескольких часов.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            {[
              {
                icon: "Mail",
                title: "Email",
                value: "hello@launchx.ru",
                sub: "Ответим в течение 2 часов",
                color: "var(--neon-purple)",
              },
              {
                icon: "MessageCircle",
                title: "Telegram",
                value: "@launchx_support",
                sub: "Онлайн с 9:00 до 22:00",
                color: "var(--neon-cyan)",
              },
              {
                icon: "Phone",
                title: "Телефон",
                value: "+7 (800) 000-00-00",
                sub: "Бесплатно по России",
                color: "var(--neon-pink)",
              },
            ].map((contact) => (
              <div
                key={contact.title}
                className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:scale-[1.02] transition-all duration-300 group"
                style={{
                  border: `1px solid ${contact.color}25`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${contact.color}30, ${contact.color}10)`,
                    border: `1px solid ${contact.color}40`,
                  }}
                >
                  <Icon
                    name={contact.icon}
                    size={20}
                    style={{ color: contact.color }}
                  />
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-1">{contact.title}</div>
                  <div className="text-white font-semibold text-base">
                    {contact.value}
                  </div>
                  <div className="text-white/30 text-xs mt-0.5">{contact.sub}</div>
                </div>
              </div>
            ))}

            <div className="glass-card rounded-2xl p-6 neon-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/60 text-sm">Мы сейчас онлайн</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Среднее время ответа — 47 минут. Для срочных вопросов используйте Telegram.
              </p>
            </div>
          </div>

          <div className="glass-card neon-border rounded-3xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--neon-purple), var(--neon-cyan))",
                  }}
                >
                  <Icon name="Send" size={32} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  Сообщение отправлено!
                </h3>
                <p className="text-white/50 text-sm">
                  Мы свяжемся с вами на{" "}
                  <span className="text-purple-400">{form.email}</span> в
                  ближайшее время.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 text-white/30 hover:text-white/60 text-sm transition-colors"
                >
                  Отправить ещё одно сообщение
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-2xl text-white mb-6">
                  Написать нам
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-white/60 text-xs mb-2 ml-1">Имя *</label>
                    <input
                      type="text"
                      placeholder="Иван"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className={inputClass}
                      style={inputStyle}
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
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(168,85,247,0.6)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(168,85,247,0.2)")
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs mb-2 ml-1">Сообщение *</label>
                    <textarea
                      placeholder="Расскажите, что вас интересует..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={4}
                      className={inputClass + " resize-none"}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(168,85,247,0.6)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(168,85,247,0.2)")
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full glow-btn shimmer-btn relative text-white font-bold py-4 rounded-2xl text-base overflow-hidden mt-2"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Icon name="Send" size={16} />
                      Отправить сообщение
                    </span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className="mt-20 pt-8 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="text-white/20 text-sm">
          © 2025 LaunchX. Все права защищены.
        </p>
      </div>
    </section>
  );
};

export default Contacts;
