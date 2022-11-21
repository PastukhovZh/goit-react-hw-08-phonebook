import { Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Form, Label, Input, Button } from './RegisterForm.module';

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
        <Input type="text" name="name" required />
      </Label>
      <Label >
        Email
        <Input
          type="email"
          name="email"
          pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'
          title='For exapmple: «zhenya@mail.com»'
          required/>
      </Label>
      <Label >
        Password
        <Input type="password" name="password"
          pattern='[0-9a-zA-Z!@#$%^&*]{7,}'
          title="Need min 7 symbols."
          required />
      </Label>
      <Button type="submit"><Text fontSize='x-large'>Register</Text></Button>
    </Form>
  );
};
