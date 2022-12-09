import { createContext, Dispatch, SetStateAction } from "react";
import UserProps from "./types";

export const AppContext = createContext(
  {} as {
    users: UserProps[];
    setUsers: Dispatch<SetStateAction<UserProps[]>>;
    projects: never[];
    setProjects: Dispatch<SetStateAction<never[]>>;
    tasks: never[];
    setTasks: Dispatch<SetStateAction<never[]>>;
  }
);
