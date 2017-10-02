$( "li" )
    .filter(function( index ) {
        return $( ".age", this ).length === 1;
    })

$('li.active').on('mouseenter', function() {
    $(this).superslides('stop');
});
$('li.active').on('mouseleave', function() {
    $(this).superslides('start');
});