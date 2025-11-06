'use client'; // Necessário para usar o useState

import Image from 'next/image';
import { useState } from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';

// --- Definição de Tipos e Dados Mockados ---
// Defina a estrutura de um projeto
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

// Dados de exemplo (substitua pelos seus projetos)
const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Meu Portfólio',
    description:
      'Portfólio pessoal construído com Next.js, TypeScript e Tailwind CSS para mostrar meus projetos e habilidades.',
    imageUrl: 'https://placehold.co/600x400',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
    repoUrl: 'https://github.com/seu-usuario/seu-portfolio',
  },
  {
    id: 2,
    title: 'E-commerce (Conceito)',
    description:
      'Um conceito de e-commerce com carrinho de compras, utilizando React e Context API para gerenciamento de estado.',
    imageUrl: 'https://placehold.co/600x400',
    tags: ['React', 'JavaScript', 'CSS'],
    repoUrl: 'https://github.com/seu-usuario/projeto-ecommerce',
  },
  {
    id: 3,
    title: 'Blog com WordPress',
    description:
      'Blog institucional desenvolvido em WordPress com o construtor de páginas Elementor, focado em SEO e design responsivo.',
    imageUrl: 'https://placehold.co/600x400',
    tags: ['WordPress', 'Elementor', 'Photoshop'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'API de Tarefas (AWS)',
    description:
      'Uma API RESTful para um app de lista de tarefas, deployada na AWS usando Lambda e API Gateway.',
    imageUrl: 'https://placehold.co/600x400',
    tags: ['AWS', 'TypeScript', 'Node.js'],
    repoUrl: 'https://github.com/seu-usuario/api-tarefas-aws',
  },
];

// Pega todas as tags únicas
const allTags = [
  'Todos',
  ...new Set(mockProjects.flatMap((p) => p.tags)),
];
// ---------------------------------------------

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Filtra os projetos com base na tag ativa
  const filteredProjects =
    activeFilter === 'Todos'
      ? mockProjects
      : mockProjects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Meus Projetos
        </h2>

        {/* Filtros */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeFilter === tag
                    ? 'bg-will-primary text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }
              `}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                width={600}
                height={400}
                unoptimized
              />
              <div className="p-6 flex flex-col grow">
                <div className="mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-lime-500 text-will-bg-dark text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2"
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
    </section>
  );
};