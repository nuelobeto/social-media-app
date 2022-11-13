import "../assets/styles/Main.scss";
import { ChilrenProps } from "../types/generalTypes";

const Main = ({ children }: ChilrenProps) => {
  return <main>{children}</main>;
};

export default Main;
