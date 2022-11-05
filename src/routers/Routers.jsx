import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import {
    Checkout,
    FoodDetail,
    Foods,
    HomePage,
    Login,
    Register,
} from "../pages";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/food/:id" element={<FoodDetail />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    );
};
