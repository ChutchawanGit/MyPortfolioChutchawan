import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Who am I?</h3>
              <p className="text-gray-700 mb-4">
                I'm a Backend Developer with 11 months of professional experience, specializing in Java and Golang development.
                I have experience utilizing APIs and a foundational to intermediate understanding of their operation.
                Proficient in database management including SQL, Oracle, AWS, and BigQuery.
              </p>
              <p className="text-gray-700">
                I've been involved in developing management systems, real-time chat administration, and update systems.
                I also have introductory skills in automation with Selenium and Linux. Outside of work, I enjoy contributing
                to personal projects and am eager to expand my skillset with new technologies.
              </p>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-xl font-bold mb-4">My Skills</h3>

              // ในส่วนของ My Skills
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Java</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Golang</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">JavaScript</span>
                        <span className="text-sm font-medium">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">SQL/Databases</span>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">APIs</span>
                        <span className="text-sm font-medium">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Firebase/Supabase</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-3">Other Skills & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git", "AWS", "BigQuery", "Oracle", "RESTful APIs", "Springboot",
                    "Next.js", "PostgreSQL", "MySQL", "Docker", "Looker", "Grafana",
                    "Postman", "Selenium", "Linux", "Flutter", "Dart", "TypeScript"
                  ].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-3">Other Skills & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "AWS", "BigQuery", "Oracle", "REST APIs", "Microservices", "Selenium", "Linux", "Docker"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
              <h4 className="font-semibold mb-3">Education</h4>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-bold">Your Degree Name</h5>
                <p className="text-gray-600">Your Major | University Name | Year of Graduation</p>
                <p className="mt-2 text-gray-700">Additional Coursework: Image Processing Course Name</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;