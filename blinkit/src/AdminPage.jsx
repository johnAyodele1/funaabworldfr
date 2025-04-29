import React, { useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router";

const AdminPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user.user.role !== "admin") {
      swal("Error", "You don't have access to the page", "error");
      navigate("/");
    }
  }, []);

  return (
    <div
      style={{
        color: "black",
      }}
    >
      AdminPage
    </div>
  );
};

export default AdminPage;
