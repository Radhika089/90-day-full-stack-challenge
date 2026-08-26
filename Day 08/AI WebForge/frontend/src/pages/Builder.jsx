import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Builder = () => {
  const { id } = useParams;
  const navigate = useNavigate();

  const [leftTab, setLeftTab] = useState("chat");
  const [publishing, setPublishing] = useState(false);
  const [publishUrl, setPublishUrl] = useState(null);

  const [
    activeProject,
    loadingActiveProject,
    activeFile,
    showCode,
    setActiveFile,
    setShowCode,
    loadProject,
    logout,
  ] = useAppContext();

  useEffect(() => {
    if (!id) return;
    loadProject(id);
  }, [id, loadProject]);

  useEffect(() => {
    if (!id || !activeProject) return;

    if (
      activeProject.status === "pending" ||
      activeProject.status === "generating"
    ) {
      const interval = setInterval(() => {
        loadProject(id, true);
      }, 15000);

      return () => clearInterval(interval);
    }
  }, [id, loadProject, activeProject]);

  if (loadingActiveProject || !activeProject) {
    return <Loading />;
  }

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden text-zinc-900 relative">
      {/*top header */}
      {/* main layout */}
    </div>
  );
};

export default Builder;
