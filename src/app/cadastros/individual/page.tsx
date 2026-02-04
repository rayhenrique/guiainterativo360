"use client";

import { FormSimulator } from "@/components/FormSimulator";
import cadastroData from "@/data/cadastro-individual.json";
import { FormSection } from "@/types/form";
import { Info, ExternalLink } from "lucide-react";

interface CadastroIntroduction {
    notaTecnica: string;
    description: string;
    equipesResponsaveis: string[];
    avisoImportante: string;
}

interface CadastroConcept {
    term: string;
    definition: string;
}

interface CadastroData {
    formId: string;
    formTitle: string;
    introduction: CadastroIntroduction;
    concepts: CadastroConcept[];
    sections: FormSection[];
}

const formConfig = cadastroData as CadastroData;

export default function CadastroIndividualPage() {
    return (
        <div className="p-4 space-y-6">
            {/* Header */}
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                    {formConfig.formTitle}
                </h2>
                <p className="text-sm text-muted-foreground">
                    Toque em cada passo para ver as orientações detalhadas
                </p>
            </div>

            {/* Introduction Card */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 space-y-3">
                <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-primary">
                            {formConfig.introduction.notaTecnica}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                            {formConfig.introduction.description}
                        </p>
                    </div>
                </div>

                {/* Teams */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                    {formConfig.introduction.equipesResponsaveis.map((equipe) => (
                        <span
                            key={equipe}
                            className="text-[10px] font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded"
                        >
                            {equipe}
                        </span>
                    ))}
                </div>
            </div>

            {/* Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-800 font-medium">
                    ⚠️ {formConfig.introduction.avisoImportante}
                </p>
            </div>

            {/* Form Simulator */}
            <FormSimulator sections={formConfig.sections} />

            {/* Official Source */}
            <div className="pt-4 border-t border-border">
                <a
                    href="https://sisaps.saude.gov.br/sistemas/esusaps/docs/guias-preenchimento/cadastros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-2"
                >
                    <ExternalLink className="w-4 h-4" />
                    Ver guia oficial completo
                </a>
            </div>
        </div>
    );
}
