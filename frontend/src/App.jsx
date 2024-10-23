// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import IngredientCard from "./components/IngredientCard";
import IngredientProgress from "./components/IngredientProgress";
import IngredientSearch from "./components/IngredientSearch";
import { Box, Container } from "@mui/material";

export default function App() {
  const [progress, setProgress] = useState(false);
  const [responseData, setResponseData] = useState([]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <IngredientSearch
          setProgress={setProgress}
          setResponseData={setResponseData}
        />
        {progress ? (
          <IngredientProgress />
        ) : (
          <IngredientCard ingredientList={responseData} />
        )}
      </Box>
    </Container>
  );
}
