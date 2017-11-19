// Write your JavaScript code.
$(document).ready(function() {
    $("#add-item-button").on("click", addItem);
});

function addItem() {
    $("#add-item-error").hide();

    var newTitle = $("#add-item-title").val();

    $.post("/Todo/AddItem", { title: newTitle }, function() {
        window.location = "/Todo";
    })
    .fail(function(data) {
        if (data && data.responseJSON) {
            var firstError = data.responseJSON[Object.keys(data.responseJSON)[0]];

            $("#add-item-error").text(firstError);
            $("#add-item-error").show();
        }
    });
}