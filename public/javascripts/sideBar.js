function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Esconder
    } else {
        sidebar.style.left = "0px"; // Mostrar
    }
}