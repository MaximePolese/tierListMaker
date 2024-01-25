$(document).ready(function () {
    let draggedElement = null;
    const container1 = $('#container1');
    const container2 = $('#container2');
    let count1 = 1;
    let count2 = 1;

    $('.pokemon').on('mousedown', function (e) {
        e.preventDefault();
        draggedElement = $(this);
        console.log(draggedElement);
        draggedElement.addClass('dragging');
        $(document).on('mousemove', onMouseMove);
        $(document).on('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        const newX = e.pageX - draggedElement.width() / 2;
        const newY = e.pageY - draggedElement.height() / 2;
        draggedElement.css({left: newX, top: newY});
    }

    function onMouseUp() {
        if (isOverContainer(draggedElement, container1)) {
            console.log('Dropped in Container1');
            draggedElement.appendTo(container1);
            draggedElement.css({left: (container1.offset().left * count1), top: container1.offset().top});
            count1 += 1;
        } else if (isOverContainer(draggedElement, container2)) {
            console.log('Dropped in Container2');
            draggedElement.appendTo(container2);
            draggedElement.css({left: (container2.offset().left * count2), top: container2.offset().top});
            count2 += 1;
        }
        $(document).off('mousemove', onMouseMove);
        $(document).off('mouseup', onMouseUp);
        draggedElement.removeClass('dragging');
    }

    function isOverContainer(element, container) {
        const centerX = element.offset().left + element.width() / 2;
        const centerY = element.offset().top + element.height() / 2;
        const left = container.offset().left;
        const top = container.offset().top;
        const right = container.offset().left + container.width();
        const bottom = container.offset().top + container.height();
        return centerX > left && centerX < right && centerY > top && centerY < bottom;
    }
});
