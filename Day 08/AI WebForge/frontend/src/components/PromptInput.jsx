import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  CloudUploadIcon,
  Loader2Icon,
  MicIcon,
} from "lucide-react";
const PromptInput = ({
  onSubmit,
  loading = false,
  placeholder = "Describe the website you want to build....",
  large = false,
  autoFocus = false,
  variant = "default",
}) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || loading) return;
    onSubmit(trimmed);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  if (variant === "glass") {
    return (
      <form
        onSubmit={handleSubmit}
        className="w-full mx-w-2xl bg-white/10 backdrop-blur-xl rounded-xl ring-1 ring-white/25 focus-within:ring-2 focus-within:ring-white/30 overflow-hidden mt-6 transition">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => e.target.value}
          onKeyDown={handleKeyDown}
          disabled={loading}
          placeholder={placeholder}
          rows={3}
          className="w-full p-4 pb-2 resize-none placeholder:text-white/60 outline-none bg-transparent text-white text-base"
        />

        <div className="flex items-center justify-between pb-3 px-3 gap-2">
          <label
            htmlFor="file"
            className="border border-white/20 text-white/80 hover:text-white hover:bg-white/30 p-1.5 rounded-md cursor-pointer flex items-center justify-center">
            <input type="file" id="file" hidden />
            <CloudUploadIcon size={18} />
          </label>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="flex items-center justify-center text-white/70 p-1 hover:text-white cursor-pointer">
              <MicIcon size={18} />
            </button>
            <button
              type="submit"
              disabled={!value.trim() || loading}
              className="flex items-center justify-center p-1.5 rounded-full bg-red-600 text-white hover:bg-red-700 disabled:opacity-40 hover:text-white cursor-pointer">
              {loading ? (
                <Loader2Icon size={18} className="animate-spin" />
              ) : (
                <ArrowRightIcon size={18} />
              )}
            </button>
          </div>
        </div>
      </form>
    );
  }
  return (
    <div
      className={`flex items-end bg-white border border-zinc-200 rounded-xl  gap-2 focus-within:ring-1 focus-within:ring-zinc-300 transition ${large ? "p-4" : "p-3"} `}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => e.target.value}
        onKeyDown={handleKeyDown}
        disabled={loading}
        placeholder={placeholder}
        rows={large ? 5 : 1}
        className={`flex-1 bg-transparent border-none outline-none resize-none text-zinc-900 placeholder:text-zinc-400 ${larger ? "text-base" : "text-sm"}`}
      />

      <button
        onSubmit={() => handleSubmit()}
        disabled={!value.trim() || loading}
        className="inline-flex items-center justify-center bg-zinc-950 text-white hover:bg-zinc-800 disabled:opacity-40 cursor-pointer rounded-full shrink-0"
        style={{ width: large ? 36 : 24, height: large ? 36 : 24 }}>
        {loading ? (
          <Loader2Icon size={large ? 20 : 15} className="animate-spin" />
        ) : (
          <ArrowRightIcon size={large ? 20 : 15} />
        )}
      </button>
    </div>
  );
};

export default PromptInput;
