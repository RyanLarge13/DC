import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addIncludes = async () => {
  const added = await prisma.service.update({
    where: { title: "PWA (Progressive Web Application)" },
    data: {
      includes: [
        "Device responsiveness, make sure your application layout adjusts to all screen sizes",
        "Installable on any device through any browser with PWA support (Chrome, Firefox, Safari)",
        "offline mode comes first. Your app will come with built in offline fist functionality",
        "Notification system. Your users will be able to get native notifications on the devices they install your application on",
        "Sign in, Sign up, Settings, Menu, Home pages included in base price",
        "1 in app monetization technique integrated into your app for free",
        "Pick from various options to bundle and deploy your pwa as an official mobile application to and app store",
      ],
    },
  });
  console.log(added);
};

addIncludes();
