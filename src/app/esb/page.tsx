"use client";

import { useState } from "react";
import Image from "next/image";
import esbData from "@/data/esb.json";
import {
    ChevronDown,
    ChevronUp,
    ExternalLink,
    Stethoscope,
    FileCheck,
    Scissors,
    Sparkles,
    Shield,
    Heart,
} from "lucide-react";

const indicatorIcons: Record<string, React.ElementType> = {
    "primeira-consulta": Stethoscope,
    "tratamento-concluido": FileCheck,
    "taxa-exodontias": Scissors,
    "escovacao-supervisionada": Sparkles,
    "procedimentos-preventivos": Shield,
    "tratamento-art": Heart,
};

const indicatorColors: Record<string, string> = {
    "primeira-consulta": "bg-blue-500",
    "tratamento-concluido": "bg-green-500",
    "taxa-exodontias": "bg-red-500",
    "escovacao-supervisionada": "bg-pink-500",
    "procedimentos-preventivos": "bg-teal-500",
    "tratamento-art": "bg-purple-500",
};

interface Passo {
    ordem: number;
    instrucao: string;
    imagem?: string;
    alerta?: string;
    dica?: string;
}

interface Indicador {
    id: string;
    numero: number;
    titulo: string;
    descricao: string;
    cbos?: string[];
    sigtap?: string[];
    publicoAlvo?: string;
    modeloInformacao?: string;
    passos?: Passo[];
}

export default function ESBPage() {
    const [expandedIndicator, setExpandedIndicator] = useState<string | null>(null);

    const toggleIndicator = (id: string) => {
        setExpandedIndicator(expandedIndicator === id ? null : id);
    };

    return (
        <div className="p-4 space-y-6 pb-24">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-xl font-bold text-foreground">
                    {esbData.titulo}
                </h1>
                <p className="text-sm text-muted-foreground">{esbData.descricao}</p>

                {/* Periodicidade */}
                <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Atualização: {esbData.periodicidade.atualizacao}
                    </span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Avaliação: {esbData.periodicidade.avaliacao}
                    </span>
                </div>
            </div>

            {/* Indicator Cards */}
            <div className="space-y-3">
                {(esbData.indicadores as Indicador[]).map((indicador) => {
                    const Icon = indicatorIcons[indicador.id] || Stethoscope;
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
                                            {indicador.numero}
                                        </span>
                                        <h2 className="font-semibold text-foreground text-sm truncate">
                                            {indicador.titulo}
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
                                <div className="border-t border-border bg-muted/20 p-4 space-y-4">
                                    {/* Público Alvo */}
                                    {indicador.publicoAlvo && (
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <p className="text-xs font-medium text-primary">
                                                🎯 Público-alvo: {indicador.publicoAlvo}
                                            </p>
                                        </div>
                                    )}

                                    {/* Modelo de Informação */}
                                    {indicador.modeloInformacao && (
                                        <div className="bg-blue-50 p-3 rounded-lg">
                                            <p className="text-xs text-blue-700">
                                                📋 {indicador.modeloInformacao}
                                            </p>
                                        </div>
                                    )}

                                    {/* CBOs */}
                                    {indicador.cbos && (
                                        <div className="space-y-2">
                                            <p className="text-xs font-medium text-muted-foreground">
                                                Profissionais (CBOs):
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {indicador.cbos.map((cbo) => (
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
                                    {indicador.sigtap && (
                                        <div className="space-y-2">
                                            <p className="text-xs font-medium text-muted-foreground">
                                                Códigos SIGTAP:
                                            </p>
                                            <div className="bg-muted/50 p-2 rounded font-mono text-xs space-y-1">
                                                {indicador.sigtap.map((code) => (
                                                    <div key={code} className="text-foreground">
                                                        {code}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Passos */}
                                    {indicador.passos && (
                                        <div className="space-y-3 pt-2">
                                            <p className="text-xs font-medium text-muted-foreground">
                                                Passo a passo:
                                            </p>
                                            {indicador.passos.map((passo) => (
                                                <div
                                                    key={passo.ordem}
                                                    className="flex gap-3 items-start"
                                                >
                                                    <span className={`w-6 h-6 rounded-full ${colorClass} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                                                        {passo.ordem}
                                                    </span>
                                                    <div className="flex-1 space-y-2">
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
                                                                    src={`/referencia/esb/${passo.imagem}`}
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
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Official Source */}
            <div className="pt-4 border-t border-border">
                <a
                    href={esbData.officialSource}
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
