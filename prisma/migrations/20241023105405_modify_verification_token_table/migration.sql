/*
  Warnings:

  - A unique constraint covering the columns `[identifier]` on the table `VerificationToken` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `VerificationToken_identifier_token_key` ON `VerificationToken`;

-- AlterTable
ALTER TABLE `VerificationToken` ADD PRIMARY KEY (`identifier`);

-- CreateIndex
CREATE UNIQUE INDEX `VerificationToken_identifier_key` ON `VerificationToken`(`identifier`);
