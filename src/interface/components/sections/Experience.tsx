import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: '1',
      company: 'Tech Company',
      position: 'Backend Developer',
      period: 'Present - 1 Year',
      description: 'Working on backend systems using Java and Golang. Involved in creating systems for product management and sales tracking. Implemented real-time chat functionalities for admin interfaces.',
      achievements: [
        'Developed backend (Java/Golang) for a marketplace management system',
        'Utilized APIs for product data management and other functionalities',
        'Worked with databases (SQL, Oracle, AWS, BigQuery)',
        'Contributed to real-time chat administration system development',
        'Contributed to real-time update system development',
        'Assisted in maintaining/creating reports (BigQuery, Looker, Grafana)',
        'Contributed to web/Line App feature development (JS, HTML, CSS)'
      ],
      technologies: ['Java', 'Golang', 'RESTful APIs', 'SQL', 'Oracle', 'AWS', 'BigQuery', 'JavaScript', 'Looker', 'Grafana']
    },
    {
      id: '2',
      company: 'University',
      position: 'Final Year Project',
      period: 'During Studies',
      description: 'Developed a social food selling app with chat and location features using Flutter.',
      achievements: [
        'Built a fully functional mobile application using Flutter',
        'Implemented real-time chat functionality',
        'Added location-based features for nearby food vendors',
        'Integrated with backend services and databases'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'RESTful APIs', 'Location Services']
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white"></div>
                
                {/* Content */}
                <div className="md:w-1/2 p-4">
                  <div className={`bg-white rounded-lg shadow-lg p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-blue-700">{exp.position}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-gray-700 font-medium mb-3">{exp.company}</h4>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <h5 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-2">Key Achievements</h5>
                    <ul className="list-disc list-inside space-y-1 mb-4 text-gray-600">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <h5 className="font-semibold text-sm uppercase tracking-wider text-gray-500 mb-2">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty div for layout */}
                <div className="md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;