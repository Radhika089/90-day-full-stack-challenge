import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [loadingActiveProject, setLoadingActiveProject] = useState(true);
  const [chatLoading, setChatLoading] = useState(false);
  const [generatingProject, setGeneratingProject] = useState(false);
  const [activeFile, setActiveFile] = useState("/App.js");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await api.get("/api/auth/me");
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoadingUser(false);
      }
    };

    checkSession();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post("/api/auth/login", { email, password });
      setUser(data.user);
      toast.success("Welcome back!");
      navigate("/");
    } catch (err) {
      console.log("Login Failed : ", err);
      const errMsg = err?.response?.data?.error || "Invalid email or password";
      toast.error(errMsg);
      throw new Error(errMsg);
    }
  };
  const register = async (name, email, password) => {
    try {
      const { data } = await api.post("/api/auth/register", {
        name,
        email,
        password,
      });
      setUser(data.user);
      toast.success("Account Created Successfully!");
      navigate("/");
    } catch (err) {
      console.log("Registration Failed : ", err);
      const errMsg = err?.response?.data?.error || "Registration Failed";
      toast.error(errMsg);
      throw new Error(errMsg);
    }
  };

  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
      setUser(null);
      setProjects([]);
      setActiveProject(null);
      toast.success("Logout Successfully!");
      navigate("/login");
    } catch (err) {
      console.log("Logout Failed : ", err);
      toast.error("Logout Failed");
    }
  };

  // Project actions
  const loadProjects = useCallback(async () => {
    if (!user) return;

    try {
      const { data } = await api.get("/api/projects");
      setProjects(data);
    } catch (err) {
      console.error("Failed to list projects:", err);
      toast.error("Failed to load project lists");
    } finally {
      setLoadingProjects(false);
    }
  }, [user]);

  const loadProject = async (id, silent = false) => {
    if (!user) return;
    if (!silent) setLoadingActiveProject(true);

    try {
      const { data } = await api.get(`/api/projects/${id}`);
      setActiveProject(data);

      const files = Object.keys(data.files);

      if (files.length > 0) {
        setActiveFile((prev) => {
          if (files.includes(prev)) return prev;
          if (files.includes("/App.js")) return "/App.js";
          return files[0];
        });
      }
    } catch (err) {
      console.error("Failed to load project:", err);
      if (!silent) {
        toast.error("Failed to load project details");
        navigate("/");
      }
    } finally {
      if (!silent) setLoadingActiveProject(false);
    }
  };

  useEffect(() => {
    if (!activeProject?._id || !user) return;

    const isOngoing =
      activeProject.status === "generating" ||
      activeProject.status === "pending" ||
      activeProject.status === "revising";

    if (isOngoing) {
      setChatLoading(true);
      const interval = setInterval(() => {
        loadProject(activeProject?._id, true);
      }, 2000);
      return () => clearInterval(interval);
    } else {
      setChatLoading(false);
    }
  }, [activeProject?._id, activeProject?.status, loadProject, user]);

  const handleGenerate = useCallback(
    async (prompt) => {
      if (!user) return;
      setGeneratingProject(true);

      try {
        const { data } = await api.post("/api/projects", { prompt });
        toast.success("Ai Agent is planning structure....");
        navigate(`/builder/${data._id}`);
      } catch (err) {
        console.error("Failed to generate project:", err);
        toast.error(err?.response?.data?.error || "Failed to generate project");
      } finally {
        setGeneratingProject(false);
      }
    },
    [navigate, user],
  );

  const handleDelete = useCallback(
    async (id) => {
      if (!user) return;

      try {
        const { data } = await api.delete(`/api/projects/${id}`);
        setProjects((prev) => prev.filter((p) => p._id !== id));
        toast.success("Deleted Successfully!");
      } catch (err) {
        console.error("Failed to delete project:", err);
        toast.error(err?.response?.data?.error || "Failed to delete project");
      }
    },
    [user],
  );

  const handleChat = useCallback(
    async (prompt) => {
      if (!activeProject || !user) return;
      setChatLoading(true);

      try {
        const { data } = await api.posy(
          `/api/projects/${activeProject._id}/chat`,
          { prompt },
        );
        setActiveProject(data);
        if (data.errors && data.errors.length > 0) {
          toast.error(`${data.errors.length} revision patches failed`);
        } else {
          toast.success(`Updated to version ${data.version}`);
        }
      } catch (err) {
        console.error("Revision request failed", err);
        toast.error(err?.response?.data?.error || "Revision request failed");
      } finally {
        setChatLoading(false);
      }
    },
    [activeProject, user],
  );

  const updateProjectFiles = useCallback(
    async (params) => {},
    [activeProject, user],
  );

  return (
    <AppContext.Provider
      value={{
        user,
        loadingUser,
        login,
        register,
        projects,
        loadingProjects,
        activeProject,
        loadingActiveProject,
        chatLoading,
        generatingProject,
        activeFile,
        showCode,
        handleChat,
        setActiveFile,
        setShowCode,
        loadProject,
        loadProjects,
        handleGenerate,
        handleDelete,
        logout,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider.");
  }

  return context;
};
