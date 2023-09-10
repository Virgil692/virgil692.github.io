 window.$docsify = {
  name: 'MrVirgil的博客',
  repo: 'https://github.com/Virgil692',
  loadNavbar: true,
  loadSidebar: true,
  subMaxLevel: 3,
  coverpage: true,
  search: {
    paths: 'auto',
    placeholder: '搜索',
    noData: '找不到结果',
    depth: 3,
  },
  
  count:{
        countable:true,
        fontsize:'0.9em',
        color:'rgb(90,90,90)',
        language:'chinese'
  },

  themeable: {
          readyTransition : true, // default
          responsiveTables: true  // default
  },

  plugins: [
    function(hook) {
      var footer = [
        '<hr/>',
        '<footer>',
        '<span><a href="https://github.com/Virgil692">MrVirgil</a> &copy;2023.</span>',
        '<span>Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>',
        '</footer>'
      ].join('');

      hook.afterEach(function(html) {
        return html + footer;
      });
    }
  ]
};
