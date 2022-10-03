import React from "react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(1),
//   },
// }));

export const Form = ({ children, ...props }) => {
  return (
    <form {...props} noValidate>
      {children}
    </form>
  );
};
