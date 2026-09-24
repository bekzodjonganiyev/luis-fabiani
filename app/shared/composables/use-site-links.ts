export interface SiteLink {
  label: string
  to?: string
  href?: string
}

/** Sayt yo'llari — bitta joyda (Sitemap.html). */
export const useSiteLinks = () => {
  const { t } = useI18n()

  const nav = computed(() => [
    { key: "catalog", label: t("nav.catalog"), to: "/catalog", mega: true },
    { key: "collections", label: t("nav.collections"), to: "/collections" },
    { key: "brand", label: t("nav.brand"), to: "/brand/workshop" },
    { key: "business", label: t("nav.business"), to: "/business" },
    { key: "help", label: t("nav.help"), to: "/help" }
  ])

  const footer = computed<Record<"contact" | "service" | "brand" | "business", SiteLink[]>>(() => ({
    contact: [
      { label: t("placeholders.phone"), href: `tel:+998` },
      { label: t("footer.hours"), href: undefined },
      { label: t("placeholders.address_store"), to: "/stores" },
      { label: t("placeholders.address_workshop"), to: "/stores" },
      { label: t("footer.contacts"), to: "/stores#contact" }
    ],
    service: [
      { label: t("footer.sizes"), to: "/help#sizes" },
      { label: t("footer.delivery"), to: "/help#delivery" },
      { label: t("footer.returns"), to: "/help#returns" },
      { label: t("footer.care"), to: "/help#care" },
      { label: t("footer.faq"), to: "/help#faq" },
      { label: t("footer.stores"), to: "/stores" }
    ],
    brand: [
      { label: t("footer.about"), to: "/brand/history" },
      { label: t("footer.history"), to: "/brand/history" },
      { label: t("footer.workshop"), to: "/brand/workshop" },
      { label: t("footer.materials"), to: "/brand/materials" },
      { label: t("footer.journal"), to: "/journal" },
      { label: t("footer.reviews"), to: "/reviews" }
    ],
    business: [
      { label: t("footer.wholesale"), to: "/business#wholesale" },
      { label: t("footer.dealers"), to: "/business#dealers" },
      { label: t("footer.private_label"), to: "/business#private-label" },
      { label: t("footer.partnership"), to: "/business#request" }
    ]
  }))

  return { nav, footer }
}
