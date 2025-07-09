import { Code, Zap, Users, Award } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Full-Stack Development",
      description: "Expertise in React.js, Angular, and modern web technologies",
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Performance Focused",
      description: "Building fast, scalable, and optimized web applications",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Team Collaboration",
      description: "Strong experience working in agile development teams",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Innovation",
      description: "Always eager to tackle new challenges and push boundaries",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-purple-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Passionate Web Developer</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            With over 3.5 years of experience in web development, I specialize in creating innovative and user-centric
            solutions. My journey began with a B.Tech in Mechanical Engineering, but my passion for technology led me to
            pursue software development.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I've had the privilege of working with companies like FloCareer and Moshi Moshi, where I've developed
            complex web applications, implemented automated interview systems, and enhanced user experiences through
            cutting-edge technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              3.5+ Years Experience
            </span>
            <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
              Full-Stack Developer
            </span>
            <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">React Specialist</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-3 sm:mb-4">{highlight.icon}</div>
              <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">{highlight.title}</h4>
              <p className="text-gray-400 text-xs sm:text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About