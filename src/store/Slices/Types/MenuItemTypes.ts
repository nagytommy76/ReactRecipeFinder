import { CaloricBreakdownType } from './FoodTypes'

export type MenuItemState = {
   menuItems: MenuItemSearchResultType[]
}

export type MenuItemSearchResultType = {
   id: number
   title: string
   restaurantChain: string
   image: string
}

export type MenuItemNutrition = {
   nutrients: {
      name: string
      title?: string
      amount: number
      unit: string
      percentOfDailyNeeds: number
   }[]
   calories: string | number
   fat: string
   carbs: string
   protein?: string
   caloricBreakdown: CaloricBreakdownType
}
