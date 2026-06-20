import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageSchemas } from "@/lib/seo/json-ld";
import type { PageSeoKey } from "@/lib/seo/config";

interface PageJsonLdProps {
  pageKey: PageSeoKey;
}

export function PageJsonLd({ pageKey }: PageJsonLdProps) {
  return <JsonLd data={buildPageSchemas(pageKey)} />;
}
