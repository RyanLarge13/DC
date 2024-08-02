-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "serviceId" TEXT,
    "serviceTypeId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDesc" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "longDesc" TEXT NOT NULL,
    "styles" TEXT,
    "tags" TEXT[],
    "images" TEXT[],
    "benefits" TEXT[],
    "longBenefits" TEXT[],
    "instructions" JSONB NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "hourlyRate" DOUBLE PRECISION,
    "specialOffer" BOOLEAN NOT NULL DEFAULT false,
    "subscription" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobHistory" (
    "id" TEXT NOT NULL,
    "portfolioId" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "location" TEXT,
    "responsibilities" TEXT[],
    "specialAccomplishments" TEXT[],
    "stillWorking" BOOLEAN NOT NULL DEFAULT false,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpecialtyTags" (
    "id" TEXT NOT NULL,
    "portfolioId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "SpecialtyTags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastPorfolioProjects" (
    "id" TEXT NOT NULL,
    "portfolioId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "headerImg" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PastPorfolioProjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FreePortfolio" (
    "id" TEXT NOT NULL,
    "template" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,
    "about" TEXT,
    "avatarUrl" TEXT,
    "resumeLink" TEXT,
    "currentTitle" TEXT,
    "socialMedias" TEXT[],
    "constactInfo" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FreePortfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceType" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDesc" TEXT NOT NULL,

    CONSTRAINT "ServiceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceCard" (
    "id" TEXT NOT NULL,
    "serviceTypeId" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "styles" TEXT NOT NULL,
    "btnTxt" TEXT NOT NULL DEFAULT 'Let''s Go!',
    "benefits" TEXT[],
    "startingAtPrice" DOUBLE PRECISION NOT NULL,
    "isMostPopular" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PriceCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "currentReview" TEXT NOT NULL,
    "previousReview" TEXT,
    "generalComment" TEXT,
    "communicationComment" TEXT,
    "projectManagmentComment" TEXT,
    "understandingNeedsComment" TEXT,
    "technincalExpertiseComment" TEXT,
    "supportAndSatisfactionComment" TEXT,
    "generalRating" INTEGER NOT NULL DEFAULT 5,
    "communicationRating" INTEGER NOT NULL DEFAULT 5,
    "projectManagmentRating" INTEGER NOT NULL DEFAULT 5,
    "understandingNeedsRating" INTEGER NOT NULL DEFAULT 5,
    "technincalExpertiseRating" INTEGER NOT NULL DEFAULT 5,
    "supportAndSatisfactionRating" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PendingQuote" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "messageFromUser" TEXT NOT NULL,
    "oldMessagesFromUser" TEXT[],
    "business" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PendingQuote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompleteQuote" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,

    CONSTRAINT "CompleteQuote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "completeId" TEXT,
    "currentId" TEXT,
    "text" TEXT NOT NULL,
    "comments" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,
    "complete" BOOLEAN NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT true,
    "dueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompletedStage" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "approvedByUser" BOOLEAN NOT NULL DEFAULT false,
    "approvedByAdmin" BOOLEAN NOT NULL DEFAULT false,
    "dateCompleted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompletedStage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurrentStage" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stageProgress" INTEGER NOT NULL DEFAULT 0,
    "estimatedCompletionDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CurrentStage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "serviceReferenceId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "developmentSourceCodeLink" TEXT,
    "developmentDeploymentLink" TEXT,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "complete" BOOLEAN NOT NULL,
    "onTime" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompleteProject" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "managerid" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "downloadLink" TEXT NOT NULL,
    "webLink" TEXT,
    "binaryFile" BYTEA,
    "moneySaved" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompleteProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT,
    "delivered" BOOLEAN NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receipt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "completedStageId" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "transactionNumber" TEXT NOT NULL,
    "reciteNumber" TEXT NOT NULL,
    "amountPaid" DOUBLE PRECISION NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "taxableAmount" DOUBLE PRECISION NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "completedStageId" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "subTotal" DOUBLE PRECISION NOT NULL,
    "taxableAmount" DOUBLE PRECISION NOT NULL,
    "totalAmountDue" DOUBLE PRECISION NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "dateIssued" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogPost" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "headerImg" TEXT NOT NULL,
    "category" TEXT[],
    "inReview" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "avatar" TEXT,
    "freePortfolioUrl" TEXT,
    "listedIps" TEXT[],
    "settings" JSONB NOT NULL,
    "emergencyContact" JSONB NOT NULL,
    "authPassCode" INTEGER NOT NULL,
    "moneySaved" INTEGER NOT NULL DEFAULT 0,
    "moneySpent" INTEGER NOT NULL DEFAULT 0,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "subscriber" BOOLEAN NOT NULL DEFAULT false,
    "freePortfolio" BOOLEAN NOT NULL DEFAULT false,
    "isAuthenticatedPhone" BOOLEAN NOT NULL DEFAULT false,
    "isAuthenticatedEmail" BOOLEAN NOT NULL DEFAULT false,
    "authPassCodeExpiresAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "birthday" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pay" (
    "id" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "reviewerId" TEXT NOT NULL,
    "hourlyWage" INTEGER NOT NULL DEFAULT 0,
    "hoursWorked" INTEGER NOT NULL DEFAULT 0,
    "approved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "wageType" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "secondaryEmail" TEXT NOT NULL,
    "listedIps" TEXT[],
    "settings" JSONB NOT NULL,
    "emergencyContact" JSONB NOT NULL,
    "overallRating" INTEGER NOT NULL DEFAULT 100,
    "isAuthenticatedPhone" BOOLEAN NOT NULL DEFAULT false,
    "isAuthenticatedEmail" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AdminToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");

-- CreateIndex
CREATE UNIQUE INDEX "JobHistory_id_key" ON "JobHistory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SpecialtyTags_id_key" ON "SpecialtyTags"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PastPorfolioProjects_id_key" ON "PastPorfolioProjects"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FreePortfolio_id_key" ON "FreePortfolio"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceType_id_key" ON "ServiceType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PriceCard_id_key" ON "PriceCard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PriceCard_serviceTypeId_key" ON "PriceCard"("serviceTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_id_key" ON "Review"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Testimonial_id_key" ON "Testimonial"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PendingQuote_id_key" ON "PendingQuote"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CompleteQuote_id_key" ON "CompleteQuote"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Message_id_key" ON "Message"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Todo_id_key" ON "Todo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CompletedStage_id_key" ON "CompletedStage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CurrentStage_id_key" ON "CurrentStage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CurrentStage_projectId_key" ON "CurrentStage"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CompleteProject_id_key" ON "CompleteProject"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CompleteProject_projectId_key" ON "CompleteProject"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_id_key" ON "Notification"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_id_key" ON "Receipt"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_completedStageId_key" ON "Receipt"("completedStageId");

-- CreateIndex
CREATE UNIQUE INDEX "Receipt_reciteNumber_key" ON "Receipt"("reciteNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_id_key" ON "Invoice"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_completedStageId_key" ON "Invoice"("completedStageId");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "Invoice"("invoiceNumber");

-- CreateIndex
CREATE UNIQUE INDEX "BlogPost_id_key" ON "BlogPost"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pay_id_key" ON "Pay"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pay_managerId_key" ON "Pay"("managerId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_AdminToProject_AB_unique" ON "_AdminToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_AdminToProject_B_index" ON "_AdminToProject"("B");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "ServiceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobHistory" ADD CONSTRAINT "JobHistory_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "FreePortfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecialtyTags" ADD CONSTRAINT "SpecialtyTags_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "FreePortfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PastPorfolioProjects" ADD CONSTRAINT "PastPorfolioProjects_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "FreePortfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceCard" ADD CONSTRAINT "PriceCard_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "ServiceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendingQuote" ADD CONSTRAINT "PendingQuote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendingQuote" ADD CONSTRAINT "PendingQuote_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PendingQuote" ADD CONSTRAINT "PendingQuote_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompleteQuote" ADD CONSTRAINT "CompleteQuote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompleteQuote" ADD CONSTRAINT "CompleteQuote_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_currentId_fkey" FOREIGN KEY ("currentId") REFERENCES "CurrentStage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_completeId_fkey" FOREIGN KEY ("completeId") REFERENCES "CompletedStage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedStage" ADD CONSTRAINT "CompletedStage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CurrentStage" ADD CONSTRAINT "CurrentStage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_serviceReferenceId_fkey" FOREIGN KEY ("serviceReferenceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompleteProject" ADD CONSTRAINT "CompleteProject_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompleteProject" ADD CONSTRAINT "CompleteProject_managerid_fkey" FOREIGN KEY ("managerid") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompleteProject" ADD CONSTRAINT "CompleteProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_completedStageId_fkey" FOREIGN KEY ("completedStageId") REFERENCES "CompletedStage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_completedStageId_fkey" FOREIGN KEY ("completedStageId") REFERENCES "CompletedStage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogPost" ADD CONSTRAINT "BlogPost_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pay" ADD CONSTRAINT "Pay_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pay" ADD CONSTRAINT "Pay_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminToProject" ADD CONSTRAINT "_AdminToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminToProject" ADD CONSTRAINT "_AdminToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
