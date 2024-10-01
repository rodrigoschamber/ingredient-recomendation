import ActiveIngredientBuilder from './builder/ActiveIngredientBuilder.js';
import ActiveIngredientDirector from './builder/ActiveIngredientDirector.js';

const builder = new ActiveIngredientBuilder();
const director = new ActiveIngredientDirector(builder);

const aspirin = director.constructByDisease();
console.log(aspirin);

const ibuprofen = director.constructByName();
console.log(ibuprofen);