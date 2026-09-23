import type { GlobalThemeOverrides } from "naive-ui"

/**
 * NaiveUI global tema — faol palitradan hisoblanadi (tokens.json).
 * Tugma/input balandligi 44–56px, radius palitraga qarab 2–4px yoki 10px, fokus halqasi ko'rinadigan.
 */
export const useNaiveTheme = () => {
  const { colors, isSage } = usePalette()

  const overrides = computed<GlobalThemeOverrides>(() => {
    const c = colors.value
    const brand = c.brand
    const brandHover = c["brand-hover"]
    const text = c.text
    const muted = c.muted
    const line = c.line
    const card = c.card
    const bg = c.bg
    const onDark = c["on-dark"]
    const radius = isSage.value ? "10px" : "2px"
    const radiusBtn = isSage.value ? "10px" : "4px"
    const fontUi = "Manrope, 'Segoe UI', system-ui, sans-serif"

    return {
      common: {
        fontFamily: fontUi,
        fontSize: "15px",
        fontSizeMedium: "15px",
        fontSizeLarge: "15px",
        fontWeightStrong: "600",
        primaryColor: brand,
        primaryColorHover: brandHover,
        primaryColorPressed: brandHover,
        primaryColorSuppl: brand,
        successColor: c.success,
        errorColor: c.sale,
        errorColorHover: c.sale,
        errorColorPressed: c.sale,
        warningColor: c.sale,
        textColorBase: text,
        textColor1: text,
        textColor2: text,
        textColor3: muted,
        placeholderColor: muted,
        borderColor: line,
        dividerColor: line,
        cardColor: card,
        modalColor: bg,
        popoverColor: card,
        bodyColor: bg,
        baseColor: card,
        hoverColor: c["photo-bg"],
        borderRadius: radius,
        borderRadiusSmall: radius,
        heightMedium: "52px",
        heightLarge: "56px",
        heightSmall: "44px",
        heightTiny: "36px",
        boxShadow2: "0 8px 24px rgba(20,40,30,.18)",
        boxShadow3: "0 8px 24px rgba(20,40,30,.25)"
      },
      Button: {
        borderRadiusMedium: radiusBtn,
        borderRadiusLarge: radiusBtn,
        borderRadiusSmall: radiusBtn,
        borderRadiusTiny: radiusBtn,
        heightTiny: "36px",
        heightSmall: "44px",
        heightMedium: "52px",
        heightLarge: "56px",
        fontSizeTiny: "12px",
        fontSizeSmall: "14px",
        fontSizeMedium: "15px",
        fontSizeLarge: "15px",
        fontWeight: "600",
        fontWeightStrong: "600",
        paddingTiny: "0 12px",
        paddingSmall: "0 18px",
        paddingMedium: "0 28px",
        paddingLarge: "0 28px",
        textColorPrimary: onDark,
        textColorHoverPrimary: onDark,
        textColorPressedPrimary: onDark,
        textColorFocusPrimary: onDark,
        colorPrimary: brand,
        colorHoverPrimary: brandHover,
        colorPressedPrimary: brandHover,
        colorFocusPrimary: brand,
        borderPrimary: `1px solid ${brand}`,
        borderHoverPrimary: `1px solid ${brandHover}`,
        borderPressedPrimary: `1px solid ${brandHover}`,
        borderFocusPrimary: `1px solid ${brand}`,
        // ghost (btn-line)
        textColorGhostPrimary: brand,
        textColorGhostHoverPrimary: onDark,
        textColorGhostPressedPrimary: onDark,
        textColorGhostFocusPrimary: brand,
        colorGhostHoverPrimary: brand,
        colorGhostPressedPrimary: brandHover,
        borderGhostPrimary: `1px solid ${brand}`,
        borderGhostHoverPrimary: `1px solid ${brand}`,
        rippleColorPrimary: "transparent",
        opacityDisabled: "0.45",
        waveOpacity: "0"
      },
      Input: {
        heightMedium: "52px",
        heightLarge: "56px",
        heightSmall: "44px",
        heightTiny: "40px",
        fontSizeMedium: "15px",
        fontSizeLarge: "16px",
        fontSizeSmall: "14px",
        fontSizeTiny: "13px",
        paddingMedium: "0 16px",
        paddingLarge: "0 16px",
        paddingSmall: "0 14px",
        paddingTiny: "0 12px",
        borderRadius: radiusBtn,
        color: card,
        colorFocus: card,
        border: `1px solid ${line}`,
        borderHover: `1px solid ${text}`,
        borderFocus: `1px solid ${text}`,
        boxShadowFocus: `0 0 0 2px ${brand}33`,
        textColor: text,
        placeholderColor: muted,
        caretColor: brand,
        borderError: `1px solid ${c.sale}`,
        borderHoverError: `1px solid ${c.sale}`,
        borderFocusError: `1px solid ${c.sale}`,
        boxShadowFocusError: `0 0 0 2px ${c.sale}33`
      },
      Select: {
        peers: {
          InternalSelection: {
            heightMedium: "44px",
            heightLarge: "52px",
            fontSizeMedium: "14px",
            borderRadius: radiusBtn,
            color: card,
            colorActive: card,
            border: `1px solid ${text}`,
            borderHover: `1px solid ${text}`,
            borderActive: `1px solid ${text}`,
            borderFocus: `1px solid ${text}`,
            boxShadowActive: `0 0 0 2px ${brand}33`,
            boxShadowFocus: `0 0 0 2px ${brand}33`,
            boxShadowHover: "none",
            textColor: text,
            paddingSingle: "0 40px 0 14px"
          },
          InternalSelectMenu: {
            borderRadius: radius,
            color: card,
            optionTextColor: text,
            optionTextColorActive: brand,
            optionColorPending: c["photo-bg"],
            optionColorActive: c["photo-bg"],
            optionColorActivePending: c["photo-bg"],
            optionCheckColor: brand,
            optionFontSizeMedium: "14px",
            optionHeightMedium: "40px"
          }
        }
      },
      Checkbox: {
        sizeMedium: "16px",
        sizeLarge: "18px",
        borderRadius: "2px",
        color: card,
        colorChecked: text,
        border: `1px solid ${muted}`,
        borderChecked: `1px solid ${text}`,
        borderFocus: `1px solid ${text}`,
        boxShadowFocus: `0 0 0 2px ${brand}33`,
        checkMarkColor: onDark,
        textColor: text,
        fontSizeMedium: "14px",
        fontSizeLarge: "15px",
        labelPadding: "0 0 0 10px"
      },
      Radio: {
        radioSizeMedium: "16px",
        radioSizeLarge: "18px",
        color: card,
        colorActive: brand,
        dotColorActive: onDark,
        boxShadow: `inset 0 0 0 1px ${muted}`,
        boxShadowActive: `inset 0 0 0 1px ${brand}`,
        boxShadowHover: `inset 0 0 0 1px ${brand}`,
        boxShadowFocus: `inset 0 0 0 1px ${brand}, 0 0 0 2px ${brand}33`,
        textColor: text,
        fontSizeMedium: "14px",
        labelPadding: "0 0 0 10px"
      },
      Drawer: {
        color: bg,
        textColor: text,
        headerPadding: "0",
        bodyPadding: "0",
        footerPadding: "0",
        borderRadius: "0",
        boxShadow: "-8px 0 24px rgba(20,40,30,.2)"
      },
      Modal: {
        color: bg,
        textColor: text,
        boxShadow: "0 8px 24px rgba(20,40,30,.25)",
        peers: { Card: { borderRadius: radius, color: bg } }
      },
      Collapse: {
        titleTextColor: text,
        titleFontWeight: "600",
        titleFontSize: "15px",
        textColor: text,
        arrowColor: text,
        dividerColor: line,
        itemMargin: "0",
        titlePadding: "0"
      },
      Pagination: {
        itemSizeMedium: "40px",
        itemFontSizeMedium: "14px",
        itemBorderRadius: radius,
        itemColor: "transparent",
        itemColorHover: c["photo-bg"],
        itemColorActive: text,
        itemColorActiveHover: text,
        itemTextColor: text,
        itemTextColorHover: text,
        itemTextColorActive: onDark,
        itemBorder: `1px solid ${line}`,
        itemBorderActive: `1px solid ${text}`,
        itemBorderHover: `1px solid ${text}`,
        buttonBorder: `1px solid ${line}`,
        buttonBorderHover: `1px solid ${text}`,
        buttonColor: "transparent",
        buttonColorHover: "transparent",
        buttonIconColor: text,
        buttonIconColorHover: text
      },
      Message: {
        colorInfo: brand,
        colorSuccess: brand,
        colorError: c.sale,
        textColorInfo: onDark,
        textColorSuccess: onDark,
        textColorError: onDark,
        iconColorInfo: c.gold || c.pastel,
        iconColorSuccess: c.gold || c.pastel,
        iconColorError: onDark,
        closeIconColorInfo: onDark,
        closeIconColorSuccess: onDark,
        closeIconColorError: onDark,
        borderRadius: radiusBtn,
        padding: "14px 16px",
        fontSize: "14px",
        boxShadow: "0 8px 24px rgba(20,40,30,.18)"
      },
      Badge: {
        color: c.lime || c.pastel,
        fontSize: "10px"
      },
      Tabs: {
        tabTextColorLine: muted,
        tabTextColorActiveLine: text,
        tabTextColorHoverLine: text,
        barColor: text,
        tabFontWeightActive: "600",
        tabFontSizeMedium: "14px"
      },
      Skeleton: {
        color: c["photo-bg"],
        colorEnd: card
      }
    }
  })

  return { overrides }
}
