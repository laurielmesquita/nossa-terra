import { Badge } from "@/components/ui/badge";
import { Sprout, Home, Tractor } from "lucide-react";

const audience = [
  {
    title: "Compradores & Investidores",
    desc: "Busca por terras de alta produtividade ou valorização com blindagem jurídica total.",
    features: ["Chain of Title Analysis", "Soil Viability Report", "Tax Optimization"],
    icon: <Sprout className="w-8 h-8" />,
  },
  {
    title: "Proprietários & Vendedores",
    desc: "Venda profissional de ativos rurais com avaliação técnica e regularização completa.",
    features: ["Technical Asset Valuation", "Legal Regularization", "Qualified Network"],
    icon: <Home className="w-8 h-8" />,
  },
  {
    title: "Produtores em Expansão",
    desc: "Arrendamento ou compra de áreas vizinhas com análise de bacia hídrica e logística.",
    features: ["Logistics Analysis", "Water Resource Audit", "Crop History Study"],
    icon: <Tractor className="w-8 h-8" />,
  },
];

export default function AudienceSection() {
  const btnClass = "w-full bg-[#0F3D35] hover:bg-teal-900 text-white rounded-2xl h-14 font-extrabold shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center no-underline";

  return (
    <section className="py-32 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-600/20 to-transparent" />
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-20 space-y-6">
          <Badge variant="outline" className="border-teal-600/30 text-teal-600 px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] bg-white">
            Para quem trabalhamos
          </Badge>
          <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-[#0F3D35] leading-tight">
            Soluções para o <span className="text-teal-600 italic">Protagonista</span> do Campo.
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Seja você um investidor de fora ou um produtor local, nossa consultoria é moldada para o seu nível de exigência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {audience.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[3rem] p-12 shadow-[0_40px_80px_-15px_rgba(15,61,53,0.06)] border border-gray-100 flex flex-col hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-700 hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-extrabold text-[#0F3D35] mb-6">{item.title}</h3>
              <p className="text-gray-500 mb-10 leading-relaxed font-medium">{item.desc}</p>
              
              <div className="space-y-4 mb-12 flex-1">
                {item.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm font-bold text-[#0F3D35]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    {f}
                  </div>
                ))}
              </div>

              <a
                href="/contato"
                className={btnClass}
              >
                Solicitar Consultoria
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
