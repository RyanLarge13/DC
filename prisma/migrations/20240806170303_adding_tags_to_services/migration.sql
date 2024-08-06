/*
  Warnings:

  - You are about to drop the column `tags` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "tags";

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDesc" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ServiceToTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tags_id_key" ON "Tags"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ServiceToTags_AB_unique" ON "_ServiceToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ServiceToTags_B_index" ON "_ServiceToTags"("B");

-- AddForeignKey
ALTER TABLE "_ServiceToTags" ADD CONSTRAINT "_ServiceToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceToTags" ADD CONSTRAINT "_ServiceToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
