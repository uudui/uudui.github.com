def wicked_pdf_stylesheet_link_tag(*sources)
  css_dir = Rails.root.join('public','stylesheets')
  sources.collect { |source|
    "<style type='text/css'>#{File.read(css_dir.join(source+'.css'))}</style>"
  }.join("\n").html_safe
end