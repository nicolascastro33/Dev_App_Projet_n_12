import { colors } from '../../utils/style/colors'
export const nutrientBackgroundColor = (nutrient: string) => {
  switch (nutrient) {
    case 'Calories':
      return colors.backgroundCalories

    case 'Lipides':
      return colors.backgroundLipides

    case 'Protéines':
      return colors.backgroundProtéines

    case 'Glucides':
      return colors.backgroundGlucides
  }
}
