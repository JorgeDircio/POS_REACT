import { AuthLayoutInterface } from "..";


const AuthLayout: React.FC<AuthLayoutInterface> = ({ children }) => {
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
