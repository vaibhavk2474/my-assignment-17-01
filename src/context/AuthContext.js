import React from "react";

export const authContext = React.createContext({
  account: "",
  onChangeAccount: () => {},
});

// export const AuthContext = ({ children }) => {
//   return (
//     <authContext.Provider
//       value={{
//         account: "",
//         onChangeAccount: () => {},
//       }}
//     >
//       {children}
//     </authContext.Provider>
//   );
// };
