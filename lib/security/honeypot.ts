/** Returns true when the honeypot field was triggered (bot submission). */
export function isHoneypotTriggered(website: string | undefined): boolean {
  return Boolean(website?.trim());
}
