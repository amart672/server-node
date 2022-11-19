/*
  Warnings:

  - Added the required column `title` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Department_departmentId_key";

-- AlterTable
ALTER TABLE "Department" ADD CONSTRAINT "Department_pkey" PRIMARY KEY ("departmentId");

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "quote" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;
