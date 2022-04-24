import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import hustleBeeApi from "../../api/hustleBeeApi";
import { AuthContext } from "../AuthContext";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const { token, authSignOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const [jobs, setJobs] = useState(null);
  const [myPostedJobs, setMyPostedJobs] = useState(null);

  const getUser = () => {
    hustleBeeApi
      .get("/user", { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "user found" && res.data.user) {
          setUser(res.data.user);
        }
      })
      .catch((err) => console.log(err));
  };

  const getProfile = () => {
    hustleBeeApi
      .get("/profile", { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "profile found" && res.data.profile) {
          setProfile(res.data.profile);
        }
      })
      .catch((err) => console.log(err));
  };

  const createProfile = (role, location, position) => {
    hustleBeeApi
      .post(
        "/create-profile",
        { role: role, location: location, position: position },
        { headers: { token: token } }
      )
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "Profile created sucessfully") {
          getProfile();
        }
      })
      .catch((err) => console.log(err));
  };

  const getJobs = () => {
    hustleBeeApi
      .get("/jobs", { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "jobs" && res.data.jobs) {
          setJobs(res.data.jobs);
        }
      })
      .catch((err) => console.log(err));
  };

  const getMyPostedJobs = () => {
    hustleBeeApi
      .get("/my-posted-jobs", { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "my posted jobs" && res.data.my_posted_jobs) {
          setMyPostedJobs(res.data.my_posted_jobs);
        }
      })
      .catch((err) => console.log(err));
  };

  const postJob = (data) => {
    hustleBeeApi
      .post("/create-job", { ...data }, { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "job created successfully") {
          getJobs();
          getMyPostedJobs();
          navigate("/jobs");
        }
      })
      .catch((err) => console.log(err));
  };

  const publishJob = (id) => {
    hustleBeeApi
      .get("/publish-job", {
        headers: { token: token, jobid: id },
      })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "job published") {
          getJobs();
          getMyPostedJobs();
        }
      })
      .catch((err) => console.log(err));
  };

  const unPublishJob = (id) => {
    hustleBeeApi
      .get("/unpublish-job", { headers: { token: token, jobid: id } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "job unpublished") {
          getJobs();
          getMyPostedJobs();
        }
      })
      .catch((err) => console.log(err));
  };

  const applyForJob = (id) => {
    hustleBeeApi
      .post("/apply", { jobid: id }, { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          // authSignOut();
        }
        if (res.data.msg === "applied to the job") {
          getJobs();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfile();
    getUser();
    getJobs();
    getMyPostedJobs();
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        user,
        profile,
        jobs,
        myPostedJobs,
        createProfile,
        postJob,
        publishJob,
        unPublishJob,
        applyForJob,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContextProvider, DataContext };
