import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addImages = async (serviceId, newImages) => {
  const added = await prisma.service.update({
    where: { id: serviceId },
    data: {
      images: [...newImages],
    },
  });
  console.log(added);
};

// Adding images to authentication services
addImages("10df173b-2abe-420b-9adb-b06549981305", [
  "https://images.ctfassets.net/23aumh6u8s0i/7opCVXMvjs6y4PKe74c34X/d9a432edd8b4c5252dcf73c52fcbdb93/Passwordless-Authentication-hero.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCtpr-6NYppVhVXDq_PV6mXRGJ_da0BB4KQ&s",
  "https://images.pingidentity.com/image/upload/f_auto,q_80,w_1200,c_scale/ping_dam/content/dam/picr/img/bl/hero/APISecurity-BlogHero-1200x575.png",
]);
