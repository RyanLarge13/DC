import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addTag = async () => {
  await prisma.service.update({
    where: { id: "353c10a7-d314-4f82-976e-46dbde0a9b4e" },
    data: {
      tags: {
        connect: { id: "163b679d-1bc6-4c8b-85f3-ffa13ced9294" },
      },
    },
  });
  console.log("finished");
};

addTag();
