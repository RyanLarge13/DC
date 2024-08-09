/*
  Warnings:

  - You are about to drop the column `instructions` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `longBenefits` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "instructions",
DROP COLUMN "longBenefits",
ADD COLUMN     "Includes" TEXT[],
ALTER COLUMN "benefits" SET DATA TYPE TEXT[];

-- CreateTable
CREATE TABLE "Instruction" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "step" INTEGER NOT NULL,

    CONSTRAINT "Instruction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instruction_id_key" ON "Instruction"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Instruction_serviceId_key" ON "Instruction"("serviceId");

-- AddForeignKey
ALTER TABLE "Instruction" ADD CONSTRAINT "Instruction_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
