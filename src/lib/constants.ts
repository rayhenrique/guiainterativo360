/**
 * Official manual source URLs from Ministério da Saúde
 */
export const MANUAL_SOURCES = {
    cadastros: "https://sisaps.saude.gov.br/sistemas/esusaps/docs/guias-preenchimento/cadastros",
    aps: "https://sisaps.saude.gov.br/sistemas/esusaps/docs/guias-preenchimento/equipeaps",
    esb: "https://sisaps.saude.gov.br/sistemas/esusaps/docs/guias-preenchimento/equipeesb",
    emulti: "https://sisaps.saude.gov.br/sistemas/esusaps/docs/guias-preenchimento/equipeemulti",
} as const;

/**
 * Reference documents
 */
export const REFERENCE_DOCS = {
    notaTecnica30:
        "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2025/nota-tecnica-no-30-2025-cgesco-desco-saps-ms.pdf/view",
} as const;

/**
 * CBOs válidos para equipe eMulti
 */
export const EMULTI_CBOS = [
    { code: "5153-05", profession: "Arte Educador" },
    { code: "2516-05", profession: "Assistente Social" },
    { code: "2234-45", profession: "Farmacêutico Hospitalar e Clínico" },
    { code: "2234-05", profession: "Farmacêutico" },
    { code: "2236-05", profession: "Fisioterapeuta" },
    { code: "2238-10", profession: "Fonoaudiólogo" },
    { code: "2251-05", profession: "Médico Acupunturista" },
    { code: "2251-20", profession: "Médico Cardiologista" },
    { code: "2251-35", profession: "Médico Dermatologista" },
    { code: "2251-55", profession: "Médico Endocrinologista" },
    { code: "2251-80", profession: "Médico Geriatra" },
    { code: "2252-50", profession: "Médico Ginecologista/Obstetra" },
    { code: "2251-95", profession: "Médico Homeopata" },
    { code: "2251-03", profession: "Médico Infectologista" },
    { code: "2251-24", profession: "Médico Pediatra" },
    { code: "2251-33", profession: "Médico Psiquiatra" },
    { code: "2233-05", profession: "Médico Veterinário" },
    { code: "2237-10", profession: "Nutricionista" },
    { code: "2241-40", profession: "Profissional de Educação Física na Saúde" },
    { code: "2515-10", profession: "Psicólogo" },
    { code: "1312-25", profession: "Sanitarista" },
    { code: "2239-05", profession: "Terapeuta Ocupacional" },
] as const;
