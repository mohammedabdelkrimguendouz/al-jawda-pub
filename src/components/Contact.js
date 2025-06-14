import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Clock, Star, Award, Users, Zap } from 'lucide-react';
import './Contact.css';
import logoImage from './jawda-logo.jpg';

function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // الكشف عن حجم الشاشة
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/share/1QyYGxaD1F/', color: '#1877F2' },
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/chamsou_pub_30?igsh=MXJqeGJxY2NuMDh1Yw==', color: '#E4405F' },
  ];

  const contactInfo = [
    { icon: Phone, label: 'الهاتف', value: '+213 698 727 274', action: 'tel:+213698727274' },
    { icon: Mail, label: 'البريد الإلكتروني', value: 'arb.pubdeco@gmail.com', action: 'mailto:arb.pubdeco@gmail.com' },
    { icon: MapPin, label: 'الموقع', value: 'ورقلة', action: 'https://maps.app.goo.gl/dPvFbHZdZo73fmit6?g_st=aw' },
    { icon: Clock, label: 'ساعات العمل', value: 'السبت - الخميس: 8:00 - 20:00', action: null }
  ];

  return (
    <div className="contact-container">
      {/* عناصر الخلفية المتحركة */}
      <div className="background-elements">
        <div className="bg-circle purple top-25 left-25"></div>
        <div className="bg-circle pink top-75 right-25"></div>
        <div className="bg-circle blue bottom-25 left-33"></div>
      </div>

      {/* تأثير متتبع الماوس - يظهر فقط في الأجهزة الكبيرة */}
      {!isMobile && (
        <div 
          className="mouse-follower"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
      )}

      <div className="content-wrapper">
        {/* قسم الرأس */}
        <div className={`header-section ${isVisible ? 'visible' : 'hidden'}`}>
          {/* الشعار */}
          <div className="logo-container">
            <div className="logo-wrapper">
              <div className="logo-background"></div>
              <div className="logo-main">
                <img 
                  src={logoImage} 
                  alt="شعار الجودة للإشهار" 
                  className="logo-image"
                />
              </div>
            </div>
          </div>

          <h1 className="main-title">الجودة للإشهار</h1>
          <p className="description">
            نحن نقدم خدمات الإشهار الاحترافية لتحقيق أهدافك التجارية
          </p>
        </div>

        {/* شبكة بطاقات الاتصال */}
        <div className="contact-cards-grid">
          {/* بطاقة وسائل التواصل الاجتماعي */}
          <div className={`social-card ${isVisible ? 'visible' : 'hidden-left'} ${isMobile ? 'mobile' : ''}`}>
            <h2 className="card-title">تابعنا على</h2>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': social.color }}
                >
                  <div className="social-icon-wrapper" style={{ backgroundColor: social.color }}>
                    <social.icon className="social-icon" />
                  </div>
                  <div className="social-text">
                    <div className="social-label">{social.label}</div>
                    <div className="social-subtext">تابعنا للحصول على آخر الأخبار</div>
                  </div>
                  {!isMobile && (
                    <div className="social-arrow">
                      <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* بطاقة معلومات الاتصال */}
          <div className={`contact-info-card ${isVisible ? 'visible' : 'hidden-right'} ${isMobile ? 'mobile' : ''}`}>
            <h2 className="card-title">معلومات الاتصال</h2>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-group">
                  {info.action ? (
                    <a
                      href={info.action}
                      className="contact-info-item link"
                    >
                      <div className="contact-icon-wrapper gradient">
                        <info.icon className="contact-icon" />
                      </div>
                      <div className="contact-text">
                        <div className="contact-label">{info.label}</div>
                        <div className="contact-value">{info.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-info-item">
                      <div className="contact-icon-wrapper gradient">
                        <info.icon className="contact-icon" />
                      </div>
                      <div className="contact-text">
                        <div className="contact-label">{info.label}</div>
                        <div className="contact-value">{info.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* قسم الدعوة للإجراء */}
        <div className={`cta-section ${isVisible ? 'visible' : 'hidden'}`}>
          <div className="cta-badge">
            <div className="cta-badge-inner">
              <h3 className="cta-title">
                جاهز لبدء مشروعك؟
              </h3>
            </div>
          </div>
          <a
            href="https://wa.me/213698727274"
            className="cta-button"
          >
            <MessageCircle className="cta-icon" />
            تواصل معنا عبر واتساب
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;