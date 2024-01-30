-- CreateTable
CREATE TABLE "Caterory" (
    "_category_id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Blog" (
    "_blog_id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_BlogToCaterory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_BlogToCaterory_A_fkey" FOREIGN KEY ("A") REFERENCES "Blog" ("_blog_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BlogToCaterory_B_fkey" FOREIGN KEY ("B") REFERENCES "Caterory" ("_category_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Caterory_label_key" ON "Caterory"("label");

-- CreateIndex
CREATE UNIQUE INDEX "_BlogToCaterory_AB_unique" ON "_BlogToCaterory"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogToCaterory_B_index" ON "_BlogToCaterory"("B");
