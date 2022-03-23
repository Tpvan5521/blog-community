interface PageRoute {
  path: string;
  exact: boolean;
  public: boolean;
  component: JSX.Element;
}

export default PageRoute;
