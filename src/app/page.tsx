"use client";

import Link from "next/link";
import { Stethoscope, ClipboardList, SmilePlus, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: ClipboardList,
    title: "Cadastros",
    description: "Fichas de Cadastro Individual e Domiciliar",
    href: "/cadastros",
  },
  {
    icon: Stethoscope,
    title: "APS",
    description: "Fichas de Atendimento e Procedimentos",
    href: "/aps",
  },
  {
    icon: SmilePlus,
    title: "Saúde Bucal",
    description: "Fichas da equipe de Saúde Bucal",
    href: "/esb",
  },
  {
    icon: Users,
    title: "eMulti",
    description: "Fichas da Equipe Multiprofissional",
    href: "/emulti",
  },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col">
      {/* Hero Section */}
      <section className="px-6 py-8 text-center space-y-4">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
          <Stethoscope className="w-10 h-10 text-primary" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Guia Interativo Brasil Saúde 360
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
            Consulta rápida e interativa para preenchimento das fichas do <strong>e-SUS APS</strong>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-4">
        <div className="bg-accent/50 rounded-xl p-4 space-y-2">
          <h2 className="font-semibold text-foreground text-sm">
            Como funciona?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Toque em qualquer campo do formulário simulado e veja instantaneamente as orientações oficiais de preenchimento, sem precisar consultar PDFs.
          </p>
        </div>
      </section>

      {/* Quick Access */}
      <section className="px-6 py-4 flex-1">
        <h2 className="text-sm font-semibold text-muted-foreground mb-3">
          ACESSO RÁPIDO
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link key={feature.href} href={feature.href}>
                <div className="bg-card border border-border rounded-xl p-4 h-full hover:border-primary hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-6 border-b border-border/40">
        <Link href="/cadastros/individual">
          <Button className="w-full min-h-[48px] text-base font-semibold gap-2">
            Começar Consulta
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </section>

      {/* Developer Footer */}
      <footer className="px-6 py-8 text-center space-y-2 mt-auto bg-muted/20">
        <p className="text-xs text-muted-foreground font-medium">
          Desenvolvido por <span className="font-bold text-foreground">Ray Henrique</span>
        </p>
        <p className="text-xs text-primary font-semibold">
          KL Tecnologia
        </p>
        <div className="flex flex-col gap-1 text-[10px] text-muted-foreground">
          <a
            href="https://kltecnologia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline decoration-border"
          >
            kltecnologia.com
          </a>
          <span>+55 82 99630-4742</span>
        </div>
      </footer>
    </div>
  );
}
