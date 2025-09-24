import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formUrl = e.target.action;
    
    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', mensagem: '' }); // Limpa o formulário
      } else {
        alert('Houve um erro ao enviar a mensagem.');
      }
    } catch (error) {
      console.error('Erro de envio:', error);
      alert('Houve um erro de conexão.');
    }
  };

  return (
    <section className="contact-form">
      <h2>Entre em Contato</h2>
      <p>Se tiver alguma dúvida ou oportunidade de trabalho, sinta-se à vontade para me enviar uma mensagem!</p>

      <form action="https://formspree.io/f/xqayazdw" method="POST" onSubmit={handleSubmit}>
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
        <button type="submit">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default ContactForm;