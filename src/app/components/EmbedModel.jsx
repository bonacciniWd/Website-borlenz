"use client";
import { TbSend } from "react-icons/tb";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function EmbedModel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setErrorMessage(
        "Falha ao enviar a mensagem. Verifique suas informações e tente novamente."
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleCloseModal = () => {
    setSuccess(false);
  };

  return (
    <section
      id="contato"
      className="py-10 px-4 min-h-auto bg-cover bg-center text-brandGray"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden p-6 bg-brandBlack/20 bg-center text-brandWhite shadow-2xl border-[1px] border-brandBlue shadow-brandBlue/60 rounded-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Entre em Contato
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-brandWhite">
          {/* Nome */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
              className="h-12 px-4 rounded-lg border bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brandBlue w-full"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seuemail@exemplo.com"
              required
              className="h-12 px-4 rounded-lg border bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brandBlue w-full"
            />
          </div>

          {/* Mensagem */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escreva sua mensagem aqui"
              rows="5"
              required
              className="px-4 py-2 rounded-lg border bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brandBlue w-full"
            ></textarea>
          </div>

          {/* Botão de envio */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-300 transform hover:scale-105"
              disabled={isSending}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl transform active:scale-95">
                <TbSend className="mr-4" />
                {isSending ? "Enviando..." : "Enviar Mensagem"}
              </span>
            </button>
          </div>
        </form>

        {/* Mensagens de feedback */}
        {errorMessage && (
          <p className="mt-4 text-center text-red-500">{errorMessage}</p>
        )}
      </div>

      {/* Modal de Sucesso */}
      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[url('/bg-2.png')] border-[1px] border-brandBlue bg-brandGray/95 rounded-lg h-dvh/70 p-6 w-[90%] max-w-2xl relative">
            <button
              onClick={handleCloseModal}
              className="top-6 absolute  right-6 text-brandOrange hover:text-brandGreen"
            >
              X
            </button>
            <h3 className="text-2xl font-bold mb-4 text-brandGreen text-center">Obrigado!</h3>
            <p className="text-brandWhite text-center mb-10">
              Enquanto aguarda nosso contato, por que não dar espaço para uma dica da borlenz?
            </p>
            <div className="relative aspect-video">
              <iframe
                className="w-full h-[440px] lg:h-[600px] rounded-lg"
                src="/1.mp4"
                title="Explicação do Projeto"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
