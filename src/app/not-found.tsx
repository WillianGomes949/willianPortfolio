import MyButton from '@/components/UI/MyButton';
import Link from 'next/link';
import { HiHome } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
      

      {/* Título de Erro */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-will-primary tracking-tighter mb-4">
        404
      </h1>

      {/* Subtítulo */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-50 mb-4">
        Sistema não encontrado!
      </h2>

      {/* Texto Descritivo */}
      <p className="text-gray-400 text-lg md:text-xl max-w-md mb-8">
        Ops! Parece que a página que você está procurando foi formatada, deletada ou nunca existiu.
      </p>

      {/* Botão de Ação */}
      <MyButton
        variant="primary"
        href="/"

      >
        <HiHome className="mr-2 h-5 w-5" />
        Voltar para o Início
      </MyButton>

      {/* Opcional: Link para contato caso seja um erro real */}
      <div className="mt-8">
        <p className="text-sm text-gray-500">
          Acha que isso é um erro?{' '}
          <Link href="/#contato" className="text-will-primary hover:underline font-semibold">
            Contate o suporte
          </Link>
        </p>
      </div>
    </div>
  );
}