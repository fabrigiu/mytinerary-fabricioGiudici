import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

export const user_photo = createAction("user_photo", (obj) => {
  console.log(obj);

  return {
    payload: {
      image: obj.image,
    },
  };
});

export const user_login = createAsyncThunk("user_login", async (obj) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/api/auth/signin",
      obj.data
    );

    localStorage.setItem("token", data.response.token);
    localStorage.setItem("user", JSON.stringify(data.response.user));
    Swal.fire({
      icon: "success",
      title: "Welcome",
      text: data.response.message,
      confirmButtonText: "OK",
    });

    return {
      user: data.response.user,
      token: data.response.token,
    };
  } catch (error) {
    console.log("User actions error", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.response.data.message,
      confirmButtonText: "Try again",
    });
  }
});

export const user_login_google = createAsyncThunk(
  "user_login_google",
  async (obj) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/google",
        obj.data
      );

      localStorage.setItem("token", data.response.token);
      localStorage.setItem("user", JSON.stringify(data.response.user));
      Swal.fire({
        icon: "success",
        title: "Welcome",
        text: data.response.message,
        confirmButtonText: "OK",
      });
      return {
        user: data.response.user,
        token: data.response.token,
      };
    } catch (error) {
      console.log("User actions error", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        confirmButtonText: "Try again",
      });
    }
  }
);

export const user_register = createAsyncThunk("user_register", async (obj) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/api/auth/signup",
      obj.data
    );

    Swal.fire({
      icon: "success",
      title: "Welcome",
      text: data.message,
      confirmButtonText: "OK",
      link: "http://localhost:5137/signin",
    });

    return {
      message: data.message,
    };
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.response.data.message,
      confirmButtonText: "Try again",
    });
    return {
      user: null,
    };
  }
});

export const user_token = createAction("user_token", (user) => {
  return {
    payload: {
      user,
    },
  };
});

export const user_logout = createAction("user_logout", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return {
    payload: {
      user: null,
      token: null,
    },
  };
});

