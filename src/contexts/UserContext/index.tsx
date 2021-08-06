import { createContext } from "react";
import { UserContextType } from "../../interfaces";

const UserContext = createContext({} as UserContextType);
export default UserContext;