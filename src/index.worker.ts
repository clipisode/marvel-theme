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
  closedScreen: {
    markup: `
    <div id="detailsInner" className="flex flex-col items-center bg-white text-center flex-grow">
    <p className="bg-black">black</p><p className="bg-white">white</p><div className="border m-8">QR_CODE</div><p className="bg-black">black</p>
    </div>`,
  },
};
