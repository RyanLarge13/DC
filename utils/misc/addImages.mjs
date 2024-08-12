import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addImages = async () => {
  const added = await prisma.service.update({
    where: { title: "PWA (Progressive Web Application)" },
    data: {
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-creating-3d-renderings-for-mobile-apps-software-and-web-development-image_3826852.jpg",
        "https://png.pngtree.com/background/20240413/original/pngtree-innovative-3d-shapes-and-infographic-enhance-mobile-app-software-and-web-picture-image_8480224.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdV7f5iJVfN3gI5qhCkIeOWIZ9lSjHglXFg&s",
      ],
    },
  });
  console.log(added);
};

addImages();
