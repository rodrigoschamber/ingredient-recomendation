// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function IngredientCard({ ingredientList }) {
  return (
    <>
      {ingredientList?.map((item, index) => (
        <Card key={index} sx={{ mt: 4 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {item.availability ? (
                <CheckCircleIcon color="success" fontSize="medium" />
              ) : (
                <CancelIcon color="error" fontSize="medium" />
              )}
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Mecanismo de Ação: {item.mechanism}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descrição: {item.description}
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
