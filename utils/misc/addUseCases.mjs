import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addUseCases = async () => {
  const added = await prisma.service.update({
    where: { title: "PWA (Progressive Web Application)" },
    data: {
      useCases: [
        "Offline access to content ensures content availability in areas with poor or no network coverage, enhancing user engagement and satisfaction",
        "Real-Time Notifications can increases user retention, reduces cart abandonment, and drives sales through timely and relevant notifications",
        "Efficient Data Entry in Remote Locations ensures data can be collected and stored securely, even in areas without internet access, reducing the risk of data loss and improving the efficiency of data entry",
      ],
    },
  });
  console.log(added);
};

addUseCases();
