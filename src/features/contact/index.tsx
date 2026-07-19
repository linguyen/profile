import { useState } from "react";

function Contact() {
  const [emailData, setEmailData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7001/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert("The SMTP server is malfunctioning. Please, contact me directly at nguyenminhtuanitc@gmail.com");
      }
    } catch {
      alert("The SMTP server is malfunctioning. Please, contact me directly at nguyenminhtuanitc@gmail.com");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          ></div>
          <div
            className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          ></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
                Get in touch
              </p>
              <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
                Let's work
                <br />
                together
              </h2>
              <p className="reveal d2 text-zinc-400 leading-relaxed mb-8">
                I'm open to support non-profit projects to make a positive
                impact. Please, do not hesitate to reach out.
              </p>

              <div className="reveal d3 flex flex-col gap-4">
                <a
                  href="mailto:hello@eliott.dev"
                  className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm">nguyenminhtuanitc@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/minhtuannguyen-wsu"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </span>
                  <span className="text-sm">
                    linkedin.com/in/minhtuannguyen-wsu
                  </span>
                </a>
                <a
                  href="https://github.com/linguyen"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  <span className="text-sm">github.com/linguyen</span>
                </a>
              </div>
            </div>
            <div className="reveal d2">
              <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fname"
                        className="block text-xs font-medium text-zinc-400 mb-1.5"
                      >
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        id="fname"
                        name="name"
                        placeholder="Jane Smith"
                        required
                        autoComplete="name"
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="femail"
                        className="block text-xs font-medium text-zinc-400 mb-1.5"
                      >
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        onChange={handleChange}
                        type="email"
                        id="femail"
                        name="email"
                        placeholder="jane@company.com"
                        required
                        autoComplete="email"
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="fsubject"
                      className="block text-xs font-medium text-zinc-400 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="fsubject"
                      name="subject"
                      placeholder="Project inquiry"
                      className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fmessage"
                      className="block text-xs font-medium text-zinc-400 mb-1.5"
                    >
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      onChange={handleChange}
                      id="fmessage"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors"
                  >
                    Send message →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
