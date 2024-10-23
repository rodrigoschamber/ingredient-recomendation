// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Typography,
  TextField,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import PropTypes from 'prop-types';

export default function IngredientSearch({ setResponseData }) {
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
    try {
      if (formData.option === "name") {
        const response = await axios.post(
          `${url}/constructByName`,
          { name: formData.search },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setResponseData(response.data);
      }
      if (formData.option === "disease") {
        const response = await axios.post(
          `${url}/constructByDisease`,
          { disease: formData.search },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setResponseData(response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Ingredient Builder
      </Typography>
      <TextField
        label="Pesquisa"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        name="search"
        value={formData.search}
        onChange={handleChange}
      />
      <FormControl component="fieldset" sx={{ mb: 2 }}>
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
      <Button onClick={handleSubmit}>Pesquisar</Button>
    </>
  );
}

IngredientSearch.propTypes = {
  setResponseData: PropTypes.func.isRequired,
};


