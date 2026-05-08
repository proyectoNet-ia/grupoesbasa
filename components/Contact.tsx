
import React, { useState, useEffect } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [captchaQuest, setCaptchaQuest] = useState({ a: 0, b: 0 });
  const [userCaptcha, setUserCaptcha] = useState('');

  const socialLinks = [
    { id: 'facebook-f', name: 'Facebook', url: 'https://www.facebook.com/CeremoniasArcangel/' },
    { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/ceremonias_arcangel/' }
  ];

  const generateCaptcha = () => {
    setCaptchaQuest({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1
    });
    setUserCaptcha('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = 'El correo es requerido';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Formato no válido';
    const phoneRegex = /^\+?[0-9\s-]{10,15}$/;
    if (!formData.phone) newErrors.phone = 'El teléfono es requerido';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Mínimo 10 dígitos';
    if (!formData.message.trim()) newErrors.message = 'Por favor describe tu requerimiento';
    
    if (parseInt(userCaptcha) !== captchaQuest.a + captchaQuest.b) {
      alert('Respuesta de CAPTCHA incorrecta');
      generateCaptcha();
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/xdablygn', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', phone: '', message: '', captcha: false });
          generateCaptcha();
          setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
          alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        }
      } catch (error) {
        alert('Error de conexión.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="py-20 md:py-32 bg-blue-50/30 w-full">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-blue-100 mb-12">
          
          {/* Información de contacto */}
          <div className="lg:w-1/3 bg-blue-950 p-10 md:p-14 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D92121]/10 rounded-bl-full"></div>
            <h2 className="text-2xl md:text-3xl font-black mb-10 relative z-10">Contacto Directo</h2>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot text-sky-400"></i>
                </div>
                <div>
                  <p className="text-blue-300 text-[10px] uppercase font-bold tracking-widest mb-1">Ubicación</p>
                  <p className="text-sm font-medium">Igualdad #200 Ejido de Potrerillos, La Piedad, Michoacán, México.</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone text-sky-400"></i>
                </div>
                <div>
                  <p className="text-blue-300 text-[10px] uppercase font-bold tracking-widest mb-1">Call Center</p>
                  <p className="text-sm font-medium">+52 352 168 1197</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope text-sky-400"></i>
                </div>
                <div>
                  <p className="text-blue-300 text-[10px] uppercase font-bold tracking-widest mb-1">Email</p>
                  <p className="text-sm font-medium">ventasesbasa@hotmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10">
              <p className="text-[10px] uppercase font-black tracking-[0.2em] mb-4 text-blue-300/60">Síguenos</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.id} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#D92121] transition-all"
                  >
                    <i className={`fa-brands fa-${social.id} text-xs`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:w-2/3 p-8 md:p-14">
            <h2 className="text-2xl md:text-3xl font-black text-blue-950 mb-3 tracking-tight">Solicitar Cotización</h2>
            <p className="text-blue-900/50 mb-10 text-sm font-medium">Completa el formulario y un asesor experto te contactará.</p>
            
            {submitSuccess && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-bold flex items-center gap-3 animate-pulse">
                <i className="fa-solid fa-circle-check text-lg"></i>
                ¡Mensaje enviado con éxito!
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-400">Nombre Completo *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-3.5 bg-blue-50/30 border ${errors.name ? 'border-red-400' : 'border-blue-100'} rounded-xl outline-none text-sm font-medium focus:bg-white transition-all`} 
                  placeholder="Juan Pérez" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-400">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3.5 bg-blue-50/30 border ${errors.email ? 'border-red-400' : 'border-blue-100'} rounded-xl outline-none text-sm font-medium focus:bg-white transition-all`} 
                  placeholder="correo@ejemplo.com" 
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-400">Teléfono / WhatsApp *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-5 py-3.5 bg-blue-50/30 border ${errors.phone ? 'border-red-400' : 'border-blue-100'} rounded-xl outline-none text-sm font-medium focus:bg-white transition-all`} 
                  placeholder="+52 123 456 7890" 
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-400">Mensaje *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className={`w-full px-5 py-3.5 bg-blue-50/30 border ${errors.message ? 'border-red-400' : 'border-blue-100'} rounded-xl outline-none text-sm font-medium resize-none focus:bg-white transition-all`} 
                  placeholder="¿Cómo podemos ayudarte?" 
                />
              </div>

              {/* CAPTCHA */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-6 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-950 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {captchaQuest.a}
                  </div>
                  <span className="text-blue-950 font-black">+</span>
                  <div className="w-12 h-12 bg-blue-950 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {captchaQuest.b}
                  </div>
                  <span className="text-blue-950 font-black">=</span>
                </div>
                <div className="flex-1 w-full">
                  <input 
                    type="number"
                    value={userCaptcha}
                    onChange={(e) => setUserCaptcha(e.target.value)}
                    className="w-full px-5 py-3.5 bg-white border border-blue-100 rounded-xl outline-none text-sm font-bold focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Respuesta"
                  />
                </div>
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 ${isSubmitting ? 'bg-blue-300' : 'bg-blue-950 hover:bg-[#D92121]'} text-white font-bold rounded-xl shadow-xl transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3`}
                >
                  {isSubmitting ? <i className="fa-solid fa-spinner animate-spin"></i> : 'Enviar Solicitud'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
