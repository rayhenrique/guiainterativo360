"use client";

import { useState } from "react";
import Image from "next/image";
import apsData from "@/data/aps.json";
import {
    ChevronDown,
    ChevronUp,
    ExternalLink,
    Baby,
    Heart,
    Activity,
    Users,
    Stethoscope,
    Shield,
    Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionIcons: Record<string, React.ElementType> = {
    "mais-acesso": Calendar,
    "desenvolvimento-infantil": Baby,
    "gestante-puerpera": Heart,
    diabetes: Activity,
    hipertensao: Heart,
    "pessoa-idosa": Users,
    "cancer-mulher": Shield,
};

const sectionColors: Record<string, string> = {
    "mais-acesso": "bg-blue-500",
    "desenvolvimento-infantil": "bg-pink-500",
    "gestante-puerpera": "bg-purple-500",
    diabetes: "bg-orange-500",
    hipertensao: "bg-red-500",
    "pessoa-idosa": "bg-teal-500",
    "cancer-mulher": "bg-rose-500",
};

interface BoaPratica {
    id: string;
    letra: string;
    titulo: string;
    descricao: string;
    cbos?: string[];
    sigtap?: string | string[];
    imagem?: string;
    passos?: Array<{
        instrucao: string;
        imagem?: string;
        destaque?: string;
        alerta?: string;
        dica?: string;
    }>;
}

interface Section {
    id: string;
    title: string;
    description: string;
    boasPraticas?: BoaPratica[];
    subsections?: Array<{
        id: string;
        title: string;
        description: string;
        tipos?: string[];
        passos?: Array<{
            ordem: number;
            instrucao: string;
            imagem?: string;
            destaque?: string;
        }>;
    }>;
}

export default function APSPage() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [expandedPratica, setExpandedPratica] = useState<string | null>(null);

    const toggleSection = (id: string) => {
        setExpandedSection(expandedSection === id ? null : id);
        setExpandedPratica(null);
    };

    const togglePratica = (id: string) => {
        setExpandedPratica(expandedPratica === id ? null : id);
    };

    return (
        <div className="p-4 space-y-6 pb-24">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-xl font-bold text-foreground">
                    {apsData.moduleTitle}
                </h1>
                <p className="text-sm text-muted-foreground">{apsData.subtitle}</p>
            </div>

            {/* Section Cards */}
            <div className="space-y-3">
                {(apsData.sections as Section[]).map((section) => {
                    const Icon = sectionIcons[section.id] || Stethoscope;
                    const colorClass = sectionColors[section.id] || "bg-primary";
                    const isExpanded = expandedSection === section.id;

                    return (
                        <div
                            key={section.id}
                            className="border border-border rounded-xl overflow-hidden"
                        >
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full p-4 flex items-center gap-4 text-left hover:bg-accent/50 transition-colors"
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center flex-shrink-0`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="font-semibold text-foreground text-sm">
                                        {section.title}
                                    </h2>
                                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                        {section.description}
                                    </p>
                                </div>
                                {isExpanded ? (
                                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                )}
                            </button>

                            {/* Section Content */}
                            {isExpanded && (
                                <div className="border-t border-border bg-muted/20 p-4 space-y-4">
                                    {/* Subsections (for Mais Acesso) */}
                                    {section.subsections?.map((subsection) => (
                                        <div
                                            key={subsection.id}
                                            className="bg-background rounded-lg p-4 space-y-3"
                                        >
                                            <h3 className="font-semibold text-foreground">
                                                {subsection.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {subsection.description}
                                            </p>

                                            {subsection.tipos && (
                                                <div className="flex flex-wrap gap-1.5">
                                                    {subsection.tipos.map((tipo) => (
                                                        <span
                                                            key={tipo}
                                                            className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded"
                                                        >
                                                            {tipo}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {subsection.passos && (
                                                <div className="space-y-3 pt-2">
                                                    {subsection.passos.map((passo) => (
                                                        <div
                                                            key={passo.ordem}
                                                            className="flex gap-3 items-start"
                                                        >
                                                            <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                                                                {passo.ordem}
                                                            </span>
                                                            <div className="flex-1 space-y-2">
                                                                <p className="text-sm text-foreground">
                                                                    {passo.instrucao}
                                                                </p>
                                                                {passo.destaque && (
                                                                    <p className="text-xs text-primary font-medium bg-primary/10 p-2 rounded">
                                                                        💡 {passo.destaque}
                                                                    </p>
                                                                )}
                                                                {passo.imagem && (
                                                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                                                                        <Image
                                                                            src={`/referencia/aps/${passo.imagem}`}
                                                                            alt={`Figura ${passo.ordem}`}
                                                                            fill
                                                                            className="object-contain bg-white"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Boas Práticas */}
                                    {section.boasPraticas?.map((pratica) => {
                                        const isPraticaExpanded = expandedPratica === pratica.id;

                                        return (
                                            <div
                                                key={pratica.id}
                                                className="bg-background rounded-lg overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => togglePratica(pratica.id)}
                                                    className="w-full p-3 flex items-start gap-3 text-left hover:bg-accent/30 transition-colors"
                                                >
                                                    <span
                                                        className={`w-7 h-7 rounded-full ${colorClass} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}
                                                    >
                                                        {pratica.letra}
                                                    </span>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-medium text-foreground text-sm">
                                                            {pratica.titulo}
                                                        </h4>
                                                        <p className="text-xs text-muted-foreground mt-0.5">
                                                            {pratica.descricao}
                                                        </p>
                                                    </div>
                                                    {isPraticaExpanded ? (
                                                        <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                                                    ) : (
                                                        <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                                                    )}
                                                </button>

                                                {isPraticaExpanded && (
                                                    <div className="p-3 pt-0 space-y-3">
                                                        {/* CBOs */}
                                                        {pratica.cbos && (
                                                            <div className="space-y-1">
                                                                <p className="text-xs font-medium text-muted-foreground">
                                                                    Profissionais:
                                                                </p>
                                                                <div className="flex flex-wrap gap-1">
                                                                    {pratica.cbos.map((cbo) => (
                                                                        <span
                                                                            key={cbo}
                                                                            className="text-[10px] bg-muted px-1.5 py-0.5 rounded"
                                                                        >
                                                                            {cbo}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* SIGTAP */}
                                                        {pratica.sigtap && (
                                                            <div className="space-y-1">
                                                                <p className="text-xs font-medium text-muted-foreground">
                                                                    SIGTAP:
                                                                </p>
                                                                <div className="text-xs text-foreground bg-muted/50 p-2 rounded font-mono">
                                                                    {Array.isArray(pratica.sigtap)
                                                                        ? pratica.sigtap.join("\n")
                                                                        : pratica.sigtap}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Passos */}
                                                        {pratica.passos?.map((passo, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="space-y-2 border-l-2 border-primary/30 pl-3"
                                                            >
                                                                <p className="text-sm text-foreground">
                                                                    {passo.instrucao}
                                                                </p>
                                                                {passo.alerta && (
                                                                    <p className="text-xs text-amber-700 bg-amber-50 p-2 rounded">
                                                                        ⚠️ {passo.alerta}
                                                                    </p>
                                                                )}
                                                                {passo.dica && (
                                                                    <p className="text-xs text-primary bg-primary/10 p-2 rounded">
                                                                        💡 {passo.dica}
                                                                    </p>
                                                                )}
                                                                {passo.imagem && (
                                                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                                                                        <Image
                                                                            src={`/referencia/aps/${passo.imagem}`}
                                                                            alt={`Passo ${idx + 1}`}
                                                                            fill
                                                                            className="object-contain bg-white"
                                                                        />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}

                                                        {/* Imagem da prática */}
                                                        {pratica.imagem && !pratica.passos && (
                                                            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                                                                <Image
                                                                    src={`/referencia/aps/${pratica.imagem}`}
                                                                    alt={pratica.titulo}
                                                                    fill
                                                                    className="object-contain bg-white"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Official Source */}
            <div className="pt-4 border-t border-border">
                <a
                    href={apsData.officialSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-2"
                >
                    <ExternalLink className="w-4 h-4" />
                    Ver guia oficial
                </a>
            </div>
        </div>
    );
}
