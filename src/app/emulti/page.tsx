"use client";

import { useState } from "react";
import Image from "next/image";
import emultiData from "@/data/emulti.json";
import {
    ChevronDown,
    ChevronUp,
    ExternalLink,
    Users,
    Activity,
    Smartphone,
    Monitor,
    Share2,
    Briefcase
} from "lucide-react";

const indicatorIcons: Record<string, React.ElementType> = {
    "media-atendimentos": Briefcase,
    "acoes-interprofissionais": Share2,
};

const indicatorColors: Record<string, string> = {
    "media-atendimentos": "bg-blue-600",
    "acoes-interprofissionais": "bg-indigo-600",
};

interface Passo {
    ordem: number;
    instrucao: string;
    imagem?: string;
    alerta?: string;
    dica?: string;
}

interface Aba {
    titulo: string;
    passos: Passo[];
}

interface Secao {
    titulo: string;
    descricao?: string;
    cbos?: string[];
    passos?: Passo[];
    abas?: Aba[];
}

interface Indicador {
    id: string;
    titulo: string;
    descricao: string;
    secoes: Secao[];
}

export default function EMultiPage() {
    const [expandedIndicator, setExpandedIndicator] = useState<string | null>(null);
    const [activeTabs, setActiveTabs] = useState<Record<string, number>>({});

    const toggleIndicator = (id: string) => {
        setExpandedIndicator(expandedIndicator === id ? null : id);
    };

    const handleTabChange = (sectionKey: string, tabIndex: number) => {
        setActiveTabs(prev => ({
            ...prev,
            [sectionKey]: tabIndex
        }));
    };

    return (
        <div className="p-4 space-y-6 pb-24">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-xl font-bold text-foreground">
                    {emultiData.titulo}
                </h1>
                <p className="text-sm text-muted-foreground">{emultiData.descricao}</p>

                {/* Periodicidade */}
                <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Atualização: {emultiData.periodicidade.atualizacao}
                    </span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Avaliação: {emultiData.periodicidade.avaliacao}
                    </span>
                </div>
            </div>

            {/* Indicator Cards */}
            <div className="space-y-3">
                {(emultiData.indicadores as Indicador[]).map((indicador, index) => {
                    const Icon = indicatorIcons[indicador.id] || Users;
                    const colorClass = indicatorColors[indicador.id] || "bg-primary";
                    const isExpanded = expandedIndicator === indicador.id;

                    return (
                        <div
                            key={indicador.id}
                            className="border border-border rounded-xl overflow-hidden"
                        >
                            {/* Indicator Header */}
                            <button
                                onClick={() => toggleIndicator(indicador.id)}
                                className="w-full p-4 flex items-center gap-4 text-left hover:bg-accent/50 transition-colors"
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center flex-shrink-0`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold bg-muted px-1.5 py-0.5 rounded">
                                            {index + 1}
                                        </span>
                                        <h2 className="font-semibold text-foreground text-sm truncate">
                                            {indicador.titulo.replace(/^\d+\.\s*/, '')}
                                        </h2>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                        {indicador.descricao}
                                    </p>
                                </div>
                                {isExpanded ? (
                                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                )}
                            </button>

                            {/* Indicator Content */}
                            {isExpanded && (
                                <div className="border-t border-border bg-muted/20 p-4 space-y-6">
                                    {indicador.secoes.map((secao, secIndex) => {
                                        const uniqueSecKey = `${indicador.id}-sec-${secIndex}`;

                                        return (
                                            <div key={secIndex} className="bg-background rounded-lg p-4 shadow-sm space-y-4">
                                                {/* Section Header */}
                                                <div className="space-y-1">
                                                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                                                        <Activity className="w-4 h-4 text-primary" />
                                                        {secao.titulo}
                                                    </h3>
                                                    {secao.descricao && (
                                                        <p className="text-sm text-muted-foreground">
                                                            {secao.descricao}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* CBOs */}
                                                {secao.cbos && (
                                                    <div className="bg-muted/30 p-3 rounded-lg space-y-2">
                                                        <p className="text-xs font-medium text-muted-foreground">Profissionais (CBOs):</p>
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {secao.cbos.map((cbo, i) => (
                                                                <span key={i} className="text-[10px] bg-white border border-border px-1.5 py-0.5 rounded shadow-sm">
                                                                    {cbo}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Passos (sem abas) */}
                                                {secao.passos && (
                                                    <div className="space-y-3 pt-2">
                                                        <p className="text-xs font-medium text-muted-foreground">Passo a passo:</p>
                                                        {secao.passos.map((passo) => (
                                                            <div key={passo.ordem} className="flex gap-3 items-start">
                                                                <span className={`w-6 h-6 rounded-full ${colorClass} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                                                    {passo.ordem}
                                                                </span>
                                                                <div className="flex-1 space-y-2">
                                                                    <p className="text-sm text-foreground">{passo.instrucao}</p>
                                                                    {passo.imagem && (
                                                                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                                                                            <Image
                                                                                src={`/referencia/emulti/${passo.imagem}`}
                                                                                alt={`Passo ${passo.ordem}`}
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

                                                {/* Abas */}
                                                {secao.abas && (
                                                    <div className="space-y-4">
                                                        {/* Tab Headers */}
                                                        <div className="flex p-1 bg-muted rounded-lg">
                                                            {secao.abas.map((aba, abaIndex) => {
                                                                const isActive = (activeTabs[uniqueSecKey] || 0) === abaIndex;
                                                                return (
                                                                    <button
                                                                        key={abaIndex}
                                                                        onClick={() => handleTabChange(uniqueSecKey, abaIndex)}
                                                                        className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-md transition-all ${isActive
                                                                                ? "bg-background text-foreground shadow-sm"
                                                                                : "text-muted-foreground hover:text-foreground"
                                                                            }`}
                                                                    >
                                                                        {aba.titulo.toLowerCase().includes("app") ? <Smartphone className="w-3 H-3" /> : <Monitor className="w-3 h-3" />}
                                                                        {aba.titulo}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>

                                                        {/* Tab Content */}
                                                        <div className="pt-2">
                                                            {secao.abas[(activeTabs[uniqueSecKey] || 0)].passos.map((passo) => (
                                                                <div key={passo.ordem} className="flex gap-3 items-start mb-6 last:mb-0">
                                                                    <span className={`w-6 h-6 rounded-full ${colorClass} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                                                        {passo.ordem}
                                                                    </span>
                                                                    <div className="flex-1 space-y-2">
                                                                        <p className="text-sm text-foreground">{passo.instrucao}</p>
                                                                        {passo.imagem && (
                                                                            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                                                                                <Image
                                                                                    src={`/referencia/emulti/${passo.imagem}`}
                                                                                    alt={`Passo ${passo.ordem}`}
                                                                                    fill
                                                                                    className="object-contain bg-white"
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
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
                    href={emultiData.officialSource}
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
