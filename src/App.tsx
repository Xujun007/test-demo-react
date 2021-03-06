import React from "react";
import "./App.css";
import { AuthenticatedApp } from "./authenticated-app";
import { ErrorBoundary } from "./components/error-boundary";
import { FullPageErrorFallback } from "./components/lib";
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
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
