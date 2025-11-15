// /components/CardProjects.tsx
"use client";

import { allProjects, techColors, techStacks } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import MyButton from "./MyButton";

const techTags = ["Todos", "WordPress", "JavaScript", "React", "Next.js"];
const PROJECTS_PER_PAGE = 12;

export default function CardProjects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  
  const filteredProjects =
    activeFilter === "Todos"
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(activeFilter));
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const handleFilterClick = (tag: string) => {
    setActiveFilter(tag);
    setVisibleCount(PROJECTS_PER_PAGE);
 
  };
   const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + PROJECTS_PER_PAGE);
  };

  return (
    <section>
      {/* Filtros Modernos */}
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {techTags.map((tag) => {
          const tech = techStacks.find((t) => t.name === tag);
          const Icon = tech ? tech.icon : null;
          const isActive = activeFilter === tag;
          return (
            <button
              key={tag}
              onClick={() => handleFilterClick(tag)}
              className={`
                  flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300
                  border-2 backdrop-blur-sm
                  ${
                    isActive
                      ? "bg-will-primary/20 border-will-primary text-gray-100 shadow-lg shadow-will-primary/25"
                      : "bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-700/50 hover:border-gray-600 hover:text-gray-100"
                  }
                  hover:scale-105 active:scale-95
                `}
            >
              {Icon && <Icon className="text-lg" />}
              {tag}
              {isActive && (
                <span className="ml-1 w-2 h-2 bg-will-primary rounded-full animate-pulse"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Grid de Projetos */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="
                group 
                flex flex-col relative group bg-gray-800/50 rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm hover:shadow-2xl hover:shadow-will-primary/10"
              style={{
                animation: `${index * 100}ms fadeInUp 0.6s ease-out forwards`,
              }}
            >
              {/* Imagem do Projeto */}
              <Link href={`${project.liveUrl}`} target="_blank">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </Link>

              {/* Conteúdo do Projeto */}
              <div className="p-6 flex flex-col flex-1">
                {" "}
                {/* flex-1 e flex-col aqui */}
                {/* Título e Descrição */}
                <h3 className="text-xl font-bold text-gray-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 grow leading-relaxed">
                  {project.description}
                </p>
                {/* Tags (movidas para baixo para melhor fluxo) */}
                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {" "}
                  {/* mt-auto empurra para baixo */}
                  {project.tags.slice(0, 8).map(
                    (
                      tag // Limita a 4 tags visíveis
                    ) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          techColors[tag] || techColors.default
                        }`}
                      >
                        {tag}
                      </span>
                    )
                  )}
                  {project.tags.length > 8 && (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${techColors.default}`}
                    >
                      +{project.tags.length - 8}
                    </span>
                  )}
                </div>
                {/* Meta informações (Links) */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-5">
                    {/* Links */}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors text-sm font-medium"
                      >
                        <FaExternalLinkAlt size={13} />
                        <span>Demo</span>
                      </Link>
                    )}
                    {project.repoUrl && (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors text-sm font-medium"
                      >
                        <FaGithub size={14} />
                        <span className="group-hover/link:underline">
                          Código
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
                {/* Progress bar sutil no hover (Mantido, é um ótimo toque!) */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-will-primary to-will-accent group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>

        {/* Estado Vazio */}
        {visibleProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-neutral-800 rounded-3xl mb-6">
              <div className="text-3xl">🔍</div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-300 mb-3">
              Nenhum projeto encontrado
            </h3>
            <p className="text-neutral-500 max-w-md mx-auto leading-relaxed">
              Não encontramos projetos com esse filtro. Tente selecionar outra
              categoria.
            </p>
          </div>
        )}
        {/* Botão de Carregar Mais */}
              {visibleProjects.length < filteredProjects.length && (
                <div className="text-center">
                  <MyButton onClick={loadMore} variant="secondary">
                    Carregar Mais
                    <HiOutlineArrowNarrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </MyButton>
                </div>
              )}
      </div>
    </section>
  );
}
