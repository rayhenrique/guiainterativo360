/**
 * Official CBO codes for professionals with access to Cadastro Individual
 * Source: cadastro.md - Tabela de Profissionais que possuem acesso ao Cadastro Individual
 */
export const CADASTRO_INDIVIDUAL_CBOS = [
    { code: "515105", name: "Agente Comunitário de Saúde" },
    { code: "515310", name: "Agente de Ação Social" },
    { code: "515140", name: "Agente de Combate às Endemias" },
    { code: "352210", name: "Agente de Saúde Pública" },
    { code: "515130", name: "Agente Indígena de Saneamento" },
    { code: "515124", name: "Agente Indígena de Saúde" },
    { code: "226310", name: "Arteterapeuta" },
    { code: "411010", name: "Assistente Administrativo" },
    { code: "251605", name: "Assistente Social" },
    { code: "322230", name: "Auxiliar de Enfermagem" },
    { code: "322250", name: "Auxiliar de Enfermagem da ESF" },
    { code: "322415", name: "Auxiliar em Saúde Bucal" },
    { code: "322430", name: "Auxiliar em Saúde Bucal da ESF" },
    { code: "223208", name: "Cirurgião Dentista - Clínico Geral" },
    { code: "223293", name: "Cirurgião-Dentista da ESF" },
    { code: "223505", name: "Enfermeiro" },
    { code: "223565", name: "Enfermeiro da ESF" },
    { code: "223405", name: "Farmacêutico" },
    { code: "223445", name: "Farmacêutico Hospitalar e Clínico" },
    { code: "223605", name: "Fisioterapeuta Geral" },
    { code: "223810", name: "Fonoaudiólogo" },
    { code: "225125", name: "Médico Clínico" },
    { code: "225142", name: "Médico da ESF" },
    { code: "225130", name: "Médico de Família e Comunidade" },
    { code: "223710", name: "Nutricionista" },
    { code: "224140", name: "Profissional de Educação Física na Saúde" },
    { code: "251510", name: "Psicólogo Clínico" },
    { code: "322205", name: "Técnico de Enfermagem" },
    { code: "322245", name: "Técnico de Enfermagem da ESF" },
    { code: "322255", name: "Técnico em Agente Comunitário de Saúde" },
    { code: "322405", name: "Técnico em Saúde Bucal" },
    { code: "322425", name: "Técnico em Saúde Bucal da ESF" },
    { code: "223905", name: "Terapeuta Ocupacional" },
    { code: "515120", name: "Visitador Sanitário" },
] as const;

/**
 * Official CBO codes for professionals with access to Cadastro Domiciliar
 * Note: Similar to individual but excludes some administrative roles
 */
export const CADASTRO_DOMICILIAR_CBOS = [
    { code: "515105", name: "Agente Comunitário de Saúde" },
    { code: "515140", name: "Agente de Combate às Endemias" },
    { code: "515124", name: "Agente Indígena de Saúde" },
    { code: "251605", name: "Assistente Social" },
    { code: "322230", name: "Auxiliar de Enfermagem" },
    { code: "322250", name: "Auxiliar de Enfermagem da ESF" },
    { code: "223505", name: "Enfermeiro" },
    { code: "223565", name: "Enfermeiro da ESF" },
    { code: "225142", name: "Médico da ESF" },
    { code: "225130", name: "Médico de Família e Comunidade" },
    { code: "322205", name: "Técnico de Enfermagem" },
    { code: "322245", name: "Técnico de Enfermagem da ESF" },
    { code: "322255", name: "Técnico em Agente Comunitário de Saúde" },
    { code: "515120", name: "Visitador Sanitário" },
] as const;

/**
 * Concepts from official documentation
 */
export const CADASTRO_CONCEPTS = {
    pessoaCadastrada: {
        term: "Pessoa cadastrada",
        definition: "Aquela que possui cadastro individual (MICI) e cumpre integralmente os requisitos de validação do Siaps.",
    },
    pessoaCadastroCompleto: {
        term: "Pessoa com cadastro completo",
        definition: "Aquela que possui cadastro individual (MICI) e cadastro domiciliar e territorial (MICDT) e atende integralmente aos requisitos de validação do Siaps.",
    },
} as const;

/**
 * Official documentation references
 */
export const CADASTRO_REFERENCES = {
    notaTecnica: "Nota Técnica Nº 30/2025-CGESCO/DESCO/SAPS/MS",
    portariaConsolidacao: "Portaria de Consolidação GM/MS nº 6, de 28 de setembro de 2017",
    portariaAtualizacao: "Portaria GM/MS nº 3.493, de 10 de abril de 2024",
    notaMetodologica: "Nota Metodológica N° 0045262248/2024",
    guiaUrl: "https://sisaps.saude.gov.br/sistemas/esusaps/docs/guias-preenchimento/cadastros",
} as const;

/**
 * Teams responsible for cadastro
 */
export const EQUIPES_CADASTRO = ["eSF", "eAP", "eSB", "eMulti"] as const;
