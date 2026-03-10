import { useState, FormEvent } from "react";
import SectionReveal from "@/components/SectionReveal";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);

    // EmailJS integration placeholder — replace with your service/template/user IDs
    try {
      // import emailjs from "@emailjs/browser";
      // await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY");
      await new Promise((r) => setTimeout(r, 1000)); // Simulate send
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">// Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            Let's <span className="text-gradient">connect</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-5 gap-10">
          <SectionReveal delay={0.1} className="md:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out.
              I'm always open to discussing new opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <HiMail className="text-primary text-lg" /> hello@johndoe.dev
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <HiLocationMarker className="text-primary text-lg" /> San Francisco, CA
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(175_80%_50%/0.4)] disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
