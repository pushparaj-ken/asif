/*
  Warnings:

  - Added the required column `thumbuttonlink` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbuttonname` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumdescription` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumimg` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumoldprice` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumprice` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumtitle` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` ADD COLUMN `thumbuttonlink` TEXT NOT NULL,
    ADD COLUMN `thumbuttonname` TEXT NOT NULL,
    ADD COLUMN `thumdescription` TEXT NOT NULL,
    ADD COLUMN `thumimg` VARCHAR(191) NOT NULL,
    ADD COLUMN `thumoldprice` TEXT NOT NULL,
    ADD COLUMN `thumprice` TEXT NOT NULL,
    ADD COLUMN `thumtitle` TEXT NOT NULL;
