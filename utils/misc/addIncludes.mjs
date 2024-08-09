import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addIncludes = async () => {
  const added = await prisma.service.update({
    where: { title: "Free Portfolio" },
    data: {
      includes: [
        "Free personalized logo with your first and last initials",
        "Free domain name",
        "Free template",
        "Emailing system for potential site visitors",
        "Spam detection and blocking capabilities in your email system",
        "A Hero, About Me, Previous Work, Contact, Projects, and Social Section",
        "SEO optimization, so the internet can find your portfolio by your name or information",
        "Manage, update or delete your portfolio at any time",
      ],
    },
  });
  console.log(added);
};

addIncludes();
