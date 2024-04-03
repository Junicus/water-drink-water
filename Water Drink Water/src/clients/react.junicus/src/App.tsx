import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import { useEffect } from "react";
import LoadingScreen from "components/LoadingScreen";

function App() {
  const { authStore, accountStore } = useStore();

  useEffect(() => {
    if (authStore.token) {
      if (accountStore.currentUser) return;
      accountStore.getCurrentUser().finally(() => authStore.setAppLoaded());
    } else {
      authStore.setAppLoaded();
    }
  }, [authStore, accountStore]);

  if (!authStore.appLoaded) return <LoadingScreen />;

  return (
    <>
      <Outlet />
    </>
  );
}

export default observer(App);
