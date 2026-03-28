import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const PRODUCT_IMAGE = "https://cdn.poehali.dev/projects/ef5ea4aa-617f-4deb-8d6e-dbad384cea0b/files/65907b5e-7b6f-4616-843f-feded82cae4c.jpg";

const FEATURES = [
  { icon: "Zap", title: "Молниеносная скорость", desc: "Революционная технология, которая меняет правила игры" },
  { icon: "Shield", title: "Надёжная защита", desc: "Военный уровень безопасности для ваших данных" },
  { icon: "Sparkles", title: "ИИ-интеграция", desc: "Встроенный искусственный интеллект нового поколения" },
  { icon: "Globe", title: "Глобальная сеть", desc: "Работает везде — в любой точке планеты" },
];

const STATS = [
  { value: "4 200+", label: "В листе ожидания" },
  { value: "73%", label: "Финансирование" },
  { value: "28 дней", label: "До запуска" },
];

export default function Index() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);
  const [days, setDays] = useState(27);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(45);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => {
        if (s > 0) return s - 1;
        setMinutes(m => {
          if (m > 0) return m - 1;
          setHours(h => {
            if (h > 0) return h - 1;
            setDays(d => d - 1);
            return 23;
          });
          return 59;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handlePreorder = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="min-h-screen noise-bg" style={{ background: "var(--dark-bg)" }}>
      {/* Orbs background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="animate-orb absolute w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--neon-purple), transparent)", top: "10%", left: "5%", filter: "blur(60px)" }} />
        <div className="animate-orb absolute w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent)", top: "60%", right: "5%", filter: "blur(60px)", animationDelay: "3s" }} />
        <div className="animate-orb absolute w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--neon-pink), transparent)", bottom: "20%", left: "40%", filter: "blur(60px)", animationDelay: "5s" }} />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card" style={{ borderBottom: "1px solid rgba(168,85,247,0.15)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-xl tracking-widest gradient-text font-bold">NEXUS</span>
          <div className="hidden md:flex gap-8">
            {[["О продукте", "product"], ["Предзаказ", "preorder"], ["Контакты", "contacts"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide uppercase">
                {label}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo("preorder")} className="glow-btn shimmer-btn relative overflow-hidden px-5 py-2 rounded-full text-white text-sm font-semibold font-body">
            Предзаказ
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative grid-bg min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in-up"
              style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)" }}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-body text-white/70 tracking-widest uppercase">Приём предзаказов открыт</span>
            </div>

            <h1 className="font-display text-6xl lg:text-8xl font-bold leading-none mb-6 animate-fade-in-up delay-100">
              <span className="text-white">Продукт</span><br />
              <span className="neon-text-purple">будущего</span><br />
              <span className="neon-text-cyan">здесь</span>
            </h1>

            <p className="font-body text-white/60 text-lg mb-8 leading-relaxed max-w-md animate-fade-in-up delay-200">
              Революционный продукт, который изменит твою жизнь навсегда. 
              Присоединяйся к тысячам первопроходцев.
            </p>

            {/* Countdown */}
            <div className="flex gap-4 mb-8 animate-fade-in-up delay-300">
              {[["Дней", days], ["Часов", hours], ["Минут", minutes], ["Секунд", seconds]].map(([label, val]) => (
                <div key={label} className="text-center glass-card rounded-xl px-3 py-3 min-w-[64px]">
                  <div className="font-display text-2xl font-bold neon-text-purple">{pad(Number(val))}</div>
                  <div className="font-body text-xs text-white/40 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 animate-fade-in-up delay-400">
              <button onClick={() => scrollTo("preorder")} className="glow-btn shimmer-btn relative overflow-hidden px-8 py-4 rounded-full text-white font-semibold font-body text-base">
                Оформить предзаказ
              </button>
              <button onClick={() => scrollTo("product")} className="glow-btn-secondary px-8 py-4 rounded-full font-semibold font-body text-base">
                Узнать больше
              </button>
            </div>
          </div>

          {/* Product image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-3xl opacity-60" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.3), transparent)", filter: "blur(40px)" }} />
            <div className="relative neon-border rounded-3xl overflow-hidden">
              <img src={PRODUCT_IMAGE} alt="Продукт" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(0,245,255,0.1))" }} />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-card neon-border rounded-2xl px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(168,85,247,0.2)" }}>
                  <Icon name="TrendingUp" size={18} className="text-purple-400" />
                </div>
                <div>
                  <div className="font-display text-white font-bold text-lg">4 200+</div>
                  <div className="font-body text-white/40 text-xs">в листе ожидания</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6 reveal">
            {STATS.map((stat) => (
              <div key={stat.label} className="glass-card neon-border rounded-2xl p-8 text-center">
                <div className="font-display text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="font-body text-white/50 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div className="mt-8 reveal glass-card neon-border rounded-2xl p-6">
            <div className="flex justify-between mb-3">
              <span className="font-body text-white/70 text-sm">Прогресс финансирования</span>
              <span className="font-display font-bold neon-text-purple">73%</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(168,85,247,0.1)" }}>
              <div className="progress-bar h-full rounded-full" style={{ background: "linear-gradient(90deg, var(--neon-purple), var(--neon-pink))", width: "0%" }} />
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-body text-white/40 text-xs">₽ 7 300 000 собрано</span>
              <span className="font-body text-white/40 text-xs">Цель: ₽ 10 000 000</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PRODUCT */}
      <section id="product" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.3)" }}>
              <Icon name="Package" size={14} className="text-cyan-400" />
              <span className="text-xs font-body text-cyan-400 tracking-widest uppercase">О продукте</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4">
              Почему именно <span className="gradient-text">NEXUS</span>?
            </h2>
            <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
              Мы переосмыслили всё. Каждая деталь создана с заботой о тебе.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`glass-card neon-border rounded-2xl p-8 reveal delay-${(i + 1) * 100} group hover:border-purple-500/50 transition-all duration-300`}>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(0,245,255,0.1))", border: "1px solid rgba(168,85,247,0.3)" }}>
                    <Icon name={f.icon} size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">{f.title}</h3>
                    <p className="font-body text-white/50 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREORDER */}
      <section id="preorder" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: "rgba(255,45,155,0.1)", border: "1px solid rgba(255,45,155,0.3)" }}>
                <Icon name="CreditCard" size={14} className="text-pink-400" />
                <span className="text-xs font-body text-pink-400 tracking-widest uppercase">Предзаказ</span>
              </div>
              <h2 className="font-display text-5xl font-bold text-white mb-6">
                Будь <span className="neon-text-pink" style={{ color: "var(--neon-pink)", textShadow: "0 0 20px rgba(255,45,155,0.8)" }}>первым</span>
              </h2>
              <p className="font-body text-white/60 text-lg mb-8 leading-relaxed">
                Оформи предзаказ сейчас и получи специальную цену, эксклюзивные бонусы и приоритетную доставку.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  ["Скидка 30%", "Только для первых 500 участников"],
                  ["Ранний доступ", "За 2 недели до официального запуска"],
                  ["Персональная поддержка", "Выделенный менеджер для вас"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(168,85,247,0.2)", border: "1px solid rgba(168,85,247,0.4)" }}>
                      <Icon name="Check" size={12} className="text-purple-400" />
                    </div>
                    <div>
                      <span className="font-body text-white font-semibold">{title}</span>
                      <span className="font-body text-white/40 ml-2 text-sm">— {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold neon-text-purple">₽ 2 490</span>
                <span className="font-body text-white/30 line-through text-2xl">₽ 3 990</span>
                <span className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ background: "rgba(255,45,155,0.15)", color: "var(--neon-pink)", border: "1px solid rgba(255,45,155,0.3)" }}>
                  −38%
                </span>
              </div>
            </div>

            <div className="reveal delay-200">
              {submitted ? (
                <div className="glass-card neon-border rounded-3xl p-10 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow"
                    style={{ background: "linear-gradient(135deg, var(--neon-purple), var(--neon-pink))" }}>
                    <Icon name="CheckCircle" size={36} className="text-white" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-3">Отлично!</h3>
                  <p className="font-body text-white/60 leading-relaxed">
                    Ваш предзаказ принят. Мы свяжемся с вами для подтверждения оплаты.
                  </p>
                </div>
              ) : (
                <div className="glass-card neon-border rounded-3xl p-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-6">Оформить предзаказ</h3>
                  <form onSubmit={handlePreorder} className="space-y-4">
                    <div>
                      <label className="font-body text-white/60 text-sm mb-2 block uppercase tracking-wider">Ваше имя</label>
                      <input
                        type="text" required value={name} onChange={e => setName(e.target.value)}
                        placeholder="Иван Петров"
                        className="w-full px-4 py-3 rounded-xl font-body text-white placeholder-white/30 outline-none focus:ring-2 transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(168,85,247,0.3)", focusRingColor: "var(--neon-purple)" }}
                      />
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-sm mb-2 block uppercase tracking-wider">Email</label>
                      <input
                        type="email" required value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="ivan@example.com"
                        className="w-full px-4 py-3 rounded-xl font-body text-white placeholder-white/30 outline-none focus:ring-2 transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(168,85,247,0.3)" }}
                      />
                    </div>
                    <div className="glass-card rounded-xl p-4" style={{ border: "1px solid rgba(0,245,255,0.2)" }}>
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name="CreditCard" size={18} className="text-cyan-400" />
                        <span className="font-body text-white/70 text-sm">Способ оплаты</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {["Карта", "СБП", "Криптo"].map((method) => (
                          <label key={method} className="cursor-pointer">
                            <input type="radio" name="payment" value={method} className="sr-only" defaultChecked={method === "Карта"} />
                            <div className="text-center px-3 py-2 rounded-lg font-body text-sm text-white/60 hover:text-white transition-all"
                              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(168,85,247,0.2)" }}>
                              {method}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="glow-btn shimmer-btn relative overflow-hidden w-full py-4 rounded-xl text-white font-semibold font-body text-base mt-2">
                      Оплатить ₽ 2 490
                    </button>
                    <p className="font-body text-white/30 text-xs text-center">
                      Нажимая кнопку, вы соглашаетесь с условиями предзаказа
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.3)" }}>
              <Icon name="MessageCircle" size={14} className="text-cyan-400" />
              <span className="text-xs font-body text-cyan-400 tracking-widest uppercase">Контакты</span>
            </div>
            <h2 className="font-display text-5xl font-bold text-white mb-4">
              Есть <span className="neon-text-cyan">вопросы</span>?
            </h2>
            <p className="font-body text-white/50 text-lg">Мы на связи 24/7 и ответим в течение часа</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 reveal">
              {[
                { icon: "Mail", label: "Email", value: "hello@nexus.ru", color: "purple" },
                { icon: "Phone", label: "Телефон", value: "+7 (800) 555-00-00", color: "cyan" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Будущего, 1", color: "pink" },
              ].map(({ icon, label, value, color }) => (
                <div key={label} className="glass-card neon-border rounded-2xl p-6 flex items-center gap-5 group hover:scale-[1.02] transition-all duration-200">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `rgba(168,85,247,0.15)`, border: `1px solid rgba(168,85,247,0.3)` }}>
                    <Icon name={icon} size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="font-body text-white/40 text-xs uppercase tracking-wider mb-1">{label}</div>
                    <div className="font-body text-white font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal delay-200">
              {contactSent ? (
                <div className="glass-card neon-border-cyan rounded-3xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(0,245,255,0.15)", border: "1px solid rgba(0,245,255,0.4)" }}>
                    <Icon name="Send" size={28} className="text-cyan-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Сообщение отправлено!</h3>
                  <p className="font-body text-white/50">Ответим в течение часа</p>
                </div>
              ) : (
                <div className="glass-card neon-border-cyan rounded-3xl p-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-6">Написать нам</h3>
                  <form onSubmit={handleContact} className="space-y-4">
                    <div>
                      <label className="font-body text-white/60 text-sm mb-2 block uppercase tracking-wider">Имя</label>
                      <input type="text" required value={contactForm.name}
                        onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 rounded-xl font-body text-white placeholder-white/30 outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,245,255,0.2)" }}
                      />
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-sm mb-2 block uppercase tracking-wider">Email</label>
                      <input type="email" required value={contactForm.email}
                        onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl font-body text-white placeholder-white/30 outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,245,255,0.2)" }}
                      />
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-sm mb-2 block uppercase tracking-wider">Сообщение</label>
                      <textarea required rows={4} value={contactForm.message}
                        onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Ваш вопрос..."
                        className="w-full px-4 py-3 rounded-xl font-body text-white placeholder-white/30 outline-none resize-none transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,245,255,0.2)" }}
                      />
                    </div>
                    <button type="submit" className="glow-btn-secondary w-full py-4 rounded-xl font-semibold font-body text-base">
                      Отправить сообщение
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-10" style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-display text-xl gradient-text font-bold tracking-widest">NEXUS</span>
          <p className="font-body text-white/30 text-sm">© 2026 NEXUS. Все права защищены.</p>
          <div className="flex gap-4">
            {["Instagram", "Twitter", "Telegram"].map(social => (
              <span key={social} className="font-body text-white/30 text-sm hover:text-white/60 cursor-pointer transition-colors">{social}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}