import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addBenefits = async (serviceId, benefits) => {
  const added = await prisma.service.update({
    where: { id: serviceId },
    data: {
      benefits: [...benefits],
    },
  });
  console.log(added);
};

// Authentication Service
addBenefits("10df173b-2abe-420b-9adb-b06549981305", [
  "Safe and Secure software at a wonderful price",
  "Free fixes on any issues that arise for a year after production release",
  "24 hour customer support",
  "Free integration into existing application both client or server",
]);
