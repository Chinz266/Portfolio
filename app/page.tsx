// components/WorksSection.tsx
import { getGithubRepos } from '@/lib/github';
import { Globe } from "lucide-react";

async function WorksSection() {
  const repos = await getGithubRepos();
  const myRepos = repos.filter((repo: any) => !repo.fork);

  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold mb-7 text-gray-900 tracking-tight">Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myRepos.map((repo: any) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-2xl px-5 py-5 min-h-30 hover:border-gray-300 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">{repo.name}</h3>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              </div>

              <p className="text-2xl text-gray-500 mt-3 leading-relaxed line-clamp-2">
                {repo.description || 'No description provided.'}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default async function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 font-sans text-gray-900">

      {/* 1. Header Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-start gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Tongchin Phonnanthasahwat</h1>
          <p className="text-gray-600 mb-2">
            Full-stack developer enthusiast with an eye for clean design. ✨
          </p>
          <p className="flex items-center text-gray-500 text-sm mb-4">
            <Globe className="w-4 h-4 mr-1" /> Nakhon Ratchasima, Thailand
          </p>

          {/* <div className="flex gap-2">
            {[Mail, GithubIcon, LinkedinIcon, Discord, Send, RefreshCcw].map((Icon, index) => (
              <button key={index} className="p-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                <Icon className="w-4 h-4 text-gray-600" />
              </button>
            ))}
          </div> */}
        </div>
        <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
          <img
            src="/img/avatar.jpg"
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. About Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          I am a beginner Full-stack developer who loves learning and playing around with new tech. I am always looking to improve my skills in both coding and design.
        </p>
      </section>

      {/* 3. Work Experience Section */}
      {/* <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">Work Experience</h2>

        <div className="mb-8">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-lg font-semibold flex items-center gap-3">
              MFEC Public Company Limited
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-normal">Internship</span>
            </h3>
          </div>
          <p className="text-gray-700 text-sm mb-2">Fullstack Intern</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
            <li>Developed low-code solutions using Appsmith and Supabase</li>
            <li>Collaborated with team to deliver internal tools efficiently</li>
            <li>Integrated APIs and automated workflows for business processes</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-lg font-semibold">RDCW</h3>
          </div>
          <p className="text-gray-700 text-sm mb-2">Fullstack Developer</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
            <li>Led development of client projects using Next.js, React and Node.js</li>
            <li>Built responsive designs and E2E APIs</li>
            <li>Maintained and updated existing projects</li>
          </ul>
        </div>
      </section> */}

      {/* 4. Skills Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {/* ตัวอย่าง Skills (สามารถเพิ่มไอคอน SVG ของจริงได้ทีหลัง) */}
          {["Bun", "Golang", "TypeScript", "NestJS", "Next.js", "SCSS", "MySQL",].map((skill) => (
            <div key={skill} className="flex items-center gap-1.5 border border-gray-200 bg-white px-2.5 py-1 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 cursor-default">
              {/* <div className="w-3 h-3 bg-gray-200 rounded-sm"></div> Placeholder สำหรับ Icon */}
              {skill}
            </div>
          ))}
        </div>
      </section>

      <WorksSection />

    </main>
  );
}
