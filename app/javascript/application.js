// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

document.addEventListener("turbo:frame-missing", (e) => {
  const { ok, url } = e.detail.response;

  if (ok) {
    e.preventDefault();
    e.detail.visit(url, { action: "replace" });
  }
});
