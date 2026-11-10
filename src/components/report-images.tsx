import { Maximize2 } from "lucide-react";
import { reportImages } from "@/data/report-images";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function ReportImages({ group, from, to }: { group?: string; from?: number; to?: number }) {
  const images = reportImages.filter((image) => (!group || image.group === group) && (from === undefined || image.index >= from) && (to === undefined || image.index < to));
  if (!images.length) return null;
  return <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{images.map((image) => <figure key={image.id} className="min-w-0">
    <Dialog><DialogTrigger asChild><Button variant="ghost" className="relative h-auto w-full overflow-hidden rounded-lg border bg-background p-0" aria-label={`Enlarge ${image.caption}`}>
      <img src={image.url} alt={image.caption} loading="lazy" className="aspect-[4/3] w-full object-contain" />
      <Maximize2 className="absolute bottom-3 right-3 text-primary" />
    </Button></DialogTrigger><DialogContent className="max-h-[90vh] max-w-5xl overflow-auto"><DialogTitle>{image.caption}</DialogTitle><img src={image.url} alt={image.caption} className="max-h-[75vh] w-full object-contain" /></DialogContent></Dialog>
    <figcaption className="mt-2 text-xs text-muted-foreground">{image.caption}</figcaption>
  </figure>)}</div>;
}

export function PrototypePhoto({ className = "" }: { className?: string }) {
  const image = reportImages.find((item) => item.number === 134);
  if (!image) return null;
  return <figure className={className}><img src={image.url} alt="Completed SmartMed prototype with eight blue drawers, OLED display and confirmation button" className="w-full rounded-lg object-contain" /><figcaption className="mt-2 text-xs text-muted-foreground">Completed SmartMed prototype — original project photograph.</figcaption></figure>;
}