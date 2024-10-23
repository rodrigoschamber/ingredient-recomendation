// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Typography,
  TextField,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import axios from "axios";

export default function IngredientSearch({
  progress,
  setProgress,
  setResponseData,
}) {
  const [formData, setFormData] = useState({
    search: "",
    option: "name",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const url =
      import.meta.env.VITE_INGREDIENT_BUILDER_API_URL || `htt://localhost:5002`;
    setProgress(true);

    if (formData.option === "name") {
      await axios
        .post(
          `${url}/constructByName`,
          { name: formData.search },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setResponseData(response.data);
          setProgress(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setProgress(false);
        });
    }
    if (formData.option === "disease") {
      await axios
        .post(
          `${url}/constructByDisease`,
          { disease: formData.search },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setResponseData(response.data);
          setProgress(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setProgress(false);
        });
    }
  };
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Ingredient Builder
      </Typography>
      <TextField
        disabled={progress}
        label="Pesquisa"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        name="search"
        value={formData.search}
        onChange={handleChange}
      />
      <Box sx={{ display: "flex" }}>
        <FormControl component="fieldset" disabled={progress} sx={{ mb: 2 }}>
          <RadioGroup
            row
            name="option"
            value={formData.option}
            onChange={handleChange}
          >
            <FormControlLabel
              value="name"
              control={<Radio />}
              label="Princípio Ativo"
            />
            <FormControlLabel
              value="disease"
              control={<Radio />}
              label="Doença"
            />
          </RadioGroup>
        </FormControl>
        <Box>
          <Button
            disabled={progress}
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Pesquisar
          </Button>
          <Button
            sx={{ ml: 2 }}
            onClick={() => {
              setResponseData([]);
              setFormData({ search: "", option: "name" });
            }}
            variant="outlined"
            color="secondary"
          >
            Limpar
          </Button>
        </Box>
      </Box>
    </>
  );
}

IngredientSearch.propTypes = {
  progress: PropTypes.bool.isRequired,
  setProgress: PropTypes.func.isRequired,
  setResponseData: PropTypes.func.isRequired,
};
