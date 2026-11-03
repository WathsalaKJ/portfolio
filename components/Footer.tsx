"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type SubmissionStatus = {
  type: "success" | "error";
  message: string;
};

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result: { error?: string; message?: string } =
        await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Your message could not be sent. Please try again.");
      }

      form.reset();
      setSubmissionStatus({
        type: "success",
        message: result.message ?? "Your message has been sent.",
      });
    } catch (error) {
      setSubmissionStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="footer" id="contact">
      <h2 className="footer__title">
        Get In Touch <span>- ASK ME ANYTHING!</span>
      </h2>
      <p className="footer__intro">
        Ready to collaborate or have a project in mind?
        <br />
        I&apos;m always open to new opportunities and interesting conversations.
      </p>

      <form className="footer__form" onSubmit={handleSubmit}>
        <label className="footer__field">
          <span className="sr-only">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="name"
            maxLength={120}
            required
          />
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
          </svg>
        </label>

        <label className="footer__field">
          <span className="sr-only">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            maxLength={254}
            required
          />
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
          </svg>
        </label>

        <label className="footer__field footer__field--message">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            maxLength={5000}
            required
          />
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.03.95 3.88 2.52 5.28L4 21l5.04-2.52c.94.33 1.93.52 2.96.52 5.52 0 10-3.58 10-8s-4.48-8-10-8Z" />
          </svg>
        </label>

        <button
          className="footer__submit"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="m2.2 21 19.5-8.35a.7.7 0 0 0 0-1.3L2.2 3a.7.7 0 0 0-.95.82l1.9 6.8 10.1 1.38-10.1 1.38-1.9 6.8a.7.7 0 0 0 .95.82Z" />
          </svg>
        </button>
        <p className="footer__form-note">
          Your message will be delivered directly to my inbox.
        </p>
        {submissionStatus && (
          <p
            className={`footer__form-note footer__form-note--${submissionStatus.type}`}
            role={submissionStatus.type === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {submissionStatus.message}
          </p>
        )}
      </form>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/sanduniwathsala"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/WathsalaKJ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          GitHub
        </a>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} Sanduni Wathsala · Design. Code. Create.
      </p>
    </footer>
  );
}
