import { Routes, Route } from "react-router-dom";
import { Users } from "../pages/users";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
    </Routes>
  );
}

export { PrivateRoutes };
