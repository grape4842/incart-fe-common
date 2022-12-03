import { createStitches } from "@stitches/react"
import colors from "./colors"

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors,
        shadows: colors,
    },
    utils: {
        elevated: () => ({
            boxShadow: "0px 1rem 2rem rgba(0, 0, 0, 0.1)",
        }),
        lightBorder: (withShadow: boolean) =>
            withShadow
                ? {
                      boxShadow:
                          "0px 1rem 2rem rgba(0, 0, 0, 0.1), inset 0rem 0rem 0rem 0.5rem $purpleLight",
                  }
                : {
                      boxShadow: "inset 0rem 0rem 0rem 0.5rem $purpleLight  ",
                  },
        animated: () => ({
            transition: "300ms cubic-bezier(0,.67,0,.99)",
        }),
    },
})
