export function showModal() {
        let mainModal = document.querySelector("#mainModal");
        let mainModalContent = document.querySelector("#mainModal .content");
        document.body.classList.add("overflow-hidden")
        mainModalContent.classList.replace("hide", "show");
        mainModal.classList.replace("hide", "show");
}