import ActiveIngredientBuilder from "./builder/ActiveIngredientBuilder.js";
import ActiveIngredientDirector from "./builder/ActiveIngredientDirector.js";
import express from "express";

const builder = new ActiveIngredientBuilder();
const director = new ActiveIngredientDirector(builder);

const app = express();
const port = 3000;

app.use(express.json());

app.post("/constructByDisease", (req, res) => {
  const { disease } = req.body;
  if (!disease) {
    return res.status(400).send("Disease is required");
  }
  const result = director.constructByDisease(disease);
  res.json(result);
});

app.post("/constructByName", (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send("Active Ingredient is required");
    }
    const result = director.constructByName(name);
    res.json(result);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
