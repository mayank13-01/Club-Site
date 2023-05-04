import React from "react";
import Update from "../../update/Update";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import Rightbar from "../../rightbar/Rightbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <>
        <Navbar />
        <div className="homeContainer">
          <Sidebar />
          <Update />
          <Rightbar />
        </div>
      </>
    </div>
  );
};

export default Home;
