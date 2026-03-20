"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const targetId = sessionStorage.getItem("scrollTo");
    if (!targetId) return;

    const element = document.getElementById(targetId);
    if (!element) return;

    sessionStorage.removeItem("scrollTo");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname]);

  return null;
}
