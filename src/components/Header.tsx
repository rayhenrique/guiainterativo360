"use client";

import { usePathname, useRouter } from "next/navigation";
import { Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionTitles: Record<string, string> = {
    "/": "Manual Saúde 360",
    "/cadastros": "Cadastros",
    "/aps": "APS",
    "/esb": "Saúde Bucal",
    "/emulti": "eMulti",
};

export function Header() {
    const pathname = usePathname();
    const router = useRouter();

    // Get section title from route
    const baseRoute = pathname === "/" ? "/" : "/" + (pathname.split("/")[1] || "");
    const title = sectionTitles[baseRoute] || "Manual Saúde 360";

    // Show back button when not on home page
    const showBackButton = pathname !== "/";

    const handleBack = () => {
        // If on a subpage (e.g., /cadastros/individual), go to parent
        const segments = pathname.split("/").filter(Boolean);
        if (segments.length > 1) {
            router.push("/" + segments[0]);
        } else {
            // If on a main section, go to home
            router.push("/");
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md safe-area-pt">
            <div className="flex items-center justify-between h-14 px-2">
                <div className="flex items-center gap-1">
                    {showBackButton && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleBack}
                            className="text-primary-foreground hover:bg-primary-foreground/10 min-h-[44px] min-w-[44px]"
                            aria-label="Voltar"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                    )}
                    <h1 className="text-lg font-semibold truncate">{title}</h1>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground hover:bg-primary-foreground/10 min-h-[44px] min-w-[44px]"
                    aria-label="Buscar"
                >
                    <Search className="w-5 h-5" />
                </Button>
            </div>
        </header>
    );
}
