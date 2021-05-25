import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: SiteData = {
  customCssKey: "styles.css",
  introScreen: {
    recordButtonLabel: "Record a video reply",
  },
  nameScreen: {},
  emailScreen: {},
  closedScreen: {},
};
