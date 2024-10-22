// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";

export default function App() {
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
    console.log(formData);
    const url = 'http://localhost:5002';
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
        console.log("Response:", response.data);
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
        console.log("Response:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
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
      </Box>
    </Container>
  );
}
