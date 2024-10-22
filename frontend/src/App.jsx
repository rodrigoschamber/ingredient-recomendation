// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
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
  const [responseData, setResponseData] = useState([
    {
      name: "",
      mechanism: "",
      description: "",
      availability: false,
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(formData);
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
        {responseData?.map((item, index) => {
          return (
            <Card key={index} sx={{ mt: 4 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mecanismo de Ação: {item.mechanism}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Descrição: {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Disponivel em estoque: {item.availability ? "Sim" : "Não"}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
