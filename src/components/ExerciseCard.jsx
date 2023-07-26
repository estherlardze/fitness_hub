import React from 'react';
import {Button, Stack, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const ExerciseCard = ({exercise}) => {
  return (
      <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
        <img src={exercise.gifUrl} alt="gif" loading="lazy" height="350px"/>
        <Stack direction="row" justifyContent="space-around" color="#fff" mt="10px">
          <Button 
            sx={{backgroundColor:"#e8b533",
             borderRadius:"20px",
             color:"#fff",
             padding:"5px 10px",
             textTransform:"capitalize" }}
          >
             {exercise.bodyPart}
          </Button>
          <Button 
            sx={{backgroundColor:"#54504d",
             borderRadius:"20px",
             color:"#fff",
             padding:"5px 10px",
             textTransform:"capitalize" }}
          >
             {exercise.target}
          </Button>
        </Stack>
        <Typography 
          sx={{color:"#000",
          textTransform:"capitalize",
          textAlign:"center",
          fontSize:"16px",
          fontWeight:700,
          margin:"20px"}}>

          {exercise.name.slice(0,30)}
          </Typography>
      </Link>
  )
}

export default ExerciseCard
