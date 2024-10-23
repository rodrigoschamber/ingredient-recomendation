// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import IngredientCard from "./components/IngredientCard";
import IngredientProgress from "./components/IngredientProgress";
import IngredientSearch from "./components/IngredientSearch";
import { Box, Container } from "@mui/material";
import logo from "./assets/logo.png";

export default function App() {
  const [progress, setProgress] = useState(false);
  const [responseData, setResponseData] = useState([]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Recomendação de Princípios Ativos"
          style={{ width: "150px", borderRadius: "75px" }}
        />
        <Box sx={{ mt: 2 }}>
          <IngredientSearch
            progress={progress}
            setProgress={setProgress}
            setResponseData={setResponseData}
          />
          {progress ? (
            <IngredientProgress />
          ) : (
            <IngredientCard ingredientList={responseData} />
          )}
        </Box>
      </Box>
    </Container>
  );
}
