

document.addEventListener("DOMContentLoaded", () => {
    const modal = $("#gameModal");

    // Obsługa przycisków "Czytaj dalej"
    $(document).on("click", ".read-more", function () {
        const title = $(this).data("title");
        const description = $(this).data("description");
        const image = $(this).data("image");
        const equipment = $(this).data("equipment");
        const variety = $(this).data("variety");
        const comment = $(this).data("comment");

        // Wypełnij dane w modal
        modal.find("#modal-title").text(title);
        modal.find("#modal-image").attr("src", image).attr("alt", title);
        modal.find("#modal-description").html(description);
        modal.find("#modal-equipment").text(equipment);

        // Sprawdzenie, czy "Różnorodność" i "Komentarze" nie są puste
        if (variety) {
            modal.find("#modal-variety").html(variety);
            modal.find("#modal-variety").parent().show();
        } else {
            modal.find("#modal-variety").parent().hide();
        }

        if (comment) {
            modal.find("#modal-comment").html(comment);
            modal.find("#modal-comment").parent().show();
        } else {
            modal.find("#modal-comment").parent().hide();
        }

        // Pokaż modal
        modal.modal("show");
    });
});
