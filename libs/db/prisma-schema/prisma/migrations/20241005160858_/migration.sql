/*
  Warnings:

  - Added the required column `phonenumber` to the `CallToAction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CallToAction` ADD COLUMN `phonenumber` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Course` ADD COLUMN `popular_course` BOOLEAN NOT NULL DEFAULT false;
