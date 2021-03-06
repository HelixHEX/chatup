import { UsernamePassInput } from "../resolvers/UsernamePassInput";

export const validateRegister = (input: UsernamePassInput) => {
  if (input.username.length <= 2) {
    return [
      {
        field: "username",
        message: "length must be greater than 2",
      },
    ];
  }

  if (input.username.includes("@")) {
    return [
      {
        field: "username",
        message: "cannot include an @",
      },
    ];
  }

  if (input.password.length <= 2) {
    return [
      {
        field: "password",
        message: "length must be greater than 2",
      },
    ];
  }

  return null;
};

export const validateLogin = (input: UsernamePassInput) => {
  if (!input.username) {
    console.log('username empty')
    return [
      {
        field: 'username',
        message: 'field cannot be blank'
      }
    ]
  }

  if (!input.password) {
    return [
      {
        field: 'password',
        message: 'field cannot be blank'
      }
    ]
  }

  return null
}