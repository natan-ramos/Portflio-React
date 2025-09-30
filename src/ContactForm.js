import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // ⚡ NOVO: Importamos a biblioteca
import './ContactForm.css';

// 🚨 SUBSTITUA POR SUAS CREDENCIAIS DO EMAILJS AQUI 🚨
const SERVICE_ID = 'service_nq2mmdf'; 
const TEMPLATE_ID = 'template_bj7n87d'; 
const USER_ID = 'jccoe9IckWzIui6wx'; // Public Key

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [status, setStatus] = useState(''); // NOVO: Para feedback visual do status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...'); // Seta status de envio

    // Mapeamos seus campos (nome, mensagem) para os nomes que o EmailJS usa no template
    const templateParams = {
        name: formData.nome,
        email: formData.email,
        message: formData.mensagem
    };

    // ⚡ MUDANÇA PRINCIPAL: Enviando o e-mail via EmailJS ⚡
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        setStatus('Mensagem enviada com sucesso! Logo entrarei em contato.');
        setFormData({ nome: '', email: '', mensagem: '' }); // Limpa o formulário
      }, (err) => {
        console.error('Falha ao enviar e-mail:', err);
        setStatus('Ops! Algo deu errado. Tente novamente mais tarde.');
      });
  };

  return (
    <section className="contact-form">
      <h2>Entre em Contato</h2>
      <p>Se tiver alguma dúvida ou oportunidade de trabalho, sinta-se à vontade para me enviar uma mensagem!</p>

      {/* Removemos a action do Formspree; o submit agora é totalmente via JS */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea 
            id="mensagem" 
            name="mensagem" 
            value={formData.mensagem} 
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={status === 'Enviando...'}>
            {status === 'Enviando...' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
        
        {/* NOVO: Feedback de status */}
        {status && status !== 'Enviando...' && (
            <p className={`status-message ${status.includes('sucesso') ? 'success' : 'error'}`}>
              {status}
            </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;