import AppShell from "@/components/AppShell";
import GalleryModal from "@/components/GalleryModal";
import { GALLERY } from "@/content/gallery";

export default function Page() {
  return (
    <AppShell title="Galeria" subtitle="Fotos com memória e significado">
      <GalleryModal items={GALLERY} />
    </AppShell>
  );
}
