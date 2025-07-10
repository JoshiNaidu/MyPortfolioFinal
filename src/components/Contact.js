import { Mail, Phone, Linkedin, Github, Code } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "joshimatta777@gmail.com",
      href: "mailto:joshimatta777@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9063256363",
      href: "tel:+919063256363",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/matta-joshi-mani-pavan-akash-44b2b512a",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/JoshiNaidu",
    },
    {
      icon: <Code className="w-6 h-6" />,
      label: "HackerRank",
      value: "Check my coding skills",
      href: "https://www.hackerrank.com/profile/joshimatta7771",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          and development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              {contact.icon}
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{contact.label}</h3>
            <p className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300">{contact.value}</p>
          </a>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold text-white text-center mb-12">Education</h3>
        <div className="space-y-6">
          <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Technology in Mechanical Engineering</h4>
            <p className="text-purple-400 mb-2">IARE College, Hyderabad (2016-2020)</p>
            <p className="text-gray-400">CGPA: 6.8</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-2">Intermediate</h4>
              <p className="text-purple-400 mb-2">Sri Chaitanya Junior College, Kovvur (2014-2016)</p>
              <p className="text-gray-400">98%</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-2">SSC</h4>
              <p className="text-purple-400 mb-2">Sri Chaitanya Techno Schools, Kovvur (2013-2014)</p>
              <p className="text-gray-400">95%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 pt-8 border-t border-slate-700">
        <p className="text-gray-400">© 2025 Matta Joshi. Built with React.js and Three.js</p>
      </div>
    </div>
  )
}

export default Contact