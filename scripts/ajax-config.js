$.ajaxPrefilter(function(options, originalOptions, jqXHR){
 if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = '3bGzEffsoyFE853UfNwg9n7fGfd3LNtxOpELMUfD';
    options.headers['X-Parse-REST-API-Key'] = 'XdsAD7pOBsvmd9OD2AjUjskMdgrWBdAMH1CSSO5l';
  }
});
