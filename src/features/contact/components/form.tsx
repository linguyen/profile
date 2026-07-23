// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mkodvydd");
  if (state.succeeded) {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column text-center mb-8">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3 in">Thank you for reaching out!</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-2xl text-white leading-tight mb-5 in">We have received your submission and will get back to you shortly.</h2>
            <p className="reveal d2 text-zinc-400 leading-relaxed mb-8 in">Your privacy is important to us. Form submissions are securely processed via Formspree, and no personal data is stored on our servers.</p>
        </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
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
              type="text"
              id="fname"
              name="name"
              placeholder="Jane Smith"
              required
              autoComplete="name"
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label
              htmlFor="femail"
              className="block text-xs font-medium text-zinc-400 mb-1.5"
            >
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="femail"
              name="email"
              placeholder="jane@company.com"
              required
              autoComplete="email"
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
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
            id="fmessage"
            name="message"
            rows={7}
            placeholder="Tell me about your project..."
            required
            className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          disabled={state.submitting}
          type="submit"
          className="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors"
        >
          Send message →
        </button>
      </div>
    </form>
  );
}

export default ContactForm;