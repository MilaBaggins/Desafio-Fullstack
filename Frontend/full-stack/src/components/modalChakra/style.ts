import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import chakraTheme from "@chakra-ui/theme";
import { extendTheme, Button } from "@chakra-ui/react";

export const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

export const baseStyle = definePartsStyle({
  // define the part you're going to style

  dialog: {
    borderRadius: "none",
    bg: `white`,
  },
  closeButton: {
    borderColor: "transparent",
    boxShadow: "none",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    "no-border": {
      closeButton: {
        borderColor: "transparent",
        boxShadow: "none",
      },
    },
  },
});

export const theme = extendTheme({
  ...chakraTheme,
  components: {
    ...chakraTheme.components,
    Button,
    Modal: modalTheme,
  },
});
