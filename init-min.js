$(document).ready(function(){$("[data-goto]").on("click",function(a){var e=$(this).data("goto");isNaN(e)?($(".message[data-message="+e+"]").addClass("is-open"),$(".keuzewijzer").addClass("is-disabled")):$(".keuzewijzer").css("transform","translateX(-"+10*(e-1)+"%)"),a.preventDefault()})});