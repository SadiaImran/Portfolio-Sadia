import Section from './Section';
import { personalInfo } from '../data/resume';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    // Basic validation
    if (!name) { alert('Please enter your name.'); return; }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) { alert('Please enter a valid email.'); return; }
    if (!message) { alert('Please enter a message.'); return; }

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
    const mailto = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Open user's mail client with prefilled email in a new tab/window
    window.location.href = mailto;
    // Optionally, reset the form
    form.reset();
  };

  return (
    <Section id="contact" className="bg-violet-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-12 text-center">
          Get In <span className="text-violet-500">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Let's Connect</h3>
            <p className="text-slate-600 text-lg mb-8">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center text-violet-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-violet-500 transition-colors font-medium">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center text-violet-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-medium">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center text-violet-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg space-y-6">
            <div>
              <label className="block text-slate-600 text-sm mb-2 font-medium">Name</label>
              <input 
                name="name"
                type="text" 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-slate-600 text-sm mb-2 font-medium">Email</label>
              <input 
                name="email"
                type="email" 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-slate-600 text-sm mb-2 font-medium">Message</label>
              <textarea 
                name="message"
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-violet-500 hover:bg-violet-600 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
