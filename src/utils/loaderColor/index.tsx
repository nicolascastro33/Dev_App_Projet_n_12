import { colors } from "../style/colors"

export const loaderColor = (color: string) => {
    switch (color) {
      case 'white':
        return colors.white
  
      case 'black':
        return colors.black
    }
  }