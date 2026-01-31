import AppShell from "@/components/AppShell";
import GalleryModal from "@/components/GalleryModal";
import { GALLERY } from "@/content/gallery";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Page() {
  // corrige todos os caminhos vindos do conteúdo
  const fixedGallery = GALLERY.map(item => ({
    ...item,
    src: `${BASE}${item.src}`,
  }));

  return (
    <AppShell title="Galeria" subtitle="Fotos com memória e significado">
      <GalleryModal items={fixedGallery} />
    </AppShell>
  );
}
