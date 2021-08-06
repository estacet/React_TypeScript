import { createContext } from "react";
import {PaginationContextType} from "../../interfaces";

const PaginationContext = createContext({} as PaginationContextType);
export default PaginationContext;
