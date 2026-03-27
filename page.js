const CALENDLY_URL = "https://calendly.com/your-booking-link";
const STRIPE_URL = "https://buy.stripe.com/your-payment-link";
const CRM_FORM_URL = "https://formspree.io/f/your-form-id";
const SUPPORT_EMAIL = "hello@bistalkmarketing.ai";

export default function BistalkWebsite() {
  const features = [
    {
      title: "Targeted Growth Campaigns",
      desc: "Reach the right audience with niche targeting, engagement workflows, and strategic outreach built to attract real prospects.",
    },
    {
      title: "Lead-Focused Instagram Strategy",
      desc: "Turn your Instagram into an online resume that builds authority, starts conversations, and drives inquiries every day.",
    },
    {
      title: "Done-For-You Execution",
      desc: "We help handle campaign setup, optimization, audience direction, and growth systems so you can focus on closing deals.",
    },
    {
      title: "Scalable Client Acquisition",
      desc: "Built for coaches, brands, artists, real estate pros, local businesses, and entrepreneurs who want steady attention and more opportunities.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Audit & Positioning",
      desc: "We review your profile, offer, niche, and messaging so your page is ready to convert attention into leads.",
    },
    {
      number: "02",
      title: "Targeting & Setup",
      desc: "We define your ideal audience and build a campaign strategy around the people most likely to buy from you.",
    },
    {
      number: "03",
      title: "Daily Growth Engine",
      desc: "Your campaign begins generating visibility, profile visits, conversations, and new opportunities consistently.",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      desc: "We refine messaging, targeting, and positioning to improve lead quality and help you grow with more confidence.",
    },
  ];

  const testimonials = [
    {
      name: "Agency Owner",
      quote:
        "Bistalk helped us turn our Instagram from a dead page into a lead source we actually take seriously.",
    },
    {
      name: "Coach & Consultant",
      quote:
        "The biggest difference was consistency. We started getting profile visits, DMs, and more qualified conversations.",
    },
    {
      name: "Music Brand",
      quote:
        "They understood how to grow attention around our brand without making us look cheap or spammy.",
    },
  ];

  const faqs = [
    {
      q: "What is Bistalk?",
      a: "Bistalk is an Instagram growth and lead generation service designed to help brands, entrepreneurs, and businesses attract more attention, conversations, and clients through strategic audience targeting and growth systems.",
    },
    {
      q: "Who is this for?",
      a: "Bistalk is ideal for business owners, creators, agencies, coaches, real estate professionals, artists, and local brands that want more visibility and inbound opportunities from Instagram.",
    },
    {
      q: "Do I need a big following already?",
      a: "No. The goal is to improve your positioning and help you build momentum whether you are starting smaller or already have traction.",
    },
    {
      q: "How do I get started?",
      a: "Choose a plan, book a call, or submit the form. From there we review your page, align the targeting strategy, and launch your growth system.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$249/mo",
      desc: "For entrepreneurs who want consistent visibility and a simple growth engine.",
      items: [
        "Instagram growth campaign",
        "Audience targeting setup",
        "Profile optimization guidance",
        "Monthly strategy support",
      ],
      cta: "Start Starter",
      href: STRIPE_URL,
      featured: false,
    },
    {
      name: "Growth",
      price: "$497/mo",
      desc: "For brands ready to push harder and turn Instagram into a real acquisition channel.",
      items: [
        "Everything in Starter",
        "Enhanced campaign strategy",
        "Offer and bio positioning help",
        "Lead flow optimization",
      ],
      cta: "Choose Growth",
      href: STRIPE_URL,
      featured: true,
    },
    {
      name: "Scale",
      price: "Custom",
      desc: "For businesses that want a more hands-on strategy and expansion support.",
      items: [
        "Custom campaign plan",
        "Advanced niche targeting",
        "Sales process support",
        "Priority consulting",
      ],
      cta: "Book Strategy Call",
      href: CALENDLY_URL,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(168,85,247,.15),transparent_25%)]" />
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black font-black">
                B
              </div>
              <div>
                <div className="text-lg font-semibold tracking-wide">Bistalk</div>
                <div className="text-xs text-white/60">Instagram Growth Systems</div>
              </div>
            </div>
            <nav className="hidden gap-6 text-sm text-white/80 md:flex">
              <a href="#features" className="transition hover:text-white">Features</a>
              <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
              <a href="#pricing" className="transition hover:text-white">Pricing</a>
              <a href="#faq" className="transition hover:text-white">FAQ</a>
            </nav>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Book a Call
            </a>
          </header>

          <div className="relative grid gap-16 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                Helping brands turn Instagram attention into leads
              </div>
              <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl">
                Turn Instagram
                <br />
                Into a Daily
                <br />
                Client Acquisition Machine.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Bistalk helps businesses, creators, agencies, and artists use Instagram more strategically to generate visibility, start more conversations, and attract more clients.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black shadow-2xl shadow-white/10 transition hover:scale-[1.02]"
                >
                  Book a Strategy Call
                </a>
                <a
                  href={STRIPE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Join Bistalk Now
                </a>
              </div>
              <div className="mt-10 grid gap-6 text-sm text-white/60 sm:grid-cols-3">
                <div>
                  <div className="text-2xl font-bold text-white">1,000+</div>
                  <div>Clients served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">2017+</div>
                  <div>Years in the game</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Daily</div>
                  <div>Lead-focused activity</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white/50">Campaign Overview</div>
                      <div className="text-xl font-semibold">Growth Dashboard</div>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      Live Strategy
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/50">Profile Visits</div>
                      <div className="mt-2 text-3xl font-black">+184%</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/50">DM Opportunities</div>
                      <div className="mt-2 text-3xl font-black">Daily</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/50">Audience Focus</div>
                      <div className="mt-2 text-xl font-bold">Niche Targeting</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/50">Primary Goal</div>
                      <div className="mt-2 text-xl font-bold">More Leads</div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-4">
                    <div className="text-sm font-medium">Instagram should not just look good.</div>
                    <div className="mt-1 text-sm text-white/60">It should position you, attract the right people, and create conversations that turn into revenue.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-4 pb-20 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
            <div className="text-sm text-white/50">Offer</div>
            <div className="mt-2 text-2xl font-black">Done-for-you Instagram growth</div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
            <div className="text-sm text-white/50">Primary CTA</div>
            <div className="mt-2 text-2xl font-black">Book the call or pay now</div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900 p-6">
            <div className="text-sm text-white/50">Best Use</div>
            <div className="mt-2 text-2xl font-black">Lead gen for businesses and creators</div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">What You Get</div>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">A smarter Instagram growth system for serious brands.</h2>
          <p className="mt-4 text-lg text-white/65">
            Built for people who want more than vanity metrics. The focus is visibility, positioning, conversations, and client acquisition.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white font-black text-black">
                ★
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">How It Works</div>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">From profile to pipeline.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="rounded-[1.75rem] border border-white/10 bg-neutral-900 p-6">
                <div className="text-sm font-bold text-white/40">{step.number}</div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">Why Bistalk</div>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Your audience is already on Instagram.</h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              The question is whether your brand is being positioned in front of them consistently and in a way that actually creates trust.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Build authority without looking desperate.",
                "Start more relevant conversations with the right audience.",
                "Create a cleaner path from profile visit to inquiry.",
                "Support your offer with stronger positioning and strategy.",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                  <div className="text-white/80">{point}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="text-4xl font-black text-white/20">“</div>
                <p className="mt-2 leading-7 text-white/75">{item.quote}</p>
                <div className="mt-6 text-sm font-semibold text-white/55">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">Pricing</div>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Choose the plan that fits your growth stage.</h2>
            <p className="mt-4 text-lg text-white/65">
              Simple options for entrepreneurs, brands, and businesses that want to turn attention into opportunities.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] border p-8 ${
                  plan.featured
                    ? "border-white bg-white text-black shadow-2xl shadow-white/10"
                    : "border-white/10 bg-neutral-900 text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black">{plan.name}</h3>
                  {plan.featured && (
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="mt-4 text-4xl font-black">{plan.price}</div>
                <p className={`mt-3 leading-7 ${plan.featured ? "text-black/70" : "text-white/65"}`}>{plan.desc}</p>
                <div className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className={`h-2.5 w-2.5 rounded-full ${plan.featured ? "bg-black" : "bg-white"}`} />
                      <span className={plan.featured ? "text-black/80" : "text-white/80"}>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-block w-full rounded-2xl px-5 py-4 text-center font-semibold transition hover:scale-[1.01] ${
                    plan.featured
                      ? "bg-black text-white"
                      : "border border-white/15 bg-white/5 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">FAQ</div>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Questions clients usually ask.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 leading-7 text-white/65">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-[1fr_.9fr] lg:p-12">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/50">Capture Leads</div>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Ready to make Instagram work harder for your business?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                This form is already set up to work with a form endpoint. Replace the placeholder URL at the top of the file with your Formspree, GoHighLevel, or CRM form action and new leads will start flowing in.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/65">
                <div className="rounded-full border border-white/10 px-4 py-2">Book calls</div>
                <div className="rounded-full border border-white/10 px-4 py-2">Collect leads</div>
                <div className="rounded-full border border-white/10 px-4 py-2">Accept payments</div>
                <div className="rounded-full border border-white/10 px-4 py-2">Close clients</div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-950 p-6">
              <form action={CRM_FORM_URL} method="POST" className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-white/60">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/30"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/60">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/60">Business Type</label>
                  <input
                    name="businessType"
                    type="text"
                    placeholder="Coach, artist, agency, real estate, local business..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/60">What do you want help with?</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your goals..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-white px-5 py-4 font-semibold text-black transition hover:scale-[1.01]"
                >
                  Submit Inquiry
                </button>
                <p className="text-center text-xs text-white/40">
                  Replace the 3 placeholder links at the top of this file before publishing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center md:p-8">
          <div className="text-sm uppercase tracking-[0.25em] text-white/50">Direct contact</div>
          <div className="mt-3 text-2xl font-black md:text-4xl">Need a custom setup?</div>
          <p className="mt-3 text-white/65">Email {SUPPORT_EMAIL} or send traffic straight to your booking link.</p>
        </div>
      </section>

      <footer className="border-t border-white/10 pb-24 md:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <span className="font-semibold text-white">Bistalk</span> — Instagram Growth Systems for brands that want more leads.
          </div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="hover:text-white">Book</a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-neutral-950/95 p-4 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
          >
            Book Call
          </a>
          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Pay Now
          </a>
        </div>
      </div>
    </div>
  );
}
