import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from 'hooks/useAuth';
import { Box, Text } from '@chakra-ui/react';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display='flex' justifyContent='space-around' p={2}>
      <Text fontWeight="bold" p={3}>Welcome, {user.name}</Text>
      <button type="button" onClick={() => dispatch(logOut())}>
        <Box
  as='button'
          p={1}
          outline='2px solid black'
  color='black'
  fontWeight='bold'
          borderRadius='md'
  _hover={{
    bgColor:'#add8e640'
  }}
        >
          Logout
</Box>
        
      </button>
    </Box>
  );
};
