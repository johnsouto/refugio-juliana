"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 380);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-0.75 overflow-hidden bg-transparent">
      <div className="loader-bar" />
    </div>
  );
}
