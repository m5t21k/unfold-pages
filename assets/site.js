(() => {
  const config = window.UNFOLD_SITE_CONFIG || {};
  document.querySelectorAll("[data-support-email]").forEach((node) => {
    const email = (config.supportEmail || "").trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const link = document.createElement("a");
      link.href = `mailto:${email}`;
      link.textContent = email;
      node.replaceChildren(link);
    } else {
      node.textContent = "公開前TODO：site/config.js に問い合わせ先メールアドレスを設定してください。";
    }
  });
  document.querySelectorAll("[data-operator]").forEach((node) => {
    node.textContent = (config.operatorName || "").trim() || "公開前TODO：site/config.js に運営者名を設定してください。";
  });
  document.querySelectorAll("[data-effective-date]").forEach((node) => {
    node.textContent = (config.effectiveDate || "").trim() || "公開前TODO：site/config.js に発効日を設定してください。";
  });
})();
