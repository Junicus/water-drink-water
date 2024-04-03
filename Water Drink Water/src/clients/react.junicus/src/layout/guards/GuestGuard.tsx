import { ReactNode } from "react";
import { useStore } from "stores/store";
import router from "router";

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard = ({ children }: GuestGuardProps) => {
  const {
    accountStore: { isLoggedIn },
  } = useStore();

  if (isLoggedIn) router.navigate("/wdw");

  return <>{children}</>;
};

export default GuestGuard;
