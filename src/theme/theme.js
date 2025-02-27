import { CardBody, extendTheme } from "@chakra-ui/react";
import { BiBorderRadius } from "react-icons/bi";

const theme = extendTheme({
  colors: {
    pink: "#fe91fe",
    orange: "#FE5D3C",
    darkorange: "rgb(206, 53, 23)"
  },
  fonts: {
    heading: "'Inter Tight', sans-serif",
    body: "'Inter Tight', sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          color: "white",
          backgroundColor: "#FE5D3C",
          _hover: {
            color: "white",
            backgroundColor: "#e54c2d",
          },
        },
        outlined: {
          backgroundColor: "none",
          color: "#FE5D3C",
          border: "1px solid #e54c2d",
          _hover: {
            backgroundColor: "none",
            color: "#e54c2d",
            border: "1px solid darkorange",
          },
        },

        navButtons: {
          backgroundColor: "none",
          color: "orange",

          _hover: {
            backgroundColor: "none",
            color: "black",
          },
          _active: {
            color: "black",
          },
        },

        chips: {
          fontSize: "sm",
          color: "black",
          backgroundColor: "none",
          boxShadow: "none",
          borderRadius : "100px",
          border:"none",
          borderColor: "none",
          _hover: {
            borderRadius : "100px",
            border:"none",
            borderColor: "none",
            backgroundColor: "pink",
            boxShadow: "none"
          },
          _active: {
            border:"none",
            borderColor: "none",
            borderRadius : "100px",
            backgroundColor: "#pink",
            boxShadow: "none"
          },

          _focus: {
            borderRadius : "100px",
            border:"none",
            borderColor: "none",
            backgroundColor: "pink",
            boxShadow: "none"
          },

        },
      },
      defaultProps: {
        variant: "solid",
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "regular",
        fontSize: "md",
      },
      variants: {
        description: {
          color: "grey",
        },
        price: {
          color: "black",
        },
      },
      defaultProps: {
        variant: "description",
      },
    },
  },
});

export default theme;
