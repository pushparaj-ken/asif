/*
  Warnings:

  - Added the required column `youtubelink` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Banner` ADD COLUMN `youtubelink` VARCHAR(191) NOT NULL;
