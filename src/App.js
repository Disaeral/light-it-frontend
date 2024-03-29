import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { useContext, useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then(() => {
        user.setUser(user);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </>
  );
});

export default App;
