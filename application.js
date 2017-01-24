var form = $('#search-film'),
    search_field = $('#search-film-input'),
    results = $('#results');

form.on('submit', function(e) {
  e.preventDefault();

  var url_search = 'http://www.omdbapi.com/?s=' + search_field.val();
  $.get(url_search, function(response) {
    results.empty();
    $.each(response.Search, function(index, item) {
      $('<div />')
        .append($('<h4 />').html(item.Title))
        .append($('<img />').attr('src', item.Poster))
        .append($('<hr />'))
        .appendTo(results);
      $('body').addClass('search');
    });
  });
});
