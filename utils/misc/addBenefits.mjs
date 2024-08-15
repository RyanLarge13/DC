import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addBenefits = async () => {
  const added = await prisma.service.update({
    where: { title: "PWA (Progressive Web Application)" },
    data: {
      benefits: [
        "SEO Optimized",
        "Deploy with a custom domain 1 year on us",
        "Robust & secure email and contact system",
        "In-app monetization",
        "Layout adjusts to all screen sizes",
      ],
    },
  });
  console.log(added);
};

addBenefits();
