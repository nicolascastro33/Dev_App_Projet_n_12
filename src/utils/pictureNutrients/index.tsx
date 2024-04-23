import logoCalories from '../../assets/nutrientsLogos/energy.png'
import logoFat from '../../assets/nutrientsLogos/cheeseburger.png'
import logoProtein from '../../assets/nutrientsLogos/chicken.png'
import logoCarbohydrates from '../../assets/nutrientsLogos/apple.png'


export const nutrientPicture = (nutrient: string) => {
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
