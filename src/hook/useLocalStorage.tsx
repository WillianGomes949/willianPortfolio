// hooks/useLocalStorage.ts
import { useState, useEffect } from "react";

/**
 * Um hook customizado que sincroniza o estado do React com o localStorage.
 * Funciona de forma parecida com o useState, mas persiste o valor.
 *
 * @param key A chave para o localStorage.
 * @param initialValue O valor inicial se nada for encontrado no localStorage.
 */
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // 1. O estado é inicializado com uma função para ler o localStorage
  //    APENAS na primeira renderização.
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Verificação de segurança para Next.js (SSR), onde `window` não existe
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Tenta pegar o item salvo no localStorage
      const item = window.localStorage.getItem(key);
      // Se existir, faz o parse (converte de string para objeto/valor)
      // Se não existir, retorna o valor inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Em caso de erro (ex: modo privado), retorna o valor inicial
      console.error(`Erro ao ler localStorage com a chave "${key}":`, error);
      return initialValue;
    }
  });

  // 2. Este useEffect monitora mudanças no `storedValue`
  //    e atualiza o localStorage.
  useEffect(() => {
    // Verificação de segurança para SSR
    if (typeof window === "undefined") {
      return;
    }

    try {
      // Salva o valor no localStorage (converte para string)
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Erro ao salvar no localStorage com a chave "${key}":`, error);
    }
  }, [key, storedValue]); // Só executa se a chave ou o valor mudarem

  // 3. Retorna o valor e a função de 'set' (exatamente como o useState)
  return [storedValue, setStoredValue];
}

export default useLocalStorage;