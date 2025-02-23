import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addTagsToService = async (serviceId, tagIds) => {
  const added = await prisma.service.update({
    where: { id: serviceId },
    data: {
      tags: {
        connect: tagIds.map((id) => ({ id: id })),
      },
    },
    include: { tags: true },
  });
  console.log(added);
};

// Android app
// addTagsToService("715e1f93-6e0e-4c77-b118-533f49d27b3f", [
//   "163b679d-1bc6-4c8b-85f3-ffa13ced9294",
//   "58488e80-3d3e-41fe-9160-eb350f3dee0d",
//   "c8975c66-8c1f-4d81-98a9-3d8e80952cb1",
// ]);

// Cross Platform Mobile
// addTagsToService("715e1f93-6e0e-4c77-b118-533f49d27b3f", [
//   "163b679d-1bc6-4c8b-85f3-ffa13ced9294",
//   "58488e80-3d3e-41fe-9160-eb350f3dee0d",
//   "c8975c66-8c1f-4d81-98a9-3d8e80952cb1",
// ]);

//Authentication services
addTagsToService("10df173b-2abe-420b-9adb-b06549981305", [
  "c8975c66-8c1f-4d81-98a9-3d8e80952cb1",
  "f152aa33-3044-456e-9ce3-afd553ba9369",
  "3d5732a7-e769-4e78-907b-2e480b465529",
  "163b679d-1bc6-4c8b-85f3-ffa13ced9294",
]);
