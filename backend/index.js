import express from "express";
import ActiveIngredientBuilder from "./builder/ActiveIngredientBuilder.js";
import ActiveIngredientDirector from "./builder/ActiveIngredientDirector.js";

const builder = new ActiveIngredientBuilder();
const director = new ActiveIngredientDirector(builder);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/constructByDisease", async (req, res) => {
  const { disease } = req.body;
  if (!disease) {
    return res.status(400).send("Disease is required");
  }
  director.constructByDisease(disease).then((result) => {
    res.json(result);
  });
});

app.post("/constructByName", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Active Ingredient is required");
  }
  director.constructByName(name).then((result) => {
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
