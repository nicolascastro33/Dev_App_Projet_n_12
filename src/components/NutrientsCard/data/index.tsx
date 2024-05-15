import { colors } from "../../../utils/style/colors"
import logoCalories from '../../../assets/nutrientsLogos/energy.png'
import logoFat from '../../../assets/nutrientsLogos/cheeseburger.png'
import logoProtein from '../../../assets/nutrientsLogos/chicken.png'
import logoCarbohydrates from '../../../assets/nutrientsLogos/apple.png'


const nutrientPicture = (nutrient: string) => {
  switch (nutrient) {
    case 'Calories':
      return logoCalories

    case 'Lipides':
      return logoFat

    case 'Protéines':
      return logoProtein

    case 'Glucides':
      return logoCarbohydrates
  }
}

const nutrientBackgroundColor = (nutrient: string) => {
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


export const NutrientsCardData = (nutrient: string, amount: number) => {
    const unit = nutrient === 'Calories' ? 'kCal' : 'g'
    const logo = nutrientPicture(nutrient)
    const backgroundColor = nutrientBackgroundColor(nutrient)
    return { unit, nutrient, logo, backgroundColor, amount }
  }