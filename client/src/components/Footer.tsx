import { FaGithub, FaLinkedin } from  "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { Link } from "react-router-dom"

export const Footer = () => {

  const links = {
    contacts: {
      linkedin: 'https://www.linkedin.com/in/rian-vitor-dos-santos-de-almeida-a036aa202/',
      gmail: 'mailto:rianvitorlhe@gmail.com',
    },
    tech: {
      react: 'https://pt-br.legacy.reactjs.org/',
      nest: 'https://docs.nestjs.com/',
    },
    integrations: {
      vercel: 'https://vercel.com/',
      github: 'https://github.com/RianVitor26/',

    },
    project: {
      srcCode: 'https://github.com/RianVitor26/flash-card/',
      license: 'https://github.com/RianVitor26/flash-card/blob/main/LICENSE',
    },
  } 

  return (
    <footer className="max-w-4xl w-11/12 px-5 pt-5 mx-auto mt-40">
        <div className="w-full grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-5 mb-20 sm:grid-cols-3 sm:grid-rows-2  md:grid-cols-4 md:grid-rows-1">
            <div className="flex flex-col gap-3 h-fit">
                <span className="pb-4 font-bold text-gray-800">Contatos</span>
                <Link target="_blank" to={links.contacts.linkedin} className="text-gray-600">Linkedin</Link>
                <Link target="_blank" to={links.contacts.gmail} className="text-gray-600">Gmail</Link>
            </div>

            <div className="flex flex-col gap-3 h-fit">
                <span className="pb-4 font-bold text-gray-800">Projeto</span>
                <Link target="_blank" to={links.project.srcCode} className="text-gray-600">Código fonte</Link>
                <Link target="_blank" to={links.project.license} className="text-gray-600">Lincença</Link>
            </div>

            <div className="flex flex-col gap-3 h-fit">
                <span className="pb-4 font-bold text-gray-800">Tecnologias</span>
                <Link target="_blank" to={links.tech.react} className="text-gray-600">React.js</Link>
                <Link target="_blank" to={links.tech.nest} className="text-gray-600">Nest.js</Link>
            </div>

            <div className="flex flex-col gap-3 h-fit divide-x">
                <span className="pb-4 font-bold text-gray-800">Integrações</span>
                <Link target="_blank" to={links.integrations.github} className="text-gray-600">Github</Link>
            </div>
        </div>
        <div className="w-full h-fit flex items-center justify-center gap-5 mb-5 md:justify-start">
            <Link target="_blank" to={links.integrations.github} className="text-2xl text-gray-400 hover:-translate-y-1/3 hover:text-slate-800 transition-all duration-500"><FaGithub/></Link>
            <Link target="_blank" to={links.contacts.linkedin} className="text-2xl text-gray-400 hover:-translate-y-1/3 hover:text-blue-500 transition-all duration-500"><FaLinkedin/></Link>
            <Link target="_blank" to={links.contacts.gmail} className="text-2xl text-gray-400 hover:-translate-y-1/3 hover:text-red-500 transition-all duration-500"><BiLogoGmail/></Link>
        </div>
        <div className="w-full">
              <p className="text-gray-400 text-center py-5">2023 | Flash Card | <Link target="_blank" to={links.integrations.github} className="hover:text-blue-600 transition-all duration-500">RianVitor26</Link></p>
        </div>
    </footer>
  )
}