export interface Dessert {
    dessert: string,
    nutritionInfo: NutritionInfo
}

export interface NutritionInfo{
    calories: number,
    fat: number,
    carb: number,
    protein: number
}

// dessert: "Oreo",nutritionInfo: {calories: 437,fat: 18, carb: 63,   protein: 4, }