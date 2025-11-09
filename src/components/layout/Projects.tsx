"use client";

import mockProjects from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaLink,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAmazon,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

// Define as abas de filtro fixas
const techTags = ["Todos", "WordPress", "JavaScript", "React", "Next.js"];
const allTags = ["Todos", ...new Set(mockProjects.flatMap((p) => p.tags))];

// Define quantos projetos serão exibidos por página
const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtra os projetos com base na tag ativa
  // A lógica original funciona perfeitamente com as novas abas
  const filteredProjects =
    activeFilter === "Todos"
      ? mockProjects
      : mockProjects.filter((p) => p.tags.includes(activeFilter));

  // --- Lógica de Paginação ---
  // Calcula o número total de páginas
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  // Calcula os índices dos projetos para a página atual
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;

  // "Fatia" o array para pegar apenas os projetos da página atual
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);

    // Rola para o topo da seção de projetos
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        block: "start",
      });
    }, 1);
  };

  // Função para lidar com clique no filtro
  const handleFilterClick = (tag: string) => {
    setActiveFilter(tag);
    setCurrentPage(1); // Reseta para a página 1 ao trocar de filtro
  };

  const techStacks = [
    { name: "HTML 5", icon: SiHtml5 },
    { name: "CSS 3", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "AWS", icon: SiAmazon },
    { name: "WordPress", icon: SiWordpress },
    { name: "Photoshop", icon: SiAdobephotoshop },
  ];
  // -------------------------

  return (
    <section id="projects" className="py-24 px-2">
      <div className="relative container mx-auto border border-gray-700 py-10 rounded-2xl bg-gray-800 drop-shadow-xl group overflow-hidden shadow-blue-100/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Meus Projetos
          </h2>

          {/* === INÍCIO DA MODIFICAÇÃO: Filtros (Abas Estilo Ficheiro) === */}
          <div className="flex justify-start items-start gap-2 md:gap-4 flex-wrap p-4">
            {techTags.map((tag) => {
              const tech = techStacks.find((t) => t.name === tag);
              const Icon = tech ? tech.icon : null;
              return (
                <button
                  key={tag}
                  onClick={() => handleFilterClick(tag)}
                  className={`flex gap-4 items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bottom-10
                ${
                  activeFilter === tag
                    ? // Aba ativa: Fundo 800 (cor do container) e bordas laterais/topo
                      "text-white z-10 border border-will-p-light bg-will-p-light"
                    : // Aba inativa: Fundo 700 (cor dos botões originais)
                      "bg-gray-700 text-gray-300 hover:bg-gray-500"
                }
              `}
                >
                  {Icon && <Icon className="text-2xl" size={15}/>}
                  {tag}
                </button>
              );
            })}
          </div>

          {/* === Conteúdo das Abas (Grid de Projetos) === */}
          {/* Este container (bg-800) conecta-se à aba ativa e serve de fundo para os cards (bg-900) */}
          <div className="p-8 relative z-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
              {/* O conteúdo da grid (map) permanece idêntico ao original */}
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
                >
                  <Link href={`${project.liveUrl}`} target="_blank">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      width={600}
                      height={400}
                      loading="lazy"
                      unoptimized
                    />
                  </Link>
                  <div className="p-6 flex flex-col grow">
                    <div className="mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-lime-500 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 grow">
                      {project.description}
                    </p>
                    <div className="flex justify-start gap-4 mt-auto">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition-colors"
                        >
                          <FaLink /> Ver Online
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
                        >
                          <FaGithub /> Código
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Filtros
          <div className="flex justify-start md:justify-center items-center p-4 flex-wrap gap-2 mb-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilterClick(tag)} // Atualizado para usar a nova função
                className={`px-3 py-2 rounded-xl text-sm transition-all duration-300
                ${
                  activeFilter === tag
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }
              `}
              >
                {tag}
              </button>
            ))}
          </div> */}

          {/* === FIM DA MODIFICAÇÃO === */}

          {/* --- Controles de Paginação --- */}
          {totalPages > 1 && ( // A paginação fica fora do container das abas
            <div className="flex justify-center items-center gap-4 mt-12">
              {/* Botão Anterior */}
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center p-3 rounded-full bg-gray-700 text-white transition-colors hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Página anterior"
              >
                <FaChevronLeft />
              </button>

              {/* Números das Páginas (Exemplo simples) */}
              <span className="text-gray-300 font-medium">
                Página {currentPage} de {totalPages}
              </span>

              {/* Botão Próximo */}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center p-3 rounded-full bg-gray-700 text-white transition-colors hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Próxima página"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
        {/* Efeitos de blur (mantidos) */}
        <div>
          <div className="absolute inset-0.5 -z-1 flex flex-col items-start justify-evenly gap-6 rounded-2xl bg-gray-800 "></div>
          <div className="absolute transition-all duration-500 -top-5 -bg-conic-60 left-5 group-hover:top-20 group-hover:-left-10 h-70 w-90 -z-10 bg-lime-500 blur-[50px]"></div>
          <div className="absolute transition-all duration-500 -bottom-5 -bg-conic-60 right-5 group-hover:bottom-20 group-hover:-right-10 h-70 w-90 -z-10 bg-lime-500 blur-[50px]"></div>
        </div>
      </div>
    </section>
  );
}
