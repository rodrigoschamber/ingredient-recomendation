// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import DescriptionIcon from "@mui/icons-material/Description";
import MedicationIcon from "@mui/icons-material/Medication";

export default function IngredientCard({ ingredientList }) {
  return (
    <>
      {ingredientList.length > 0 ? (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Typography variant="body2" color="text.secondary">
            {`Total de ${ingredientList.length} princípios ativos encontrados.`}
          </Typography>
        </Box>
      ) : null}
      {ingredientList?.map((item, index) => (
        <Card key={index} sx={{ mt: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ScienceIcon color="success" fontSize="medium" />
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
            </Box>
            <Divider orientation="horizontal" flexItem />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <MedicationIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {item.mechanism}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
              <DescriptionIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
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
