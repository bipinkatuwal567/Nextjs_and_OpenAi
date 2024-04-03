import { PrismaClient } from "@prisma/client";

const primaClientSingleton = () => {
  return new PrismaClient();
};

type PrimaClientSingleton = ReturnType<typeof primaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrimaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? primaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
