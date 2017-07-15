/** 
 * Nested Links - Jquery edition
 * Enables nested category archive links to still be clickable
 * @author Stephen Scaff
 */
 /*jshint -W030*/

(function($) {
  var nestedLinks = { 

    init: function() {
      this.buildLink();
    },

    buildLink: function(){
      $("[data-nested-link]").on("click", function(e) {
        var $this, $nestedLink;
        $this = $(this), 
        $nestedLink = $this.data("nested-link"), 
        $nestedLink && (e.preventDefault(),
          e.stopPropagation(), 
          window.open && e.metaKey ?
          window.open($nestedLink, "_blank") : 
          window.location.assign($nestedLink)
        );
      });
    },
  };
  nestedLinks.init();
})(jQuery);