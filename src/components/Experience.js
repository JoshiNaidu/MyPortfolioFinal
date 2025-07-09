import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "FloCareer",
      period: "Sep 2022 - Present",
      location: "Remote",
      description: [
        "Led the development of an Async Interview Room (Bot Interview Room) feature, enabling automated interviews with seamless integration of DYTE for recording and live interviews.",
        "Implemented Freshchat for real-time support and leveraged various NPM libraries for pre-interview checks including mic, video, and internet speed assessments.",
        "Designed and implemented architecture for Live Interviews with HackerEarth Compiler integration for coding assessments and CKEditor for live code updates.",
        "Created a complete WordPress website from scratch for different user roles and enhanced feedback section using ChatGPT APIs.",
      ],
      link: "https://flocareer.com",
      technologies: ["React.js", "JavaScript", "WordPress", "DYTE", "HackerEarth", "ChatGPT API"],
    },
    {
      title: "Software Developer",
      company: "Moshi Moshi - The Communication Company",
      period: "Mar 2022 - Sep 2022",
      location: "Hyderabad",
      description: [
        "Developed 'Wechimni' web application using AngularJS, focused on empowering women entrepreneurs.",
        "Developed 'MOXD' web application using ReactJS, primarily focused on courier services.",
        "Contributed to updating JERSEY company project codebase written in PHP.",
        "Implemented enhancements in WordPress and Shopify websites.",
      ],
      link: "https://wechimni.org",
      technologies: ["AngularJS", "ReactJS", "PHP", "WordPress", "Shopify"],
    },
    {
      title: "Graduate Engineer Trainee",
      company: "Hyoesong Electric Private Limited",
      period: "Oct 2021 - Mar 2022",
      location: "Hyderabad",
      description: [
        "Provided support and insights in production processes.",
        "Took active part in product development and product management for Blowers and AC for all Vehicles.",
      ],
      technologies: ["Product Development", "Process Management"],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Professional <span className="text-purple-400">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-400 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <div className="flex items-center gap-4 text-purple-400 mb-4">
                  <span className="text-xl font-semibold">{exp.company}</span>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                  <span className="text-purple-400 mr-3 mt-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience