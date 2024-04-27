import React, { useEffect, useState } from "react";

export default function AdminHome() {
  const [admindata, setAdmin] = useState("");
  useEffect(() => {
    const admindata_ = localStorage.getItem("admin");
    if (admindata_) {
      const admin_data = JSON.parse(admindata_);
      setAdmin(admin_data);
    }
  }, []);
  return (
    <div>
      {admindata && (
        <center>
          <h2>Welcome {admindata.email}</h2>
        </center>
      )}
      <center>
        <img src="admin_logo.jpg" />
      </center>
    </div>
  );
}
