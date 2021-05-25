import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: SiteData = {
  customCssKey: "styles.css",
  brandColor: "#7df42e",
  introScreen: {
    recordButtonLabel: "Record a video reply — Excelsior!",
  },
  nameScreen: {},
  emailScreen: {},
  closedScreen: {},
};
