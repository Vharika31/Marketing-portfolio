import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:harikavavilapalli31@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Prepared",
      description: "Your email client should open with the pre-filled message.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on innovative projects, 
                or simply connecting with fellow tech enthusiasts. Whether you're looking for a product 
                marketing professional, event coordinator, or community builder, let's start a conversation!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 card-elegant rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">harikavavilapalli31@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 card-elegant rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Vizag, Andhra Pradesh, India</p>
                </div>
              </div>

              
            </div>

           {/* Social Links */}
<div>
  <h4 className="font-semibold text-foreground mb-4">Connect on Social</h4>
  <div className="flex gap-4">
    <a 
      href="https://www.linkedin.com/in/harika31/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center hover:shadow-lg transition-elegant"
    >
      <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </a>
    <a 
      href="https://github.com/Vharika31" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center hover:shadow-lg transition-elegant"
    >
      <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </a>
    <a 
      href="mailto:vharika.1505@gmail.com" 
      className="group w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center hover:shadow-lg transition-elegant"
    >
      <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </a>
  </div>
</div>
</div>

          {/* Contact Form */}
          <div className="card-elegant p-8 rounded-3xl">
            <h3 className="text-2xl font-bold font-poppins mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="rounded-xl border-2 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="rounded-xl border-2 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="rounded-xl border-2 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or how we can collaborate..."
                  rows={6}
                  className="rounded-xl border-2 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold rounded-xl"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              * This form opens your email client with a pre-filled message
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
