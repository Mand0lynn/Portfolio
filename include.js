document.addEventListener("DOMContentLoaded", () => {
  const inject = (selector, file) => {
    const element = document.querySelector(selector);
    if (element) {
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error(`Failed to fetch ${file}`);
          return response.text();
        })
        .then(html => {
          element.outerHTML = html;
        })
        .catch(error => {
          console.error("Include error:", error);
        });
    }
  };

  inject("header", "header.html");
  inject("footer", "footer.html");
});
