// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.querySelector("#toast");
  if (main) {
    const toast = document.createElement("div");

    const icons = {
      success: "fas fa-circle-check",
      info: "fas fa-circle-info",
      warning: "fas fa-circle-exclamation",
      error: "fas fa-circle-exclamation",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);

    toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${delay}s forwards`;

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when click
    toast.onclick = function (event) {
      if (event.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    toast.innerHTML = `
         <div class="toast__icon">
          <i class="${icon}"></i>
        </div>
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">
            ${message}
          </p>
        </div>
        <div class="toast__close">
          <i class="fa-solid fa-xmark"></i>
        </div>
    `;
    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Thành công!",
    message: "Bạn đã đăng kí thành công tài khoản tại TVA.",
    type: "success",
    duration: 5000,
  });
}
function showErrorToast() {
  toast({
    title: "Thất bại!",
    message: "Có lỗi xảy ra, vui lòng liên hệ TVA để được hỗ trợ.",
    type: "error",
    duration: 5000,
  });
}
