import { Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Form,Label,Input,Button } from './RegisterForm.module';
// import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Username
        <Input type="text" name="name" />
      </Label>
      <Label >
        Email
        <Input type="email" name="email" />
      </Label>
      <Label >
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit"><Text fontSize='x-large'>Register</Text></Button>
    </Form>
  );
};
