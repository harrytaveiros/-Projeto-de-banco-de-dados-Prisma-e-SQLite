import { PrismaClient } from '@prisma/client'

// Na versão 6, o construtor vazio funciona perfeitamente!
const prisma = new PrismaClient()

async function main() {
  console.log("🚀 Iniciando operação no SQLite...");

  const newUser = await prisma.user.create({
    data: {
      name: "Harry",
      email: `harry.${Date.now()}@exemplo.com`,
      posts: {
        create: { title: "Padrão de usuário" }
      }
    }
  })

  console.log("✅ Usuário criado:", newUser)

  const allUsers = await prisma.user.findMany({
    include: { posts: true }
  })

  console.log("📊 Dados no banco:")
  console.dir(allUsers, { depth: null })
}

main()
  .catch(e => console.error("❌ Erro:", e))
  .finally(async () => await prisma.$disconnect())