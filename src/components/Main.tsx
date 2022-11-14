import "../assets/styles/Main.scss";
import { ChilrenProps } from "../types/generalTypes";

const Main = ({ children }: ChilrenProps) => {
  return (
    <main className="main_dashboard">
      <div className="main_dashboard_wrapper">{children}</div>
    </main>
  );
};

export default Main;
