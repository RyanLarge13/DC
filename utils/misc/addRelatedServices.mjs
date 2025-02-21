import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addRelatedServices = async (serviceId, relatedIds) => {
  const added = await prisma.service.update({
    where: { id: serviceId },
    data: {
      related: {
        connect: relatedIds.map((id) => ({ id: id })),
      },
    },
    include: { relatedServices: true },
  });
  console.log(added);
};

// Android app
addRelatedServices("715e1f93-6e0e-4c77-b118-533f49d27b3f", [
  "7c94a51c-a87f-4535-ab6c-f1282f8a9401",
  "8f33ceb5-e1d4-47b4-8fe5-14c75ded7d29",
  "07da8997-e60a-4184-8572-4f2b42bdab87",
]);
