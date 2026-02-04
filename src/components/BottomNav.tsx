"use client";

import { usePathname, useRouter } from "next/navigation";
import { ClipboardList, Stethoscope, SmilePlus, Users } from "lucide-react";

const navItems = [
  { label: "Cadastros", href: "/cadastros", icon: ClipboardList },
  { label: "APS", href: "/aps", icon: Stethoscope },
  { label: "eSB", href: "/esb", icon: SmilePlus },
  { label: "eMulti", href: "/emulti", icon: Users },
];

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg safe-area-pb">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={`flex flex-col items-center justify-center px-4 py-2 min-h-[44px] min-w-[70px] transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary/80"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "stroke-[2.5]" : ""}`} />
              <span className={`text-xs mt-1 ${isActive ? "font-semibold" : ""}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
