import React, { Suspense, lazy, useContext } from "react";
import { Routes, Route, useLocation, Navigate, BrowserRouter } from "react-router-dom";
import { AuthProvider, AuthContext } from "context/auth/AuthContext";
import PageRoute from "constants/interfaces/route.interface";

import PageLayout from "components/Layout/PageLayout";
import PageLoader from "components/Loader/PageLoader";
const PageNotFound = lazy(() => import("pages/404"));
const LoginPage = lazy(() => import("pages/Auth/LogIn"));
const RegisterPage = lazy(() => import("pages/Auth/RegisterIn"));
const AuthorPage = lazy(() => import("pages/Author"));
const FAQsDetailsPage = lazy(() => import("pages/FAQs/FAQsDetails"));
const FAQsPage = lazy(() => import("pages/FAQs"));
const HomePage = lazy(() => import("pages/Home"));
const EditPostPage = lazy(() => import("pages/Post/EditPost"));
const PostDetailsPage = lazy(() => import("pages/Post/PostDetails"));
const WritePostPage = lazy(() => import("pages/Post/WritePost"));
const DashboardPage = lazy(() => import("pages/Profile/Dashboard"));
const ProfilePage = lazy(() => import("pages/Profile"));
const SearchResultsPage = lazy(() => import("pages/SearchResults"));
const TagPage = lazy(() => import("pages/Tag"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <AuthProvider>
          <Routes>
            <Route element={<PageLayout useAuth={useAuth} />}>
              {pageRoutes.map((pageRoute: PageRoute, key: number) =>
                pageRoute.public ? (
                  <Route path={pageRoute.path} element={pageRoute.component} key={key} />
                ) : (
                  <Route path={pageRoute.path} element={<RequireAuth>{pageRoute.component}</RequireAuth>} key={key} />
                ),
              )}
            </Route>
          </Routes>
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
}

const pageRoutes: PageRoute[] = [
  {
    path: "/auth/login",
    exact: true,
    public: true,
    component: <LoginPage useAuth={useAuth} />,
  },
  {
    path: "/auth/register",
    exact: true,
    public: true,
    component: <RegisterPage />,
  },
  {
    path: "/authors/:authorSlug",
    exact: true,
    public: true,
    component: <AuthorPage />,
  },
  {
    path: "/faqs",
    exact: true,
    public: true,
    component: <FAQsPage />,
  },
  {
    path: "/faqs/:faqSlug",
    exact: true,
    public: true,
    component: <FAQsDetailsPage />,
  },
  {
    path: "/",
    exact: true,
    public: true,
    component: <HomePage />,
  },
  {
    path: "/posts/edit/:postSlug",
    exact: true,
    public: false,
    component: <EditPostPage />,
  },
  {
    path: "/posts/read/",
    exact: true,
    public: true,
    component: <PostDetailsPage />,
  },
  {
    path: "/posts/new/:postSlug",
    exact: true,
    public: false,
    component: <WritePostPage />,
  },
  {
    path: "/profile/:profileSlug",
    exact: true,
    public: false,
    component: <ProfilePage />,
  },
  {
    path: "/profile/:profileSlug/dashboard",
    exact: true,
    public: false,
    component: <DashboardPage />,
  },
  {
    path: "/search/:searchSlug",
    exact: true,
    public: true,
    component: <SearchResultsPage />,
  },
  {
    path: "/tags",
    exact: true,
    public: true,
    component: <TagPage />,
  },
  {
    path: "*",
    exact: true,
    public: true,
    component: <PageNotFound />,
  },
];

export function useAuth(): any {
  return useContext(AuthContext);
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
