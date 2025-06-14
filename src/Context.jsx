import { createContext, useContext } from "react";

export const MeuContexto = createContext();

export const GetValores = () => useContext(MeuContexto)
