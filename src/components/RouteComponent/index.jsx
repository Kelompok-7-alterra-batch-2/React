import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, Patient, Doctor } from "pages";
import { DefaultLayout } from "components";

export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <DefaultLayout>
              <Dashboard />
            </DefaultLayout>
          }
        />

        <Route
          path="patient"
          element={
            <DefaultLayout>
              <Patient />
            </DefaultLayout>
          }
        />

        <Route
          path="doctor"
          element={
            <DefaultLayout>
              <Doctor />
            </DefaultLayout>
          }
        />

        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
