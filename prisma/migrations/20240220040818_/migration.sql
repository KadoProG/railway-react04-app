/*
  Warnings:

  - You are about to drop the `Caterory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BlogToCaterory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Caterory_label_key";

-- DropIndex
DROP INDEX "_BlogToCaterory_B_index";

-- DropIndex
DROP INDEX "_BlogToCaterory_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Caterory";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_BlogToCaterory";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Category" (
    "_category_id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blog" (
    "_blog_id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Blog_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("_category_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Blog" ("_blog_id", "contents", "createdAt", "imagePath", "tag", "title", "updatedAt") SELECT "_blog_id", "contents", "createdAt", "imagePath", "tag", "title", "updatedAt" FROM "Blog";
DROP TABLE "Blog";
ALTER TABLE "new_Blog" RENAME TO "Blog";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Category_label_key" ON "Category"("label");
