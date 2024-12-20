$(window).on('scroll', function () {
    const $links = $('.right-tabs a');
  
    // Calculate scroll percentage
    const scrollTop = $(window).scrollTop();
    const docHeight = $(document).height() - $(window).height();
    const scrollPercent = (scrollTop / docHeight) * 100;
  
    // Determine the active link based on scroll percentage
    const totalLinks = $links.length;
    const range = 100 / totalLinks; // Percentage range for each link
  
    $links.each(function (index) {
        // Reset all links
        $(this).css('text-decoration', 'none');
    
        // Apply underline to the active link
        if (scrollPercent >= index * range && scrollPercent < (index + 1) * range) {
          $(this).css('text-decoration', 'underline');
        }
      });
  });
  
  