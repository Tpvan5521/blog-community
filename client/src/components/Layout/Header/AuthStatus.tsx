import React from "react";
import { useNavigate } from "react-router-dom";
import { OutlineDefaultButton } from "components/Button/OutlineButton";
import { DefaultButton } from "components/Button/Button";

const AuthStatus = ({ useAuth }: { useAuth: any }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return (
      <>
        <OutlineDefaultButton content="Log in" customClassName="border-none" />
        &nbsp;
        <OutlineDefaultButton content="Register in" />
      </>
    );
  }

  // if (!auth.user) {
  //   return <p>You are not logged in.</p>;
  // }

  return (
    // <p>
    //   Welcome {auth.user}!{" "}
    //   <button
    //     onClick={() => {
    //       auth.signout(() => navigate("/"));
    //     }}
    //   >
    //     Sign out
    //   </button>
    // </p>
    <OutlineDefaultButton content="Account" />
  );
};

export default AuthStatus;
