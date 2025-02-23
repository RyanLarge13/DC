import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addLongDesc = async (serviceId, desc) => {
  const added = await prisma.service.update({
    where: { id: serviceId },
    data: {
      longDesc: desc,
    },
  });
  console.log(added);
};

// Authentication Service
addLongDesc(
  "10df173b-2abe-420b-9adb-b06549981305",
  "Authentication is the first line of defense in any digital system, and off-the-shelf solutions don’t always fit every business’s needs.\n\nI specialize in building custom authentication and security software that integrates seamlessly with your platform, ensuring robust security without compromising user experience.\n\nWhether you need\n\nOAuth, JWT, biometric authentication, password-less logins, multi-factor authentication (MFA), or role-based access control (RBAC),\n\nI design solutions that are scalable, efficient, and secure against modern threats.\n\nWith encryption, secure hashing algorithms, and advanced session management techniques, I ensure your system meets the highest security standards.\n\nLet’s build an authentication system that keeps your users safe while providing a frictionless experience",
);
