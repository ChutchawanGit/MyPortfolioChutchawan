import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_11u5y0c';
  const EMAILJS_TEMPLATE_ID = 'template_0iadaxy';
  const EMAILJS_PUBLIC_KEY = 'MXiGUdlDBxND7nXXy';

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'NAME IS REQUIRED';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'EMAIL IS REQUIRED';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'INVALID EMAIL FORMAT';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'MESSAGE PAYLOAD IS REQUIRED';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_email: 'chutchawanmeesrimatupoj@gmail.com'
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setFormState({
        name: '',
        email: '',
        message: ''
      });

      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError('TRANSMISSION FAILED: PLEASE USE DIRECT EMAIL BELOW.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 mb-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bp-sheet">
          {/* Top Title Strip */}
          <div className="bp-strip">
            <span className="font-bold text-[var(--amber)]">[ 05 ]</span>
            <span className="bp-strip-title">COMMUNICATION PROTOCOL &amp; TRANSMISSION GATEWAY</span>
            <span className="hidden sm:inline text-[var(--ink-3)]">HAS-PORTFOLIO · SHEET 05 / 05</span>
          </div>
          <div className="bp-ruler"></div>
          <div className="bp-crosshair"></div>

          {/* Section Kicker */}
          <div className="mb-8 pt-2">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[var(--cyan)] uppercase tracking-[0.18em]">
              <span className="w-1.5 h-1.5 bg-[var(--cyan)]"></span>
              <span>DIRECT DISPATCH &amp; STATION COORDINATES</span>
            </div>
            <h2 className="font-cond font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[var(--ink)] mt-1">
              INITIATE TRANSMISSION
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Technical Coordinates */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="border border-[var(--ink-4)] bg-[rgba(12,58,106,0.3)] p-4">
                  <span className="font-mono-code text-[10px] text-[var(--ink-3)] uppercase tracking-wider block mb-1">
                    [ ENDPOINT 01 ] DIRECT EMAIL
                  </span>
                  <a
                    href="mailto:chutchawanmeesrimatupoj@gmail.com"
                    className="font-mono-code text-sm text-[var(--cyan)] hover:underline break-all block font-semibold"
                  >
                    chutchawanmeesrimatupoj@gmail.com
                  </a>
                </div>

                <div className="border border-[var(--ink-4)] bg-[rgba(12,58,106,0.3)] p-4">
                  <span className="font-mono-code text-[10px] text-[var(--ink-3)] uppercase tracking-wider block mb-1">
                    [ ENDPOINT 02 ] GITHUB REPOSITORY
                  </span>
                  <a
                    href="https://github.com/ChutchawanGit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-code text-sm text-[var(--ink)] hover:text-[var(--cyan)] transition break-all block"
                  >
                    github.com/ChutchawanGit
                  </a>
                </div>

                <div className="border border-[var(--ink-4)] bg-[rgba(12,58,106,0.3)] p-4">
                  <span className="font-mono-code text-[10px] text-[var(--ink-3)] uppercase tracking-wider block mb-1">
                    [ ENDPOINT 03 ] LINKEDIN NETWORK
                  </span>
                  <a
                    href="https://www.linkedin.com/in/chutchawan-meesrimatupoj-b6a452301/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-code text-sm text-[var(--ink)] hover:text-[var(--cyan)] transition break-all block"
                  >
                    linkedin.com/in/chutchawan-meesrimatupoj
                  </a>
                </div>

                <div className="border border-[var(--ink-4)] bg-[rgba(12,58,106,0.3)] p-4">
                  <span className="font-mono-code text-[10px] text-[var(--ink-3)] uppercase tracking-wider block mb-1">
                    [ BASE COORDINATES ] PHYSICAL STATION
                  </span>
                  <p className="font-mono-code text-xs text-[var(--ink-2)] m-0 leading-relaxed">
                    Bang Bua Thong, Nonthaburi 11110, Thailand
                  </p>
                </div>
              </div>

              {/* Status Notice */}
              <div className="bp-callout bp-callout-amber">
                <span className="bp-callout-tag">DISPATCH STATUS</span>
                <p className="font-mono-code text-xs text-[var(--ink-2)] m-0 leading-relaxed">
                  Available for Full-Stack, Back-End, or Systems Architecture engagements.
                  Responses typically dispatched within 24 hours.
                </p>
              </div>
            </div>

            {/* Right Dispatch Form */}
            <div className="lg:col-span-7">
              <div className="border border-[var(--ink-4)] bg-[rgba(12,58,106,0.3)] p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[var(--ink-4)] pb-3 mb-6">
                  <span className="font-mono-code text-xs text-[var(--cyan)] uppercase tracking-widest font-bold">
                    TRANSMISSION DISPATCH PROTOCOL
                  </span>
                  <span className="font-mono-code text-[10px] text-[var(--ink-3)]">SECURE GATEWAY</span>
                </div>

                {submitSuccess && (
                  <div className="border border-[var(--cyan)] bg-[rgba(127,220,255,0.1)] p-4 mb-6 font-mono-code text-xs text-[var(--cyan)]">
                    [✓] TRANSMISSION DELIVERED SUCCESSFULLY. ACKNOWLEDGEMENT CONFIRMED.
                  </div>
                )}

                {submitError && (
                  <div className="border border-[var(--red)] bg-[rgba(255,125,125,0.1)] p-4 mb-6 font-mono-code text-xs text-[var(--red)]">
                    [✕] {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono-code text-xs text-[var(--ink-2)] uppercase tracking-wider mb-1"
                    >
                      [ INPUT 01 ] SENDER IDENTITY *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="ENTER NAME / ORGANIZATION"
                      className={`w-full px-4 py-2.5 bg-[var(--paper-deep)] border ${errors.name ? 'border-[var(--red)]' : 'border-[var(--ink-3)]'
                        } text-[var(--ink)] font-mono-code text-xs placeholder-[var(--ink-3)] focus:border-[var(--cyan)] focus:outline-none`}
                    />
                    {errors.name && (
                      <span className="font-mono-code text-[10px] text-[var(--red)] mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono-code text-xs text-[var(--ink-2)] uppercase tracking-wider mb-1"
                    >
                      [ INPUT 02 ] RETURN TRANSMISSION ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="ENTER RETURN EMAIL"
                      className={`w-full px-4 py-2.5 bg-[var(--paper-deep)] border ${errors.email ? 'border-[var(--red)]' : 'border-[var(--ink-3)]'
                        } text-[var(--ink)] font-mono-code text-xs placeholder-[var(--ink-3)] focus:border-[var(--cyan)] focus:outline-none`}
                    />
                    {errors.email && (
                      <span className="font-mono-code text-[10px] text-[var(--red)] mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono-code text-xs text-[var(--ink-2)] uppercase tracking-wider mb-1"
                    >
                      [ INPUT 03 ] TRANSMISSION PAYLOAD *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="SPECIFY INQUIRY, PROPOSAL, OR SYSTEM REQUIREMENTS..."
                      className={`w-full px-4 py-2.5 bg-[var(--paper-deep)] border ${errors.message ? 'border-[var(--red)]' : 'border-[var(--ink-3)]'
                        } text-[var(--ink)] font-mono-code text-xs placeholder-[var(--ink-3)] focus:border-[var(--cyan)] focus:outline-none resize-none`}
                    ></textarea>
                    {errors.message && (
                      <span className="font-mono-code text-[10px] text-[var(--red)] mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bp-btn bp-btn-solid py-3 text-xs tracking-[0.16em]"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-circle-notch fa-spin"></i>
                        <span>TRANSMITTING DATA PACKET...</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-satellite-dish"></i>
                        <span>DISPATCH TRANSMISSION [ SEND ]</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
