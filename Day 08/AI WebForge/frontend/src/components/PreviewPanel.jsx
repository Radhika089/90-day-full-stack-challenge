import { useMemo, useState } from "react";
import { SandpackProvider, useSandpack } from "@codesandbox/sandpack-react";
import { detectDependencies } from "../utils/sandpackUtils";
import { useAppContext } from "../context/AppContext";

function SandpackFileWatcher() {
  const { sandpack } = useSandpack();
  const { files } = sandpack;
  const { activeProject, updateProjectFiles } = useAppContext();
}

const PreviewPanel = ({ activeFile, showCode, project }) => {
  const [showErrorOverlay, setShowErrorOverlay] = useState(true);
  const [liveFiles, setLiveFiles] = useState(project.files);
  const [prevProjectKey, setPrevProjectKey] = useState(
    `${project._id}-${project.version}`,
  );

  const currentKey = `${project._id}-${project.version}`;

  if (prevProjectKey !== currentKey) {
    setPrevProjectKey(currentKey);
    setLiveFiles(project.files);
  }

  const sandpackFiles = useMemo(() => {
    const spFiles = {};
    for (const [path, content] of Object.entries(liveFiles)) {
      const fileCode =
        typeof content === "string" ? content : content?.content || "";
      spFiles[path] = {
        code: fileCode,
        active: path === activeFile,
      };
      return spFiles;
    }
  }, [liveFiles, activeFile]);

  const dependencies = useMemo(() => {
    return detectDependencies(liveFiles);
  }, [liveFiles]);

  return (
    <div className="h-full w-full">
      <SandpackProvider
        key={project._id}
        template="react"
        files={sandpackFiles}
        customSetup={{ dependencies }}
        options={{
          externalResources: [
            "https://tailwindcss.com/",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css",
          ],
          classes: {
            "sp-wrapper": "sp-wrapper",
            "sp-layout": "sp-layout",
            "sp-preview": "sp-preview",
          },
          logLevel: 0,
        }}
        theme={{
          colors: {
            surface1: "#fffff",
            surface2: "#f4f4f5",
            surface3: "#e4e4e7",
            clickable: "#71717a",
            base: "#09090b",
            disabled: "#a1a1aa",
            hover: "#18181b",
            accent: "#18181b",
            error: "#ef4444",
            errorSurface: "#fef2f2",
          },
          font: {
            body: "'Urbanist',system-ui,-apple-system,sans-serif",
            mono: "Geist mono",
            size: "13px",
            lineHeight: "1.6",
          },
        }}></SandpackProvider>
    </div>
  );
};

export default PreviewPanel;
