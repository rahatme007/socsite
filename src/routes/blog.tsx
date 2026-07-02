import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Panel, SectionLabel } from "@/components/site-chrome";

// TODO: replace with your Medium feed URL, e.g. https://medium.com/feed/@yourhandle
const MEDIUM_FEED = "https://medium.com/feed/@medium";

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories?: string[];
  thumbnail?: string;
}

interface Rss2JsonResponse {
  status: string;
  items: RssItem[];
}

async function fetchFeed(): Promise<RssItem[]> {
  const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_FEED)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Feed fetch failed");
  const data = (await res.json()) as Rss2JsonResponse;
  if (data.status !== "ok") throw new Error("Feed returned non-ok status");
  return data.items;
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function readTime(html: string) {
  const words = stripHtml(html).split(" ").length;
  return `${Math.max(1, Math.round(words / 220))} min`;
}

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Field Notes — techvrs Blog" },
      {
        name: "description",
        content:
          "Detection walkthroughs, hardening notes, and lessons from building secure systems. Published on Medium, mirrored here.",
      },
      { property: "og:title", content: "Field Notes — techvrs Blog" },
      {
        property: "og:description",
        content:
          "Notes from the console — detection, hardening, and secure automation write-ups.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["medium-feed"],
    queryFn: fetchFeed,
    staleTime: 1000 * 60 * 30,
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionLabel>FIELD NOTES</SectionLabel>
      <h1 className="font-display text-5xl md:text-6xl font-bold max-w-3xl">
        Notes <span className="text-signal">from the console.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Write-ups on detection techniques, hardening walkthroughs, and lessons from
        building secure systems — published on Medium and mirrored here as they go live.
      </p>

      <div className="mt-12">
        {isLoading && <LoadingSkeleton />}
        {isError && (
          <div className="panel brackets p-8">
            <span className="b-tr" />
            <span className="b-bl" />
            <div className="mono text-[11px] uppercase tracking-widest text-critical mb-2">
              FEED_ERROR // CONNECTION_LOST
            </div>
            <p className="text-muted-foreground">
              Could not reach the transmission relay. Read the archive directly on{" "}
              <a
                href="https://medium.com"
                target="_blank"
                rel="noreferrer"
                className="text-signal hover:underline"
              >
                Medium
              </a>
              .
            </p>
          </div>
        )}
        {data && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.slice(0, 9).map((item) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="panel brackets hover-lift p-6 flex flex-col gap-3 group"
              >
                <span className="b-tr" />
                <span className="b-bl" />
                <div className="flex items-center justify-between mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>
                    {new Date(item.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </span>
                  <span>{readTime(item.description)}</span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-signal transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {stripHtml(item.description).slice(0, 160)}…
                </p>
                {item.categories && item.categories[0] && (
                  <div className="mt-auto pt-3">
                    <span className="mono text-[10px] uppercase tracking-widest text-signal border border-signal/40 px-2 py-1">
                      {item.categories[0]}
                    </span>
                  </div>
                )}
                <div className="mono text-[10px] uppercase tracking-widest text-signal">
                  Read on Medium ↗
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <>
      <div className="mono text-[11px] uppercase tracking-widest text-signal mb-6 flex items-center gap-3">
        <span className="pulse-dot" /> FETCHING LATEST TRANSMISSIONS...
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="panel brackets p-6 h-56 animate-pulse">
            <span className="b-tr" />
            <span className="b-bl" />
            <div className="h-3 w-1/3 bg-hairline mb-4" />
            <div className="h-5 w-3/4 bg-hairline mb-3" />
            <div className="h-3 w-full bg-hairline mb-2" />
            <div className="h-3 w-5/6 bg-hairline" />
          </div>
        ))}
      </div>
    </>
  );
}

// unused, keep Panel import for reference
export const _panel = Panel;
