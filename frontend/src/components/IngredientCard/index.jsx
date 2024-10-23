// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

export default function IngredientCard({ ingredientList }) {
  return (
    <>
      {ingredientList?.map((item, index) => (
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
      ))}
    </>
  );
}

IngredientCard.propTypes = {
  ingredientList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      mechanism: PropTypes.string,
      description: PropTypes.string,
      availability: PropTypes.bool,
    })
  ),
};
