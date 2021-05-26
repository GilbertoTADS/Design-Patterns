import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beverage, Dessert, Rice } from "./rice";

export class MainDishBuilder implements MealBuilderProtocol{
    private meal: MealBox = new MealBox()
    
    reset():this{
        this.meal = new MealBox()
        return this
    }
    makeMeal():this{
        const rice = new Rice('Arroz',5)
        const beans = new Rice('Feijão',10)
        const meat = new Rice('Carne',20)

        this.meal.add(rice,beans,meat)
        return this
    }
    makeBeverage():this{
        const beverage = new Beverage('Bebida',7)
        this.meal.add(beverage)
        return this
    }
    makeDesert():this{
        const dessert = new Dessert('Sobremesa',5)
        this.meal.add(dessert)
        return this
    }
    getMeal():MealBox{
        return this.meal
    }
}