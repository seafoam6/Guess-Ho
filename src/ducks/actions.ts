export const toggleQueen = (name: string) => {
  return {
    type: "toggle",
    payload: { name }
  };
};

export const reset = () => {
  return {
    type: "reset"
  };
};

export const draw = () => {
  return {
    type: "draw"
  };
};
