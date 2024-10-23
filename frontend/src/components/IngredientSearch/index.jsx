// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
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
      import.meta.env.VITE_INGREDIENT_BUILDER_API_URL ||
      `http://localhost:5002`;

    setProgress(true);

    const capitalizeFirstLetter = (str) => {
      if (!str) return str;
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    await axios
      .post(
        `${url}/constructBy${capitalizeFirstLetter(formData.option)}`,
        { [formData.option]: formData.search.trim() },
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
  };

  return (
    <>
      <TextField
        disabled={progress}
        label="Pesquisar Princípio Ativo ou Doença"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        name="search"
        value={formData.search}
        onChange={handleChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControl component="fieldset" disabled={progress}>
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
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
