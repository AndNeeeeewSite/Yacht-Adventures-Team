function modalClick(){var o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function d(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}o.openModalBtn.addEventListener("click",d),o.closeModalBtn.addEventListener("click",d),window.onclick=function(d){d.target==o.modal&&(o.modal.classList.add("is-hidden"),document.body.classList.remove("no-scroll"))}}modalClick();
//# sourceMappingURL=index.d695ec89.js.map