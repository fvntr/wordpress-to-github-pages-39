import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Works on GitHub Pages without a backend:
    // opens the user's email client with a pre-filled message.
    const subject = encodeURIComponent("Message from Full Spectrum Labs site");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    // TODO: change this inbox if you want the message to go elsewhere
    window.location.href = `mailto:hello@fullspectrumlabs.org?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto space-y-10">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              We&apos;d love to hear from you.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Send a note and we&apos;ll get back to you soon.
            </p>
          </header>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                First &amp; Last Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                className="min-h-[160px]"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button
                type="submit"
                size="lg"
                className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold btn-sweep"
              >
                Submit
              </Button>

              <Link to="/" className="text-sm text-muted-foreground hover:underline">
                Back to home
              </Link>
            </div>

            <p className="text-xs text-muted-foreground">
              Note: This form opens your email app to send the message (no server required).
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
