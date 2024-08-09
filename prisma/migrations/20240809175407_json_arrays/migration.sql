/*
  Warnings:

  - The `benefits` column on the `Service` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `longBenefits` column on the `Service` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `instructions` column on the `Service` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "benefits",
ADD COLUMN     "benefits" JSONB[],
DROP COLUMN "longBenefits",
ADD COLUMN     "longBenefits" JSONB[],
DROP COLUMN "instructions",
ADD COLUMN     "instructions" JSONB[];
