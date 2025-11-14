import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Eye, Code2 } from "lucide-react";
import { toast } from "sonner";

interface CodePreviewProps {
  generatedCode: string;
}

export const CodePreview = ({ generatedCode }: CodePreviewProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      toast.success("Código copiado com sucesso!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar código");
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-foreground">Landing Page Gerada</h2>
        <Button
          onClick={handleCopy}
          variant="secondary"
          size="sm"
          className="bg-secondary hover:bg-secondary/80"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4 text-success" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copiar Código
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="code" className="flex-1 flex flex-col">
        <TabsList className="bg-secondary">
          <TabsTrigger value="code" className="data-[state=active]:bg-card">
            <Code2 className="mr-2 h-4 w-4" />
            Código
          </TabsTrigger>
          <TabsTrigger value="preview" className="data-[state=active]:bg-card">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="flex-1 mt-4">
          <div className="h-full bg-card border border-border rounded-lg overflow-hidden">
            <pre className="h-full overflow-auto p-4">
              <code className="text-sm text-foreground font-mono whitespace-pre">
                {generatedCode}
              </code>
            </pre>
          </div>
        </TabsContent>

        <TabsContent value="preview" className="flex-1 mt-4">
          <div className="h-full bg-white border border-border rounded-lg overflow-hidden">
            <iframe
              srcDoc={generatedCode}
              className="w-full h-full"
              title="Landing Page Preview"
              sandbox="allow-scripts"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
