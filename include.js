document.addEventListener("DOMContentLoaded", () => {
  const inject = async (selector, file) => {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`Element ${selector} not found for inclusion`);
      return;
    }

    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();

      // Use innerHTML to retain <header> and <footer> tags
      element.innerHTML = html;

      console.log(`Included ${file} successfully`);
    } catch (error) {
      console.error(`Include failed for ${file}:`, error);
      element.innerHTML = `<!-- Error loading ${file} -->`;
    }
  };

  inject("header", "header.html");
  inject("footer", "footer.html");
});
