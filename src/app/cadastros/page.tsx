"use client";

import { useState } from "react";
import cadastrosData from "@/data/cadastros.json";
import { Info, ChevronDown, ChevronUp, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CadastrosPage() {
    const [showCbosIndividual, setShowCbosIndividual] = useState(false);
    const [showCbosDomiciliar, setShowCbosDomiciliar] = useState(false);
    const [searchCbo, setSearchCbo] = useState("");

    const data = cadastrosData.content;

    const filterCbos = (cbos: { codigo: string; nome: string }[]) => {
        if (!searchCbo) return cbos;
        const term = searchCbo.toLowerCase();
        return cbos.filter(
            (cbo) =>
                cbo.codigo.toLowerCase().includes(term) ||
                cbo.nome.toLowerCase().includes(term)
        );
    };

    return (
        <div className="p-4 space-y-6">
            {/* Header */}
            <div className="space-y-1">
                <h1 className="text-xl font-bold text-foreground">
                    {cadastrosData.moduleTitle}
                </h1>
                <p className="text-sm text-muted-foreground">{cadastrosData.subtitle}</p>
            </div>

            {/* Cadastro Individual Section */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-primary">
                    {data.cadastroIndividual.title}
                </h2>

                {/* Nota Técnica */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <p className="text-xs font-medium text-primary">
                        {data.cadastroIndividual.notaTecnica}
                    </p>
                </div>

                {/* Descrição */}
                <p className="text-sm text-foreground leading-relaxed">
                    {data.cadastroIndividual.descricao}
                </p>

                {/* Equipes */}
                <div className="flex flex-wrap gap-2">
                    {data.cadastroIndividual.equipesResponsaveis.map((equipe) => (
                        <span
                            key={equipe}
                            className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-1 rounded"
                        >
                            {equipe}
                        </span>
                    ))}
                </div>

                {/* Conceitos */}
                <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-foreground">
                        Conceitos Importantes
                    </h3>
                    {data.cadastroIndividual.conceitos.map((conceito) => (
                        <div
                            key={conceito.nomenclatura}
                            className="bg-muted/50 rounded-lg p-3 space-y-1"
                        >
                            <p className="text-sm font-medium text-foreground">
                                {conceito.nomenclatura}
                            </p>
                            <p className="text-xs text-muted-foreground">{conceito.conceito}</p>
                        </div>
                    ))}
                </div>

                {/* Avisos */}
                {data.cadastroIndividual.avisos.map((aviso, index) => (
                    <div
                        key={index}
                        className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-2"
                    >
                        <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-800">{aviso}</p>
                    </div>
                ))}
            </section>

            {/* Acompanhamento Território */}
            <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                    {data.acompanhamentoTerritorio.title}
                </h2>

                <div className="space-y-3">
                    {data.acompanhamentoTerritorio.passoAPasso.map((passo) => (
                        <div
                            key={passo.passo}
                            className={`rounded-lg p-4 ${passo.destaque
                                    ? "bg-primary/10 border border-primary/30"
                                    : "bg-muted/30 border border-border"
                                }`}
                        >
                            <div className="flex gap-3">
                                <span
                                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${passo.destaque
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground"
                                        }`}
                                >
                                    {passo.passo}
                                </span>
                                <p
                                    className={`text-sm leading-relaxed ${passo.destaque ? "font-medium text-foreground" : "text-foreground"
                                        }`}
                                >
                                    {passo.instrucao}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Search CBOs */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Buscar CBO por código ou nome..."
                    value={searchCbo}
                    onChange={(e) => setSearchCbo(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
            </div>

            {/* Tabela CBOs Cadastro Individual */}
            <section className="space-y-2">
                <Button
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => setShowCbosIndividual(!showCbosIndividual)}
                >
                    <span className="text-sm font-medium">
                        {data.profissionaisCadastroIndividual.title}
                    </span>
                    {showCbosIndividual ? (
                        <ChevronUp className="w-4 h-4" />
                    ) : (
                        <ChevronDown className="w-4 h-4" />
                    )}
                </Button>

                {showCbosIndividual && (
                    <div className="border border-border rounded-lg overflow-hidden">
                        <table className="w-full text-xs">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-3 py-2 text-left font-medium">CBO</th>
                                    <th className="px-3 py-2 text-left font-medium">Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterCbos(data.profissionaisCadastroIndividual.cbos).map(
                                    (cbo) => (
                                        <tr key={cbo.codigo} className="border-t border-border">
                                            <td className="px-3 py-2 font-mono">{cbo.codigo}</td>
                                            <td className="px-3 py-2">{cbo.nome}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                        {filterCbos(data.profissionaisCadastroIndividual.cbos).length === 0 && (
                            <p className="text-xs text-muted-foreground text-center py-4">
                                Nenhum CBO encontrado
                            </p>
                        )}
                    </div>
                )}
            </section>

            {/* Tabela CBOs Cadastro Domiciliar */}
            <section className="space-y-2">
                <Button
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => setShowCbosDomiciliar(!showCbosDomiciliar)}
                >
                    <span className="text-sm font-medium">
                        {data.profissionaisCadastroDomiciliar.title}
                    </span>
                    {showCbosDomiciliar ? (
                        <ChevronUp className="w-4 h-4" />
                    ) : (
                        <ChevronDown className="w-4 h-4" />
                    )}
                </Button>

                {showCbosDomiciliar && (
                    <div className="border border-border rounded-lg overflow-hidden">
                        <table className="w-full text-xs">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-3 py-2 text-left font-medium">CBO</th>
                                    <th className="px-3 py-2 text-left font-medium">Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterCbos(data.profissionaisCadastroDomiciliar.cbos).map(
                                    (cbo) => (
                                        <tr key={cbo.codigo} className="border-t border-border">
                                            <td className="px-3 py-2 font-mono">{cbo.codigo}</td>
                                            <td className="px-3 py-2">{cbo.nome}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                        {filterCbos(data.profissionaisCadastroDomiciliar.cbos).length === 0 && (
                            <p className="text-xs text-muted-foreground text-center py-4">
                                Nenhum CBO encontrado
                            </p>
                        )}
                    </div>
                )}
            </section>

            {/* Official Source */}
            <div className="pt-4 border-t border-border">
                <a
                    href={cadastrosData.officialSource}
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
