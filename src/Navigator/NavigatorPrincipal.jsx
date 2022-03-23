import React from "react";

import { Routes, Route } from "react-router-dom";

import {
    ChooseUserNamePage,
    DashboardPage,
    EditProfilePage,
    HomePage,
    LoginPage,
    PublicProfilePage,
    SignoutPage,
} from "../pages";

export const NavigatorPrincipal = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/profile" element={<EditProfilePage />} />
            <Route path="/signout" element={<SignoutPage />} />
            <Route path="/user/:username" element={<PublicProfilePage />} />
            <Route path="/choose-username" element={<ChooseUserNamePage />} />
        </Routes>
    );
};
