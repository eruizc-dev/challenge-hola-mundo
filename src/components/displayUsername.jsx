import useAuth from '../redux/auth/useAuth';
import { Typography, } from '@material-ui/core';

export default function DisplayUsername() {
  const { isLoggedIn, username } = useAuth();
  return isLoggedIn
    ? <Typography variant="h4">{`¡Hola ${username}!`}</Typography>
    : null;
}

