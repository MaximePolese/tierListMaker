$(document).ready(function () {
    let isDragging = false;
    let draggedElement = null;

    $('.pokemon').on('mousedown', function (e) {
        isDragging = true;
        draggedElement = $(this);
        draggedElement.addClass('dragging');

        $(document).on('mousemove', function (e) {
            if (isDragging) {
                draggedElement.css({
                    left: e.clientX - draggedElement.width() / 2,
                    top: e.clientY - draggedElement.height() / 2
                });
            }
        });

        $(document).on('mouseup', function () {
            isDragging = false;
            draggedElement.removeClass('dragging');
            $(document).off('mousemove');
            $(document).off('mouseup');

            // Check if the dragged element is over a container
            const container1 = $('#container1');
            const container2 = $('#container2');

            if (isOverContainer(draggedElement, container1)) {
                draggedElement.appendTo(container1);
            } else if (isOverContainer(draggedElement, container2)) {
                draggedElement.appendTo(container2);
            }
        });
    });

    function isOverContainer(element, container) {
        const elementPos = element.offset();
        const containerPos = container.offset();
        const elementWidth = element.width();
        const elementHeight = element.height();

        return (
            elementPos.left > containerPos.left &&
            elementPos.top > containerPos.top &&
            elementPos.left + elementWidth < containerPos.left + container.width() &&
            elementPos.top + elementHeight < containerPos.top + container.height()
        );
    }
});