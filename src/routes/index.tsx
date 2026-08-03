import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/kd/SiteHeader";
import { Canopy } from "@/components/kd/Canopy";
import { Trunk } from "@/components/kd/Trunk";
import { Branches } from "@/components/kd/Branches";
import { River } from "@/components/kd/River";
import { Soil } from "@/components/kd/Soil";

const title = "kd.inc — Ingeniously Disruptive Investment Company";
const description =
  "kd.inc is a 100% black-owned & managed South African investment company driving financial and digital inclusion across property, healthcare, telecom and finance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top" className="overflow-x-hidden bg-background font-sans text-foreground">
      <SiteHeader />
      <Canopy />
      <Trunk />
      <Branches />
      <River />
      <Soil />
    </main>
  );
}
