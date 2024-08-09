import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addBenefits = async () => {
  const added = await prisma.service.update({
    where: { title: "Free Portfolio" },
    data: {
      benefits: [
        "30+ Free Templates",
        "Free Domain",
        "Fun Customization",
        "Free Forever",
      ],
    },
  });
  console.log(added);
};

addBenefits();
