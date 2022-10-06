export const addTable = (amount) => {
     return (dispatch) => {
          dispatch({
               type: "add",
               payload: amount,
          });
     };
};
