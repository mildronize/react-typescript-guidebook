// Ref: from redux-toolkits starter template
// A mock function to mimic making an async request for data
export interface SignInSlientParams {
  username: string;
  password: string;
}

export function signInSlient({ username, password }: SignInSlientParams) {
  const result = (username === 'demo' && password === 'demo') ? true : false;
  return new Promise<{ data: boolean }>((resolve) =>
    setTimeout(() => resolve({ data: result }), 500)
  );
}
