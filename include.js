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
      
      // Create temporary container
      const temp = document.createElement('div');
      temp.innerHTML = html;
      
      // Inject while preserving any existing event listeners
      element.replaceWith(...temp.childNodes);
      
      console.log(`Included ${file} successfully`);
    } catch (error) {
      console.error(`Include failed for ${file}:`, error);
      element.innerHTML = `<!-- Error loading ${file} -->`;
    }
  };

  // Inject header and footer
  inject("header", "header.html");
  inject("footer", "footer.html");
  
  // Optional: Load other common elements
  // inject("#newsletter", "components/newsletter.html");
});
