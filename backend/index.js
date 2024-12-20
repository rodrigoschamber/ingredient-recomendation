import express from "express";
import cors from "cors";
import ActiveIngredientBuilder from "./builder/ActiveIngredientBuilder.js";
import ActiveIngredientDirector from "./builder/ActiveIngredientDirector.js";
import "dotenv/config";

const builder = new ActiveIngredientBuilder();
const director = new ActiveIngredientDirector(builder);

const app = express();
app.use(cors());
const port = process.env.PORT || 5002;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ingredient Builder API is running");
});

app.post("/constructByDisease", async (req, res) => {
  const { disease } = req.body;
  if (!disease) {
    return res.status(400).send("Disease is required");
  }
  director
    .constructByDisease(disease)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/constructByName", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Active Ingredient is required");
  }
  director
    .constructByName(name)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
