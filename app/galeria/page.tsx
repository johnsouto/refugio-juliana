import AppShell from "@/components/AppShell";
import GalleryModal from "@/components/GalleryModal";
import { GALLERY } from "@/content/gallery";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function withBasePath(src: string) {
  // garante que nunca fica "refugio-julianaphotos/02.jpg"
  const clean = src.replace(/^\/+/, ""); // remove barras iniciais
  return `${BASE}/${clean}`;            // sempre coloca exatamente 1 barra
}

export default function Page() {
  const fixedGallery = GALLERY.map((item: any) => ({
    ...item,
    src: withBasePath(item.src),
  }));

  return (
    <AppShell title="Galeria" subtitle="Fotos com memória e significado">
      <GalleryModal items={fixedGallery} />
    </AppShell>
  );
}
