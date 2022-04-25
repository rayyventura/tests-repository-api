/*
  Warnings:

  - You are about to drop the `teachersdiscipline` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "teachersdiscipline" DROP CONSTRAINT "teachersdiscipline_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "teachersdiscipline" DROP CONSTRAINT "teachersdiscipline_teacherDisciplineId_fkey";

-- DropTable
DROP TABLE "teachersdiscipline";

-- CreateTable
CREATE TABLE "tests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pdfUrl" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "teacherDisciplineId" INTEGER NOT NULL,

    CONSTRAINT "tests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
