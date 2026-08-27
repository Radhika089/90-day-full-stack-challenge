import { useSandpack } from "@codesandbox/sandpack-react";
import React, { useEffect } from "react";

const SandPackErrorMonitor = ({ onErrorChange }) => {
  const { sandpack } = useSandpack();
  const { error } = sandpack;

  useEffect(() => {
    if (error) {
      const msg = error.message || "";
      const isNetworkError =
        msg.includes("Failed to fetch") ||
        msg.includes("col.csbops.io") ||
        msg.includes("Error_connection_Timed_out") ||
        msg.includes("net::ERR");

      if (isNetworkError) {
        onErrorChange(false);
        return;
      }
    }
    onErrorChange(true);
  }, [error, onErrorChange]);

  return null;
};

export default SandPackErrorMonitor;
