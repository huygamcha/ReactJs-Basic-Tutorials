// import {useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import NoPage from "./pages/NoPage";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./components/layouts/Layout";
import ProductDetail from "./pages/ProductDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import GetProfile from "./components/GetProfile";

// Create a client
// const queryClient = new QueryClient();

function App() {
  console.log("App Render");

  return (
    <>
      <GetProfile />
    </>
  );
}

export default App;
