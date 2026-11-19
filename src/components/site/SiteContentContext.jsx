import { createContext, useContext } from "react";

const SiteContentContext = createContext({});

export function SiteContentProvider({ value, children }) {
  return <SiteContentContext.Provider value={value || {}}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const map = useContext(SiteContentContext);
  const get = (key, fallback = "") => {
    const value = map?.[key];
    return typeof value === "string" && value.trim() !== "" ? value : fallback;
  };
  return { get, values: map };
}