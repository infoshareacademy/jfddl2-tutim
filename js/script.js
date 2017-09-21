$( "li" )
    .filter(function( index ) {
        return $( ".age", this ).length === 1;
    })