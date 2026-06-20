import type { MetadataRoute } from "next";
import { MANIFEST } from "@/lib/seo/config";

export default function manifest(): MetadataRoute.Manifest {
  return MANIFEST;
}
