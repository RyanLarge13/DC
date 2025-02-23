import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addUseCases = async (serviceId, useCases) => {
  const added = await prisma.service.update({
    where: { id: serviceId },
    data: {
      useCases: [...useCases],
    },
  });
  console.log(added);
};

addUseCases("10df173b-2abe-420b-9adb-b06549981305", [
  "SaaS Platforms & Web Applications",
  "Fintech & Banking Applications",
  "Healthcare & Medical Platforms",
  "E-commerce & Marketplace Platforms",
  "Enterprise Security & Internal Tools",
  "IoT & Smart Device Authentication",
  "Gaming & Social Media Platforms",
  "Government & Legal Platforms",
  "Blockchain & Crypto Platforms",
  "Education & Learning Platforms",
]);
