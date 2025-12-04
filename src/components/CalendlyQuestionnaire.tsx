import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";

interface CalendlyQuestionnaireProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalendlyQuestionnaire = ({ open, onOpenChange }: CalendlyQuestionnaireProps) => {
  const [finalidade, setFinalidade] = useState<string>("");
  const [formaUso, setFormaUso] = useState<string>("");

  const handleSubmit = () => {
    if (!finalidade || !formaUso) {
      return;
    }

    // Construir URL do Calendly com parâmetros customizados
    const calendlyUrl = new URL("https://calendly.com/etiplus52/30min");
    
    // Adicionar informações como parâmetros (se o Calendly suportar)
    // Nota: O Calendly pode não processar esses parâmetros diretamente,
    // mas podemos armazená-los no localStorage para referência
    const formData = {
      finalidade,
      formaUso,
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem("calendly_form_data", JSON.stringify(formData));
    
    // Redirecionar para o Calendly
    window.open(calendlyUrl.toString(), "_blank", "noopener,noreferrer");
    
    // Fechar o dialog
    onOpenChange(false);
    
    // Resetar formulário
    setFinalidade("");
    setFormaUso("");
  };

  const isFormValid = finalidade && formaUso;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Antes de agendar, precisamos de algumas informações
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Isso nos ajuda a preparar uma proposta personalizada para suas necessidades
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Finalidade do orçamento */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">
              Qual a finalidade do orçamento? *
            </Label>
            <RadioGroup value={finalidade} onValueChange={setFinalidade}>
              <div className="flex items-center space-x-2 py-2">
                <RadioGroupItem value="uso-proprio" id="uso-proprio" />
                <Label htmlFor="uso-proprio" className="font-normal cursor-pointer">
                  Uso próprio da instituição/hospital
                </Label>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <RadioGroupItem value="revenda-finalidade" id="revenda-finalidade" />
                <Label htmlFor="revenda-finalidade" className="font-normal cursor-pointer">
                  Revenda para outras instituições
                </Label>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <RadioGroupItem value="distribuicao" id="distribuicao" />
                <Label htmlFor="distribuicao" className="font-normal cursor-pointer">
                  Distribuição em larga escala
                </Label>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <RadioGroupItem value="outro" id="outro" />
                <Label htmlFor="outro" className="font-normal cursor-pointer">
                  Outro
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Forma de aquisição */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">
              Qual a forma de aquisição? *
            </Label>
            <RadioGroup value={formaUso} onValueChange={setFormaUso}>
              <div className="flex items-center space-x-2 py-2">
                <RadioGroupItem value="compra-direta" id="compra-direta" />
                <Label htmlFor="compra-direta" className="font-normal cursor-pointer">
                  Compra direta
                </Label>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <RadioGroupItem value="revenda" id="revenda-forma" />
                <Label htmlFor="revenda-forma" className="font-normal cursor-pointer">
                  Revenda
                </Label>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <RadioGroupItem value="licitacao" id="licitacao" />
                <Label htmlFor="licitacao" className="font-normal cursor-pointer">
                  Licitação
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="w-full sm:w-auto"
            size="lg"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Continuar para agendamento
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyQuestionnaire;

