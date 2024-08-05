/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `ServiceType` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ServiceType_title_key" ON "ServiceType"("title");
