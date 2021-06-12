// FoodSlice's initial state
export type FoodState = {
   foods: FoodArray[]
   selectedFoodId: number
}
// Food's extendedIngredients
export type IngredientTypes = {
   id: number
   name: string
   image: string
   measures: { metric: { unitLong: string; amount: string } }
}
// foods
export type FoodArray = {
   id: number
   title: string
   extendedIngredients: IngredientTypes[]
   image: string
   summary: string
   analyzedInstructions: StepsType[]
   nutrition: NutritionTypes
}
// Nutrition
export type NutritionTypes = {
   caloricBreakdown: CaloricBreakdownType
   nutrients: NutriensType[]
}

// Caloric breakdown
export type CaloricBreakdownType = {
   percentCarbs: number
   percentFat: number
   percentProtein: number
}

export type NutriensType = {
   amount: number
   name: string
   percentOfDailyNeeds: number
   unit: string
}

// Instruction's steps
export type StepsType = {
   steps: {
      equipment: IngredientsAndEquipmentTypes[]
      ingredients: IngredientsAndEquipmentTypes[]
      number: number
      step: string
   }[]
}

export type IngredientsAndEquipmentTypes = {
   id: number
   image: string
   name: string
   temperature?: { number: number; unit: string }
}
