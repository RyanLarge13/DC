import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addUseCases = async () => {
  const added = await prisma.service.update({
    where: { title: "Professional Portfolio" },
    data: {
      useCases: [
        "presenting your best work, whether you're a designer, developer, writer, or any other professional. It allows you to highlight key projects, case studies, and accomplishments, demonstrating your skills and expertise to potential clients, employers, or collaborators",
        "A well-designed portfolio helps establish and reinforce your personal brand. It provides a platform to convey your unique style, values, and professional identity, making a strong impression on visitors and differentiating you from others in your field",
        "A well-designed portfolio helps establish and reinforce your personal brand. It provides a platform to convey your unique style, values, and professional identity, making a strong impression on visitors and differentiating you from others in your field",
        "A high-end portfolio is an essential asset for job seekers and freelancers. It not only demonstrates your skills and experience but also serves as a persuasive tool to attract job offers and secure new clients. A polished, professional portfolio can significantly enhance your credibility and appeal to prospective employers or clients",
      ],
    },
  });
  console.log(added);
};

addUseCases();
