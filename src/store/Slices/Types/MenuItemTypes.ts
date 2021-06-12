import { CaloricBreakdownType } from './FoodTypes'

export type MenuItemState = {
   menuItems: MenuItemType[]
}
export type MenuItemType = {
   id: number
   title: string
   restaurantChain: string
   image: string
}

export type MenuItemNutrition = {
   nutrients: {
      name: string
      amount: number
      unit: string
      percentOfDailyNeeds: number
   }[]
   caloricBreakdown: CaloricBreakdownType
}
