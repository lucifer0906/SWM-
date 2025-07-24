"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const inquiryTypes = [
  { id: "quote", name: "Request Quote" },
  { id: "info", name: "Product Information" },
  { id: "support", name: "Technical Support" },
  { id: "other", name: "Other" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    type: "quote",
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const validate = () => {
    if (!formData.type || !formData.name || !formData.email || !formData.message) {
      setError("Please fill all required fields.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    if (!validate()) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSuccess("Your message has been sent successfully!");
      setFormData({ type: "quote", name: "", email: "", company: "", phone: "", message: "" });
      if (formRef.current) formRef.current.reset();
    } catch { 
      setError("There was an error sending your message. Please try again later.");
    }
    setSending(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="type" className="block text-sm font-medium leading-6 text-foreground">
          Inquiry Type
        </label>
        <select
          id="type"
          name="inquiry_type"
          value={inquiryTypes.find(t => t.id === formData.type)?.name}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="block w-full rounded-md border-0 py-1.5 text-foreground bg-background shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
        >
          {inquiryTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full rounded-md border-0 py-1.5 text-foreground bg-background shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="block w-full rounded-md border-0 py-1.5 text-foreground bg-background shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
          required
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium leading-6 text-foreground">
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="block w-full rounded-md border-0 py-1.5 text-foreground bg-background shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-foreground">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="block w-full rounded-md border-0 py-1.5 text-foreground bg-background shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="block w-full rounded-md border-0 py-1.5 text-foreground bg-background shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent w-full"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>
    </form>
  );
}
