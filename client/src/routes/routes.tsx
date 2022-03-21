import React, { Suspense } from "react";
import { Routes, Route, useLocation, Navigate, BrowserRouter } from "react-router-dom";
import { AuthProvider, AuthContext } from "context/auth/AuthContext";

import PageLayout from "components/Layout";
import PageLoader from "components/Loader/PageLoader";
const HomePage = React.lazy(() => import("pages/Home"));
<<<<<<< HEAD
const PostPage = React.lazy(() => import("pages/Post"));
const ProfilePage = React.lazy(() => import("pages/Profile"));
const LoginPage = React.lazy(() => import("pages/Login"));
=======
const PostPage = React.lazy(() => import("pages/Post/WritePost"));
const ProfilePage = React.lazy(() => import("pages/Profile"));
const LoginPage = React.lazy(() => import("pages/Auth/LogIn"));
>>>>>>> 901428e (update homepage & config)

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <AuthProvider>
          <Routes>
            <Route element={<PageLayout useAuth={useAuth} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage useAuth={useAuth} />} />
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <ProfilePage />
                  </RequireAuth>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export function useAuth(): any {
  return React.useContext(AuthContext);
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
