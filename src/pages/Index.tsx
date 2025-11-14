import { useState } from "react";
import { BriefingForm, BriefingData } from "@/components/BriefingForm";
import { CodePreview } from "@/components/CodePreview";
import { generateLandingPage } from "@/utils/landingPageGenerator";
import { Code2, Zap } from "lucide-react";

const Index = () => {
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (briefing: BriefingData) => {
    setIsGenerating(true);
    
    // Simular um pequeno delay para dar feedback visual
    setTimeout(() => {
      const code = generateLandingPage(briefing);
      setGeneratedCode(code);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">LP Express Generator</h1>
              <p className="text-sm text-muted-foreground">Gerador Profissional de Landing Pages</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-card border-b border-border">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
              <Zap className="w-4 h-4" />
              Geração Instantânea
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Crie Landing Pages Profissionais
              <span className="block text-primary mt-2">em Segundos</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Preencha o briefing e gere um código HTML completo, responsivo e pronto para produção com Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Briefing Form */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Briefing do Cliente</h3>
              <p className="text-muted-foreground">
                Preencha as informações abaixo para gerar a landing page personalizada.
              </p>
            </div>
            <BriefingForm onGenerate={handleGenerate} isGenerating={isGenerating} />
          </div>

          {/* Code Preview */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm min-h-[600px] flex flex-col">
            {generatedCode ? (
              <CodePreview generatedCode={generatedCode} />
            ) : (
              <div className="flex-1 flex items-center justify-center text-center">
                <div className="space-y-4 max-w-md">
                  <div className="w-24 h-24 bg-muted rounded-2xl mx-auto flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    Aguardando Geração
                  </h4>
                  <p className="text-muted-foreground">
                    Preencha o formulário ao lado e clique em "Gerar Landing Page" para criar seu código HTML completo.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 md:py-16 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Recursos Incluídos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">100% Responsivo</h4>
              <p className="text-sm text-muted-foreground">Design mobile-first que funciona perfeitamente em todos os dispositivos</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Tailwind CSS</h4>
              <p className="text-sm text-muted-foreground">Estilizado com Tailwind via CDN, sem necessidade de build</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Pronto para Produção</h4>
              <p className="text-sm text-muted-foreground">Código limpo e otimizado, basta hospedar e publicar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
