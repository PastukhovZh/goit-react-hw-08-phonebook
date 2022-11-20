import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <Box display='flex' justifyContent='space-around' mt='20px'>
      <NavLink to="/register"><Text fontSize='large' border='1px solid black' padding='10px' borderRadius='md' _hover={{
    background: "#add8e640",
  }}>
        Register</Text>
      </NavLink>
      <NavLink to="/login"><Text fontSize='large' border='1px solid black' padding='10px' borderRadius='md' _hover={{
    background: "#add8e640",
  }}>
        Log In</Text>
      </NavLink>
    </Box>
  );
};
