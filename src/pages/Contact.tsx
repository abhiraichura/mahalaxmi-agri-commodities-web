import { useState } from 'react'
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

function TextRoll({ text }: { text: string }) {
  return (
    <span className="relative flex flex-col overflow-hidden h-[20px] leading-[20px]">
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
        <span className="block">{text}</span>
        <span className="block">{text}</span>
      </span>
    </span>
  )
}

function LiveClock() {
  const [time, setTime] = useState('')

  useState(() => {
    const update = () => {
      const now = new Date()
      const ist = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now)
      setTime(ist)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  })

  return (
    <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
      <Clock size={14} strokeWidth={2} />
      {time} IST
    </span>
  )
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    content: [
      { text: '+91 90330 00032', href: 'tel:+919033000032' },
      { text: '+91 98255 00032', href: 'tel:+919825500032' },
    ],
  },
  {
    icon: Mail,
    title: 'Email Address',
    content: [
      { text: 'mahalaxmiagricommodities@gmail.com', href: 'mailto:mahalaxmiagricommodities@gmail.com' },
    ],
  },
  {
    icon: MapPin,
    title: 'Marketing Yard Office',
    content: [
      { text: 'Tower A-118, New Marketing Yard,', href: null },
      { text: 'Rajkot Morbi Highway, Bedi,', href: null },
      { text: 'Rajkot (Gujarat) 360 003', href: null },
    ],
  },
  {
    icon: Building2,
    title: 'Main Office',
    content: [
      { text: '408-Star Plaza, Phulchhab Chowk,', href: null },
      { text: 'Rajkot (Gujarat) 360 001', href: null },
    ],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: [
      { text: 'Monday - Saturday: 9:00 AM - 7:00 PM', href: null },
      { text: 'Sunday: Closed', href: null },
    ],
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-24">
        <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-pink/5 blur-[120px]" />
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">
                <Phone size={14} />
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Get in Touch</span>
            </div>
            <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-[800px]">
              Let's start a conversation
            </h1>
            <p className="mt-5 sm:mt-6 max-w-[600px] text-[15px] sm:text-[17px] text-gray-600 leading-[1.65] font-medium">
              Whether you are an export house seeking suppliers or a supplier looking for export opportunities, we are just a call or message away.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">
                    <Phone size={14} />
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Contact Information</span>
                </div>
                <h2 className="text-[clamp(1.25rem,3vw,2rem)] font-medium leading-[1.15] tracking-[-0.02em] text-gray-900 mb-8">
                  Reach out to Kishan Raichura
                </h2>

                <div className="space-y-2">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[#FAFAF8]"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-pink/10 rounded-xl flex items-center justify-center text-brand-pink shrink-0">
                        <item.icon size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 mb-1">{item.title}</h4>
                        <div className="space-y-0.5">
                          {item.content.map((line, i) =>
                            line.href ? (
                              <a
                                key={i}
                                href={line.href}
                                className="block text-[13px] sm:text-[14px] text-gray-600 hover:text-brand-pink transition-colors"
                              >
                                {line.text}
                              </a>
                            ) : (
                              <p key={i} className="text-[13px] sm:text-[14px] text-gray-600">
                                {line.text}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={150}>
              <div className="bg-[#FAFAF8] border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">
                    <Mail size={14} />
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Send a Message</span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-6">Enquiry Form</h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ed1879" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h4 className="text-[18px] font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-[14px] text-gray-600">Thank you for reaching out. We will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form
                    action="https://formspree.io/f/xnqevjzy"
                    method="POST"
                    onSubmit={() => setSubmitted(true)}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Your company"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Interested Commodity</label>
                      <select
                        name="commodity"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] text-gray-900 focus:outline-none focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a commodity</option>
                        <option value="cumin">Cumin Seeds</option>
                        <option value="coriander">Coriander Seeds</option>
                        <option value="fennel">Fennel Seeds</option>
                        <option value="nigella">Nigella Seeds</option>
                        <option value="fenugreek">Fenugreek Seeds</option>
                        <option value="black-sesame">Black Sesame Seeds</option>
                        <option value="white-sesame">White Sesame Seeds</option>
                        <option value="mung">Mung (Green Gram)</option>
                        <option value="chickpea">Chickpea</option>
                        <option value="cotton-seed">Cotton Seed</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-900 mb-1.5">I am a</label>
                      <select
                        name="type"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] text-gray-900 focus:outline-none focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select your role</option>
                        <option value="export-house">Export House</option>
                        <option value="supplier">Supplier / Farmer</option>
                        <option value="trader">Trader</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-900 mb-1.5">Your Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your requirements, quantity needed, destination market, etc."
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 transition-all resize-y"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white text-[14px] font-bold rounded-full px-6 py-3 transition-colors duration-300"
                    >
                      <TextRoll text="Send Enquiry" />
                      <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
                        <ArrowUpRight size={14} className="text-brand-pink" />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-28">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6977!2d70.8027!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzE0LjAiTiA3MMKwNDgnMDkuNyJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
