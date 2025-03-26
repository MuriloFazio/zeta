import { adicionarFaq } from "@/app/api/faq/add/route";

async function seedDatabase() {
  try {
    console.log("🚀 Adicionando FAQs...");
    await adicionarFaq(
      "Como solicitar férias?",
      "Você deve solicitar ao RH com 30 dias de antecedência.",
      "RH"
    );
    await adicionarFaq(
      "Qual é o horário de funcionamento?",
      "Nosso atendimento é das 9h às 18h.",
      "Atendimento"
    );

    console.log("✅ FAQs adicionadas com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erro ao adicionar FAQs:", error);
    process.exit(1);
  }
}

seedDatabase();
