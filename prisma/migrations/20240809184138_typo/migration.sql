/*
  Warnings:

  - You are about to drop the column `Includes` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "Includes",
ADD COLUMN     "includes" TEXT[];
