import { useContext } from "react";
import { AuthContext } from "../..";

const useUserAuth = () => {
  const user = useContext(AuthContext);
  if (!user) {
    throw new Error('useUserAuth debe ser utilizado dentro de un AuthProvider');
  }
  return user;
};

export default useUserAuth;