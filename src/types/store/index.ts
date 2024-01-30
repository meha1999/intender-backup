interface ZustandState {
  count: number;
  user: {
    access_token: string;
  };
  setCount: () => void;
}
