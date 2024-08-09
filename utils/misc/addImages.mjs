import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addImages = async () => {
  const added = await prisma.service.update({
    where: { title: "Free Portfolio" },
    data: {
      images: [
        "https://as2.ftcdn.net/v2/jpg/01/29/16/45/1000_F_129164560_4hzn0bUJlN2i02ACl7HqtetCV9jPPqOK.jpg",
        "https://miro.medium.com/v2/resize:fit:730/0*SEdGTbPR8hfkTWR2.jpg",
        "https://i.pinimg.com/originals/0e/39/c2/0e39c256714a4b7c0299323a82701647.jpg",
      ],
    },
  });
  console.log(added);
};

addImages();
