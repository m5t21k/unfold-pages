(() => {
  const config = window.UNFOLD_SITE_CONFIG || {};
  document.querySelectorAll("[data-support-email]").forEach((node) => {
    const email = (config.supportEmail || "").trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const link = document.createElement("a");
      link.href = `mailto:${email}`;
      link.textContent = email;
      node.replaceChildren(link);
    }
  });
  document.querySelectorAll("[data-operator]").forEach((node) => {
    const operator = (config.operatorName || "").trim();
    if (operator) node.textContent = operator;
  });
  document.querySelectorAll("[data-effective-date]").forEach((node) => {
    const effectiveDate = (config.effectiveDate || "").trim();
    if (effectiveDate) node.textContent = effectiveDate;
  });
})();
