import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

interface Iprops {
  needLogin: boolean;
  redirectTo: string;
  children: React.ReactNode;
}

/**
 *
 * @param needLogin: if current routing target page need login, return true, otherwise return false;
 * @param isLogin: if current user state is logged-in, return true, otherwise return false;
 * @param redirectTo: redirect page
 * @param children: children jsx component wrapped by <RequireAuth/>
 * @returns
 */
function RequireAuth({ needLogin, redirectTo, children }: Iprops) {
  const { token } = useSelector((state: any) => state.authSlice);
  const navigate = useNavigate();
  const isLogin = token ? true : false;

  useEffect(() => {
    if (needLogin !== isLogin) {
      navigate(redirectTo);
    }
  }, [needLogin, isLogin, redirectTo]);

  return needLogin === isLogin ? <>{children}</> : <></>;
}

export default RequireAuth;
