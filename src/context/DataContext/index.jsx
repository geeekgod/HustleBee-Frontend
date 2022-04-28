import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import hustleBeeApi from "../../api/hustleBeeApi";
import { AuthContext } from "../AuthContext";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [profileExist, setProfileExist] = useState(false);
  const { token, auth, authSignOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const [jobs, setJobs] = useState(null);
  const [myPostedJobs, setMyPostedJobs] = useState(null);
  const [myAppliedJobs, setMyAppliedJobs] = useState(null);

  const getUser = useCallback(() => {
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
  }, [token, authSignOut]);

  const getProfile = useCallback(() => {
    hustleBeeApi
      .get("/profile", { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "profile found" && res.data.profile) {
          setProfile(res.data.profile);
          setProfileExist(true);
        }
        if (res.data.msg === "Profile not created!") {
          setProfileExist(false);
        }
      })
      .catch((err) => console.log(err));
  }, [token, authSignOut]);

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

  const getJobs = useCallback(() => {
    hustleBeeApi
      .get("/jobs", { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "jobs" && res.data.jobs) {
          let t_jobs = res.data.jobs.reverse();
          setJobs(t_jobs);
        }
        if (res.data.msg === "no jobs") {
          setJobs([]);
        }
      })
      .catch((err) => console.log(err));
  }, [token, authSignOut]);

  const getMyPostedJobs = useCallback(() => {
    hustleBeeApi
      .get("/my-posted-jobs", { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "my posted jobs" && res.data.my_posted_jobs) {
          let posted_jobs = res.data.my_posted_jobs.reverse();
          setMyPostedJobs(posted_jobs);
        }
        if (res.data.msg === "you have no jobs posted") {
          setMyPostedJobs([]);
        }
      })
      .catch((err) => console.log(err));
  }, [token, authSignOut]);

  const getMyAppliedJobs = useCallback(() => {
    hustleBeeApi
      .get("/my-applied", { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "applied jobs" && res.data.jobs) {
          let applied_jobs = res.data.jobs.reverse();
          setMyAppliedJobs(applied_jobs);
        }
        if (res.data.msg === "no applied jobs") {
          setMyAppliedJobs([]);
        }
      })
      .catch((err) => console.log(err));
  }, [token, authSignOut]);

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
          authSignOut();
        }
        if (res.data.msg === "applied to the job") {
          getJobs();
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteJob = (id) => {
    hustleBeeApi
      .get(`/job/delete/${id}`, { headers: { token: token } })
      .then((res) => {
        if (res.data.msg === "not authorized") {
          authSignOut();
        }
        if (res.data.msg === "job deleted successfully") {
          getMyPostedJobs();
          navigate("/jobs/posted");
          getJobs();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (auth) {
      getProfile();
      getUser();
      getJobs();
    }
  }, [token, getProfile, getUser, getJobs, auth]);

  useEffect(() => {
    if (profile && profile.role) {
      switch (profile.role) {
        case "Employer":
          getMyPostedJobs();
          break;
        case "Candidate":
          getMyAppliedJobs();
          break;
        default:
          break;
      }
    }
  }, [profile, getMyPostedJobs, getMyAppliedJobs]);

  return (
    <DataContext.Provider
      value={{
        user,
        profile,
        jobs,
        myPostedJobs,
        profileExist,
        myAppliedJobs,
        createProfile,
        postJob,
        publishJob,
        unPublishJob,
        applyForJob,
        deleteJob
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContextProvider, DataContext };
