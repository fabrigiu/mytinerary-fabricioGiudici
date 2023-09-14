import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { user_token } from "./store/actions/userActions";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    let url = `http://localhost:8000/api/auth/token`;
    let token = localStorage.getItem("token");

    if (token) {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .post(url, null, config)
        .then((response) => dispatch(user_token(response.data.user)))

        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
