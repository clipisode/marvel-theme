import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: SiteData = {
  customCssKey: "site.css",
  brandColor: "#7df42e",
  introScreen: {
    recordButtonLabel: "Record a M01+ video reply",
  },
  nameScreen: {},
  emailScreen: {},
  closedScreen: {},
};
