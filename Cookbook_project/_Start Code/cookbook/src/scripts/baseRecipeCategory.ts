//TODO (INTERFACES EXERCISE)
//1. Implement the IBaseRecipeCategory interface
class BaseRecipeCategory implements IBaseRecipeCategory{

    
    /*
      TODO (CONSTRUCTORS EXERCISE) Perform the following steps:
      1. Delete the existing variables/fields and property get/set blocks currently in the class.
         You'll be replacing these properties with a simpler syntax and using a constructor to assign values to them.
         Note that you can remove the TODO (Properties Exercise) comments associated with the code if you'd like.
      2. Add the following properties following the "propertyName: type;" coding style. 
         You DO NOT need to use get/set blocks for these properties:
         a. Add a "name" property that is a string type
         b. Add a "foodGroups" property that is of type FoodGroup[] and assign it a value of [].
      3. Create a new constructor that accepts "name" and "foodGroups" as parameters.
      4. Within the constructor, assign the parameter values to the "name" and "foodGroups" properties respectively.
    */
    name: string;
    foodGroups: FoodGroup[]=[];
    
    constructor(name: string, foodGroups: FoodGroup[]){
      this.name = name;
      this.foodGroups = foodGroups;
    }
    
    
} 