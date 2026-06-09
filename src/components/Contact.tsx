'use client';

import { useState, FormEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactItems: ContactItem[] = [
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      label: 'Email',
      value: 'sauravkumar9447@gmail.com',
      href: 'mailto:sauravkumar9447@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-400" />,
      label: 'Phone',
      value: '+91 7557787962',
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-400" />,
      label: 'Location',
      value: 'Bhilai, Chhattisgarh, India',
    },
    {
      icon: <Linkedin className="w-5 h-5 text-blue-400" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/saurav-kumar',
      href: 'https://linkedin.com/in/saurav-kumar',
      external: true,
    },
    {
      icon: <Github className="w-5 h-5 text-blue-400" />,
      label: 'GitHub',
      value: 'github.com/saurav7557',
      href: 'https://github.com/saurav7557',
      external: true,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sauravkumar9447@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, '_blank');
  };

  const inputClasses =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300';

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Let&apos;s talk.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

              <h3 className="text-white text-xl font-bold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-400 text-sm mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-400 text-sm mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-400 text-sm mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-400 text-sm mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={5}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 h-full">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

              <h3 className="text-white text-xl font-bold mb-6">
                Contact Information
              </h3>

              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of the channels below.
                I&apos;m always open to new opportunities and collaborations.
              </p>

              <div className="space-y-4">
                {contactItems.map((item, index) => {
                  const content = (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 ${
                        item.href ? 'cursor-pointer' : ''
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-medium truncate">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    );
                  }

                  return content;
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
