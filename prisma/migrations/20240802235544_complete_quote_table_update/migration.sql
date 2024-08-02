/*
  Warnings:

  - Added the required column `messageFromUser` to the `CompleteQuote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceId` to the `CompleteQuote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompleteQuote" ADD COLUMN     "business" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dateCompleted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "messageFromUser" TEXT NOT NULL,
ADD COLUMN     "oldMessagesFromUser" TEXT[],
ADD COLUMN     "serviceId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "CompleteQuote" ADD CONSTRAINT "CompleteQuote_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
