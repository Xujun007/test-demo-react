import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { AuthenticatedApp } from "./authenticated-app";
import { useAuth } from "./context/auth-context";
import { UnauthenticatedApp } from "./unauthenticated-app";
// import { ProjectListScreen } from './screens/project-list';
// import { TsReactTest } from './try-use-array';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TsReactTest /> */}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
