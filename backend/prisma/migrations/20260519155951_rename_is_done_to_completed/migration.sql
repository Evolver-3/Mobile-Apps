/*
  Warnings:

  - You are about to drop the column `isDone` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "isDone",
ADD COLUMN     "colors" TEXT,
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
