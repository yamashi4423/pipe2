import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { AppContext } from "../lib/context";
import { useState } from "react";
import UserProps from "../lib/types";

export default function App({ Component, pageProps }: AppProps) {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const states = { users, setUsers, projects, setProjects, tasks, setTasks };

  return (
    <AppContext.Provider value={states}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
