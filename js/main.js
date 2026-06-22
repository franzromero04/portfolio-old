window.addEventListener("load", function () {

    if (
        window.location.pathname.includes("index.html") ||
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("/")
    ) {

        Swal.fire({
            title: "Welcome!",
            text: "Thanks for visiting my portfolio 👋",
            icon: "success",
            confirmButtonColor: "#e94560",
            timer: 3000,
            timerProgressBar: true
        });

    }

});