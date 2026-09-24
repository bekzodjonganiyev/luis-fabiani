/** Yordam bo'limlari — tartib va anchor'lar (futer /help#... ga link beradi). */
export const HELP_SECTIONS = ["sizes", "delivery", "returns", "care", "faq"] as const
export type HelpSectionId = (typeof HELP_SECTIONS)[number]
