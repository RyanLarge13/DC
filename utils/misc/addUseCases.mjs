import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addUseCases = async () => {
  const added = await prisma.service.update({
    where: { title: "Free Portfolio" },
    data: {
      useCases: [
        "If you are looking for a free, easy, and customizable experience to get your name out there in the world of tech",
        "Want to have a trusted and simple solution to get your name and information out there for employers",
        "You can also use this free feature as a way to show off some of your business solution. Best suitable for small businesses or startups",
      ],
    },
  });
  console.log(added);
};

addUseCases();
