/*
  Warnings:

  - You are about to drop the column `googleId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "googleId",
DROP COLUMN "location",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
