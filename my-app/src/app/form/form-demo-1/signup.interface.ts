// signup.interface.ts
export interface User {
  name: string;
  emailGroup: {
    email: string;
    confirm: string;
  };
}
