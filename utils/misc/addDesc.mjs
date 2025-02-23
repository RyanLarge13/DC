import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addDesc = async (serviceId, desc) => {
  const added = await prisma.service.update({
    where: { id: serviceId },
    data: {
      desc: desc,
    },
  });
  console.log(added);
};

// Authentication Service
addDesc(
  "10df173b-2abe-420b-9adb-b06549981305",
  "Secure your platform with custom-built authentication software tailored to your needs. From password-less logins to multi-factor authentication, let's design a secure, scalable solutions that keep your users safe",
);
