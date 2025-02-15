import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["overlay"];

  connect() {
    document.addEventListener("keydown", this.closeOnEsc);
  }

  disconnect() {
    document.removeEventListener("keydown", this.closeOnEsc);
  }

  close(event) {
    if (event.target.classList.contains("close-modal")) {
      console.log("Overlay");
      this.overlayTarget.classList.add("hidden");
    }
  }

  closeOnEsc = (event) => {
    if (event.key === "Escape") {
      this.overlayTarget.classList.add("hidden");
    }
  };
}
