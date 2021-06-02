import setInputField from './setInputField';
import LoginForm from '../selectors/LoginForm';
import { getConfig } from '../../util/configUtils';

/* eslint complexity:[0,8] */
export default async (
  credName: string
) => {
  const config = getConfig();
  let selector = null;
  let value;
  switch (credName) {
    case 'incorrect username': {
      selector = LoginForm.username;
      value = 'Mory';
      break;
    }
    case 'incorrect password': {
      selector = LoginForm.password;
      value = '!wrong!';
      break;
    }
    case 'username':
    case 'correct username': {
      selector = LoginForm.username;
      value = value || config.username;
      break;
    }
    case 'password':
    case 'correct password': {
      selector = LoginForm.password;
      value = value || config.password;
      break;
    }
    default: {
        throw new Error(`Unknown credential "${credName}"`);
    }
  }
  if (!value) {
    throw new Error(`No value set for credential "${credName}"`);
  }
  await setInputField('set', value, selector);
};