$(document).ready(function () {
    let draggedElement = null;
    const container1 = $('#container1');
    const container2 = $('#container2');

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
            draggedElement.css({left: container1.offset().left, top: container1.offset().top});
        } else if (isOverContainer(draggedElement, container2)) {
            console.log('Dropped in Container2');
            draggedElement.appendTo(container2);
            draggedElement.css({left: container2.offset().left, top: container2.offset().top});
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
        let inArea = centerX > left && centerX < right && centerY > top && centerY < bottom;
        console.log(inArea);
        return inArea;
    }
});

// $(document).ready(function () {
//
//     var currentBox = 3;
//
//     function magnetSnap(speed) {
//         var snapspeed = speed;
//         var p = $(".container div:nth-child(" + currentBox + ")");
//         var offset = p.offset();
//
//         $(".dragbox").animate(
//             {
//                 top: offset.top,
//                 left: offset.left
//             },
//             snapspeed
//         );
//     }
//
//     magnetSnap(0);
//
//     $(window).resize(function () {
//         magnetSnap(0);
//     });
//
//     $(".dragbox")
//         .mousedown(function () {
//             $(this).addClass("draggingbox");
//         })
//         .mouseup(function () {
//             $(this).removeClass("draggingbox");
//         });
//
//     $(".dragbox").draggable();
//
//     $(".dropbox").droppable({
//         classes: {
//             "ui-droppable-hover": "hoveringbox"
//         },
//
//         over: function (event, ui) {
//             var p = $(this);
//             currentBox = p.index() + 1;
//             $(".dragbox p").text(currentBox);
//         },
//
//         drop: function (event, ui) {
//             magnetSnap(40);
//         }
//     });
// });
