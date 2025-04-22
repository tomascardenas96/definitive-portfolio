// Este archivo es para evitar el error de que PrismaClient no es accesible en el servidor
// Se asegura que se genere una sola instancia de PrismaClient a la vez
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
