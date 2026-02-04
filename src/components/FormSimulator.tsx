"use client";

import { useState } from "react";
import { Info, ChevronDown, Calendar, AlertTriangle, ExternalLink } from "lucide-react";
import { FormSection, FormField, HelpData } from "@/types/form";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";

interface FormSimulatorProps {
    sections: FormSection[];
}

export function FormSimulator({ sections }: FormSimulatorProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedHelp, setSelectedHelp] = useState<HelpData | null>(null);

    const handleFieldTap = (helpData: HelpData) => {
        setSelectedHelp(helpData);
        setDrawerOpen(true);
    };

    const getInputIcon = (type: FormField["inputType"]) => {
        switch (type) {
            case "select":
                return <ChevronDown className="w-5 h-5 text-muted-foreground" />;
            case "date":
                return <Calendar className="w-5 h-5 text-muted-foreground" />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="space-y-6">
                {sections.map((section) => (
                    <div key={section.sectionId} className="space-y-4">
                        {section.sectionTitle && (
                            <div className="space-y-1">
                                <h3 className="font-semibold text-foreground text-base">
                                    {section.sectionTitle}
                                </h3>
                                {section.description && (
                                    <p className="text-sm text-muted-foreground">
                                        {section.description}
                                    </p>
                                )}
                            </div>
                        )}

                        <div className="space-y-3">
                            {section.fields.map((field) => (
                                <button
                                    key={field.id}
                                    type="button"
                                    onClick={() => handleFieldTap(field.helpData)}
                                    className="w-full text-left group"
                                >
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-foreground flex items-center gap-1">
                                            {field.label}
                                            {field.required && (
                                                <span className="text-destructive">*</span>
                                            )}
                                        </label>
                                        <div className="relative">
                                            <div
                                                className="w-full min-h-[48px] px-4 py-3 bg-background border border-input rounded-lg flex items-center justify-between
                          group-hover:border-primary group-hover:ring-2 group-hover:ring-primary/20 
                          group-focus:border-primary group-focus:ring-2 group-focus:ring-primary/20 
                          transition-all cursor-pointer"
                                            >
                                                <span className="text-muted-foreground text-sm">
                                                    {field.placeholder}
                                                </span>
                                                <div className="flex items-center gap-2">
                                                    {getInputIcon(field.inputType)}
                                                    <Info className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerContent className="max-h-[85vh]">
                    <div className="mx-auto w-full max-w-lg">
                        <DrawerHeader className="text-left">
                            <DrawerTitle className="text-xl text-primary">
                                {selectedHelp?.title}
                            </DrawerTitle>
                            <DrawerDescription className="sr-only">
                                {selectedHelp?.title}
                            </DrawerDescription>
                        </DrawerHeader>

                        <div className="px-4 pb-4 space-y-4 overflow-y-auto max-h-[50vh]">
                            {/* Explanation */}
                            <div className="prose prose-sm prose-slate max-w-none">
                                <p className="text-foreground whitespace-pre-line leading-relaxed">
                                    {selectedHelp?.explanation}
                                </p>
                            </div>

                            {/* Warning */}
                            {selectedHelp?.warning && (
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-amber-800 font-medium">Atenção</p>
                                        <p className="text-sm text-amber-700 mt-1">
                                            {selectedHelp.warning}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Official Source */}
                            {selectedHelp?.officialSource && (
                                <a
                                    href={selectedHelp.officialSource}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Ver fonte oficial
                                </a>
                            )}
                        </div>

                        <DrawerFooter className="pt-2">
                            <DrawerClose asChild>
                                <Button size="lg" className="w-full min-h-[48px] text-base font-semibold">
                                    Entendi
                                </Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    );
}
