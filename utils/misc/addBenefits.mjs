import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addBenefits = async () => {
  const added = await prisma.service.update({
    where: { title: "PWA (Progressive Web Application)" },
    data: {
      benefits: [
        "Installable on any device",
        "Options for deploying to app stores",
        "Free deployment to the PWA store",
        "In-app monetization",
        "Layout adjusts to all screen sizes",
      ],
    },
  });
  console.log(added);
};

addBenefits();
