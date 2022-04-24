/*
  Warnings:

  - You are about to drop the column `categoryId` on the `teachersdiscipline` table. All the data in the column will be lost.
  - Added the required column `categoriId` to the `teachersdiscipline` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teachersdiscipline" DROP CONSTRAINT "teachersdiscipline_categoryId_fkey";

-- AlterTable
ALTER TABLE "teachersdiscipline" DROP COLUMN "categoryId",
ADD COLUMN     "categoriId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "teachersdiscipline" ADD CONSTRAINT "teachersdiscipline_categoriId_fkey" FOREIGN KEY ("categoriId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
