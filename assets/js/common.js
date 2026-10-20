$(document).ready(function() {
  // Keep all news accessible without JavaScript; reveal it in batches when enabled.
  document.querySelectorAll('.news[data-page-size]').forEach(function(news) {
    const pageSize = Number(news.dataset.pageSize);
    const rows = Array.from(news.querySelectorAll('tbody tr'));
    const button = news.querySelector('.news-more');
    const status = news.querySelector('.news-status');
    if (!button || !Number.isInteger(pageSize) || pageSize < 1) return;

    let visibleCount = Math.min(pageSize, rows.length);
    function updateNews() {
      rows.forEach(function(row, index) { row.hidden = index >= visibleCount; });
      const remaining = rows.length - visibleCount;
      button.hidden = remaining === 0;
      button.textContent = 'Show ' + Math.min(pageSize, remaining) + ' more';
    }
    updateNews();
    button.addEventListener('click', function() {
      visibleCount = Math.min(visibleCount + pageSize, rows.length);
      updateNews();
      status.textContent = 'Showing ' + visibleCount + ' of ' + rows.length + ' news items.';
    });
  });

  // add toggle functionality to abstract and bibtex buttons
  $('a.abstract').click(function() {
    $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
  });
  $('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
  });
  $('a').removeClass('waves-effect waves-light');

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });
});

