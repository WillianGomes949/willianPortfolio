import { pricingData } from "@/data/precodb";
import { BiCreditCard } from "react-icons/bi";
import { BsQrCode } from "react-icons/bs";

export default function PriceGrade (){
    return(
        <section className="container mx-auto mb-16">
                  <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl border border-gray-700 shadow-2xl">
                    <div className="grid grid-cols-1 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-100 mb-4">
                          Formas de Pagamento Flexíveis
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl">
                          Facilidade para fechar negócio sem burocracia. Escolha a
                          melhor opção para o seu fluxo de caixa e comece seu projeto
                          hoje mesmo.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Opção PIX */}
                          <div className="flex items-center p-5 bg-gray-700/30 rounded-2xl border border-gray-600/30 hover:bg-gray-700/50 transition-colors">
                            <div className="bg-green-500/10 p-3 rounded-full mr-4 text-green-400 shrink-0">
                              <BsQrCode size={24} />
                            </div>
                            <div>
                              <div className="font-bold text-gray-200">PIX à vista</div>
                              <div className="text-sm text-green-400 font-bold mt-1">
                                {pricingData.paymentInfo.pixDiscount}
                              </div>
                            </div>
                          </div>
        
                          {/* Opção Cartão */}
                          <div className="flex items-center p-5 bg-gray-700/30 rounded-2xl border border-gray-600/30 hover:bg-gray-700/50 transition-colors">
                            <div className="bg-will-secondary/10 p-3 rounded-full mr-4 text-will-secondary shrink-0">
                              <BiCreditCard size={24} />
                            </div>
                            <div>
                              <div className="font-bold text-gray-200">
                                {pricingData.paymentInfo.creditCard.installments}
                              </div>
                              <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">
                                Visa • Master • Elo • Hiper
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
    )
}