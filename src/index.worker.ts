import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: any = {
  customCssKey: "styles.css",
  introScreen: {
    recordButtonLabel: "Excelsior!",
  },
  nameScreen: {
    // values: UPLOAD_PERCENTAGE, INVITATION_DISPLAY_NAME, SOCIAL_NETWORK
    socialPrompt: "auto",
    socialPromptFallback: "instagram",
    },
    successScreen: {
      // values: THEME_FILE_ROOT, INVITATION_DISPLAY_NAME
      markup: `
              <div class="flex flex-grow flex-col items-center justify-between">
                  <div>
                      <p class="mt-12 mb-12 mx-3 text-center">Excelsior! Your video request for <b>INVITATION_DISPLAY_NAME</b> <span class="whitespace-nowrap">was sent.</span></p>
                      <div class="hidden iosOnly text-center">
                          <div>
                            <a class="downloadButton" href="https://apps.apple.com/us/app/clipisode-easy-video-collabs/id1475959226#?platform=iphone">Download the app</a>
                          </div>
                      </div>
                  </div>
                  <div>
                      <div class="hidden iosOnly">
                          <div class="mb-24">
                            <a href="https://apps.apple.com/us/app/clipisode-easy-video-collabs/id1475959226#?platform=iphone">
                              <img class="h-10 mx-auto" src="/app-store.svg" />
                            </a>
                          </div>
                      </div>
                      <div class="hidden androidOnly mb-16">
                          <p class="bg-yellow-100 text-center text-sm mx-3 mb-4">Clipisode is only available for <span class="whitespace-nowrap">iPhone and iPad</span> right now.</p>
                          <p class="text-center text-sm mx-3 mb-4"><a class="text-blue-500 underline" href="care@clipisode.com">Email us</a> if you want to talk about Clipisode for Android.</p>
                      </div>
                  </div>
              </div>
          `,
    },
  };
