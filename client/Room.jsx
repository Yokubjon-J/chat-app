import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const card = (
    <Box>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          <Link to="rooms/one">Universal</Link>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Room activity
        </Typography>
        <Typography variant="body2">
          Statstics
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Box>
  );
  
export default function OutlinedCard() {
    return (
        <Box sx={{ width: 275, cursor:'pointer' }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}