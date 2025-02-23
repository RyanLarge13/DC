import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addIncludes = async (serviceId, includes) => {
  const added = await prisma.service.update({
    where: { id: serviceId },
    data: {
      includes: [...includes],
    },
  });
  console.log(added);
};

// Authentication Service
addIncludes("10df173b-2abe-420b-9adb-b06549981305", [
  "We take care of all service related issues for one year after production release",
  "Integration into any software",
  "25% Off any service side development product",
]);
