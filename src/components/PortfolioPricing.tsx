import Contact from "@/components/layout/Contact";
import BriefingButton from "./UI/BriefingButton";
import MyButton from "./UI/MyButton";

export default function PortfolioPricing() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      <div className="md:max-w-6xl mx-auto px-2 md:px-6 py-12">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-center md:text-start text-3xl font-extrabold leading-tight bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Preços justos e resultados reais
              </h2>
              <p className="mt-4 text-gray-400">
                Grade de preços pensada para micro, pequenos e médios negócios e
                profissionais autônomos em Fortaleza e Região. Transparência,
                qualidade e custos realistas.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-will-primary rounded-full"></div>
                  Foco: fisioterapeutas, salões, dentistas, advogados e
                  autônomos.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-will-primary rounded-full"></div>
                  Espaecialidade: WordPress e React — entregas adaptadas ao
                  cliente.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-will-primary rounded-full"></div>
                  Opções de pacotes para posts e manutenção mensal.
                </li>
              </ul>

              <div className="mt-8 flex flex-col md:flex-row gap-3 w-full">
                <MyButton
                  href="#precos"
                  size='lg'
                >
                  Ver preços
                </MyButton>
                <BriefingButton />
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Destaque</h3>
              <p className="text-gray-300 leading-relaxed">
                Landing pages a partir de{" "}
                <span className="font-semibold text-will-p-light">R$ 600</span>.
                Sites institucionais a partir de{" "}
                <span className="font-semibold text-will-p-light">
                  R$ 1.200
                </span>
                . Pacotes de posts e manutenção mensais disponíveis.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 border border-gray-700 rounded-2xl bg-gray-700/30">
                  <div className="text-xs text-gray-400 mb-1">Entrega</div>
                  <div className="font-semibold text-gray-200">
                    Design + Frontend
                  </div>
                </div>
                <div className="p-4 border border-gray-700 rounded-2xl bg-gray-700/30">
                  <div className="text-xs text-gray-400 mb-1">Suporte</div>
                  <div className="font-semibold text-gray-200">
                    Manutenção opcional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="precos" className="mb-16">
          <h3 className="flex justify-center md:justify-start text-2xl font-bold bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Grade de Preços
          </h3>
          <p className="text-sm text-gray-400 mb-8">
            Preços de Referência, varia conforme complexidade do trabalho.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Landing Page Card */}
            <article className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group">
              <h4 className="text-lg font-bold text-gray-100 mb-3">
                Landing Page
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                WordPress ou React — escolha conforme a necessidade.
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex justify-between text-gray-300">
                  <span>Simples:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 600 — R$ 850
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Profissional:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 900 — R$ 1.300
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Premium:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 1.400 — R$ 1.900
                  </span>
                </li>
              </ul>
            </article>

            {/* Site Institucional Card */}
            <article className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group">
              <h4 className="text-lg font-bold text-gray-100 mb-3">
                Site Institucional (WordPress)
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Até 5 páginas (Home, Sobre, Serviços, Contato, Blog).
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex justify-between text-gray-300">
                  <span>Básico:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 1.200 — R$ 1.700
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Profissional:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 1.800 — R$ 2.400
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Premium:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 2.500 — R$ 3.200
                  </span>
                </li>
              </ul>
            </article>

            {/* Páginas Extras Card */}
            <article className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group">
              <h4 className="text-lg font-bold text-gray-100 mb-3">
                Páginas Extras (por página)
              </h4>
              <ul className="space-y-3 text-sm mb-4">
                <li className="flex justify-between text-gray-300">
                  <span>WordPress:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 120 — R$ 200
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>React:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 160 — R$ 250
                  </span>
                </li>
              </ul>
              <p className="text-xs text-gray-500">
                Valores dependem de conteúdo e layout.
              </p>
            </article>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group">
              <h4 className="text-lg font-bold text-gray-100 mb-3">
                SEO / Performance / Otimização
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between text-gray-300">
                  <span>Otimização de velocidade:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 200 — R$ 350
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>SEO inicial:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 250 — R$ 450
                  </span>
                </li>
              </ul>
            </article>
            <article className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group">
              <h4 className="text-lg font-bold text-gray-100 mb-3">
                Banco de Dados ( MySQL / AWS / Sanity)
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Modelagem e integração de conteúdo.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between text-gray-300">
                  <span>Estrutura inicial simples:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 350 — R$ 550
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Estrutura profissional:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 600 — R$ 1.000
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Integração completa (React):</span>
                  <span className="font-semibold text-will-accent">
                    R$ 900 — R$ 1.500
                  </span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section id="servicos" className="mb-16">
          <h3 className="text-2xl font-bold mb-8 bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Posts & Conteúdo
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group">
              <h5 className="font-bold text-gray-100 mb-3">
                Blog (post com SEO)
              </h5>
              <p className="text-sm text-gray-400 mb-4">
                Pesquisa, SEO on-page e imagens base.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between text-gray-300">
                  <span>Unidade:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 45 — R$ 70
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>PACOTE 4/mês:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 160 — R$ 250
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>PACOTE 8/mês:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 320 — R$ 480
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>PACOTE 12/mês:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 450 — R$ 680
                  </span>
                </li>
              </ul>
            </article>

            <article className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group">
              <h5 className="font-bold text-gray-100 mb-3">
                Instagram — Posts estáticos
              </h5>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between text-gray-300">
                  <span>Unidade:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 25 — R$ 40
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>PACOTE 10:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 180 — R$ 300
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>PACOTE 20:</span>
                  <span className="font-semibold text-will-accent">
                    R$ 300 — R$ 500
                  </span>
                </li>
              </ul>
            </article>

            <article className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group">
              <h5 className="font-bold text-gray-100 mb-3">
                Carrossel / Reels
              </h5>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between text-gray-300">
                  <span>Carrossel (8–10 slides):</span>
                  <span className="font-semibold text-will-accent">
                    R$ 60 — R$ 90
                  </span>
                </li>
                <li className="flex justify-between text-gray-300">
                  <span>Reels (roteiro + edição simples):</span>
                  <span className="font-semibold text-will-accent">
                    R$ 60 — R$ 100
                  </span>
                </li>
              </ul>
            </article>
          </div>

          <div className="mt-8 bg-will-secondary/10 border border-will-secondary/30 p-6 rounded-2xl">
            <p className="text-sm text-will-secondary/90">
              Observação: Pacotes podem ser ajustados conforme frequência, prazo
              e conteúdo. Valores para Fortaleza (2025).
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 bg-linear-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Planos de Manutenção (WordPress)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group text-center">
              <div className="text-sm text-gray-400 mb-2">Básico</div>
              <div className="mt-2 font-bold text-xl text-will-primary">
                R$ 70 — R$ 120 / mês
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Atualizações, backups e monitoramento.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-will-accent/40 transition-all duration-300 group text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-will-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  RECOMENDADO
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-2">Intermediário</div>
              <div className="mt-2 font-bold text-xl text-will-accent">
                R$ 120 — R$ 200 / mês
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Inclui pequenas edições e suporte.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-will-primary/30 transition-all duration-300 group text-center">
              <div className="text-sm text-gray-400 mb-2">Premium</div>
              <div className="mt-2 font-bold text-xl text-will-primary">
                R$ 250 — R$ 350 / mês
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Suporte estendido e prioridade.
              </p>
            </div>
          </div>
        </section>

        <section id="contato" className="mb-20 p-0">
          <Contact />
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-gray-700/50">
            <h4 className="font-bold text-gray-100 mb-4">Observações</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-will-primary mt-1">•</span>
                Propostas personalizadas com briefing.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-will-primary mt-1">•</span>
                Valores focados em pequenos negócios.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-will-primary mt-1">•</span>
                Prazo e conteúdo influenciam o preço final.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
