import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2, Sparkles } from "lucide-react";

interface BriefingFormProps {
  onGenerate: (briefing: BriefingData) => void;
  isGenerating: boolean;
}

export interface BriefingData {
  service: string;
  targetAudience: string;
  toneOfVoice: string;
  cta: string;
  additionalInfo: string;
}

export const BriefingForm = ({ onGenerate, isGenerating }: BriefingFormProps) => {
  const [briefing, setBriefing] = useState<BriefingData>({
    service: "",
    targetAudience: "",
    toneOfVoice: "",
    cta: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(briefing);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="service" className="text-foreground">
          Serviço/Produto *
        </Label>
        <Input
          id="service"
          placeholder="Ex: Advocacia Empresarial, Pet Shop Premium, Curso de Yoga..."
          value={briefing.service}
          onChange={(e) => setBriefing({ ...briefing, service: e.target.value })}
          required
          className="bg-card border-border text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetAudience" className="text-foreground">
          Público-Alvo *
        </Label>
        <Input
          id="targetAudience"
          placeholder="Ex: Empresários 35-50 anos, Donos de pets classe A/B, Mulheres 25-40..."
          value={briefing.targetAudience}
          onChange={(e) => setBriefing({ ...briefing, targetAudience: e.target.value })}
          required
          className="bg-card border-border text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="toneOfVoice" className="text-foreground">
          Tom de Voz *
        </Label>
        <Input
          id="toneOfVoice"
          placeholder="Ex: Profissional e confiável, Divertido e acolhedor, Inspirador..."
          value={briefing.toneOfVoice}
          onChange={(e) => setBriefing({ ...briefing, toneOfVoice: e.target.value })}
          required
          className="bg-card border-border text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cta" className="text-foreground">
          CTA Principal *
        </Label>
        <Input
          id="cta"
          placeholder="Ex: Agendar Consulta, Falar no WhatsApp, Solicitar Orçamento..."
          value={briefing.cta}
          onChange={(e) => setBriefing({ ...briefing, cta: e.target.value })}
          required
          className="bg-card border-border text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalInfo" className="text-foreground">
          Informações Adicionais
        </Label>
        <Textarea
          id="additionalInfo"
          placeholder="Cores preferidas, informações específicas, links de referência..."
          value={briefing.additionalInfo}
          onChange={(e) => setBriefing({ ...briefing, additionalInfo: e.target.value })}
          rows={4}
          className="bg-card border-border text-foreground resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isGenerating || !briefing.service || !briefing.targetAudience || !briefing.toneOfVoice || !briefing.cta}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Gerando Landing Page...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Gerar Landing Page
          </>
        )}
      </Button>
    </form>
  );
};
