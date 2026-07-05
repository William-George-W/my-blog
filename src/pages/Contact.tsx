import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focusedFields, setFocusedFields] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFocus = (field: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string, value: string) => {
    setFocusedFields((prev) => ({ ...prev, [field]: value !== "" }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "请输入您的姓名";
    if (!formData.email.trim()) {
      newErrors.email = "请输入您的邮箱地址";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }
    if (!formData.message.trim()) newErrors.message = "请输入消息内容";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate Network Request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFocusedFields({});
    }, 1800);
  };

  return (
    <div className="contact-page-container container">
      {/* Title */}
      <div className="page-header text-center">
        <div className="header-badge">
          <Sparkles size={14} /> <span>保持联络</span>
        </div>
        <h1 className="page-title">联系我</h1>
        <p className="page-subtitle">有项目合作意向或技术探讨？欢迎随时给我写信！</p>
      </div>

      <div className="contact-grid">
        {/* Info Cards Column */}
        <div className="contact-info-column">
          <div className="contact-info-card glass-panel">
            <h2 className="info-card-title">联系信息</h2>
            <p className="info-card-desc">我们可以通过以下渠道沟通，我也十分乐意接收到您的意见反馈。</p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="info-item-label">我的邮箱</h4>
                  <p className="info-item-val">wanghaonan2188@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="info-item-label">现居地</h4>
                  <p className="info-item-val">中国，深圳</p>
                </div>
              </div>
            </div>

            {/* Social quick connection */}
            <div className="contact-social-section">
              <h4 className="social-sec-title">在社交网络上关注我</h4>
              <div className="social-badge-links">
                <a href="https://github.com/William-George-W" target="_blank" rel="noopener noreferrer" className="social-badge">GitHub</a>
                <a href="#" className="social-badge">Juejin / 掘金</a>
                <a href="#" className="social-badge">Zhihu / 知乎</a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-column">
          <div className="contact-form-card glass-panel relative-box">
            {isSuccess ? (
              /* Success Page State */
              <div className="form-success-state text-center fade-in">
                <div className="success-emoji-container">
                  <CheckCircle2 size={64} className="success-checkmark-icon" />
                  {/* Floating CSS confetti shapes */}
                  <span className="confetti conf-1">✨</span>
                  <span className="confetti conf-2">⭐</span>
                  <span className="confetti conf-3">🎉</span>
                </div>
                <h2 className="success-title">发送成功！</h2>
                <p className="success-message">
                  感谢您的来信！消息已成功投递，我将会在看到邮件后第一时间回复您。
                </p>
                <button className="reset-form-btn" onClick={() => setIsSuccess(false)}>
                  再次发送消息
                </button>
              </div>
            ) : (
              /* Input Form State */
              <form onSubmit={handleSubmit} className="contact-form-element">
                <h2 className="form-card-title">发送邮件</h2>

                {/* Name */}
                <div className={`form-group ${focusedFields.name || formData.name ? "has-value" : ""} ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="name" className="floating-label">您的姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onFocus={() => handleFocus("name")}
                    onBlur={(e) => handleBlur("name", e.target.value)}
                    onChange={handleChange}
                    className="form-input-field"
                  />
                  {errors.name && <span className="error-message-lbl">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className={`form-group ${focusedFields.email || formData.email ? "has-value" : ""} ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="email" className="floating-label">您的邮箱 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onFocus={() => handleFocus("email")}
                    onBlur={(e) => handleBlur("email", e.target.value)}
                    onChange={handleChange}
                    className="form-input-field"
                  />
                  {errors.email && <span className="error-message-lbl">{errors.email}</span>}
                </div>

                {/* Subject */}
                <div className={`form-group ${focusedFields.subject || formData.subject ? "has-value" : ""}`}>
                  <label htmlFor="subject" className="floating-label">邮件主题</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onFocus={() => handleFocus("subject")}
                    onBlur={(e) => handleBlur("subject", e.target.value)}
                    onChange={handleChange}
                    className="form-input-field"
                  />
                </div>

                {/* Message */}
                <div className={`form-group textarea-group ${focusedFields.message || formData.message ? "has-value" : ""} ${errors.message ? "has-error" : ""}`}>
                  <label htmlFor="message" className="floating-label">内容详情 *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onFocus={() => handleFocus("message")}
                    onBlur={(e) => handleBlur("message", e.target.value)}
                    onChange={handleChange}
                    className="form-textarea-field"
                  ></textarea>
                  {errors.message && <span className="error-message-lbl">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="spinner-loader">发送中...</span>
                  ) : (
                    <>
                      发送消息 <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
