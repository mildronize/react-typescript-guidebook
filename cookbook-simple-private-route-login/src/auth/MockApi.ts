// Ref: from redux-toolkits starter template
// A mock function to mimic making an async request for data
export function signInSlient() {
  return new Promise<{ data: boolean }>((resolve) =>
    setTimeout(() => resolve({ data: true }), 500)
  );
}
