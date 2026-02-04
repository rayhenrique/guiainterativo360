import { FormSimulator } from "@/components/FormSimulator";
import cadastroData from "@/data/cadastro-domiciliar.json";
import { FormConfig } from "@/types/form";

const formConfig = cadastroData as FormConfig;

export default function CadastroDomiciliarPage() {
    return (
        <div className="p-4 space-y-6">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                    {formConfig.formTitle}
                </h2>
                <p className="text-sm text-muted-foreground">
                    Toque em qualquer campo para ver as orientações de preenchimento
                </p>
            </div>

            <FormSimulator sections={formConfig.sections} />
        </div>
    );
}
