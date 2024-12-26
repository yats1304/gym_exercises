import React, { useState } from 'react';
import { Box } from '@mui/material';
import Herobanner from '../components/Herobanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <Box>
      <Herobanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />
      <Exercises 
        exercises={exercises}
        bodyPart={bodyPart} 
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
