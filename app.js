(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("app.js", function(exports, require, module) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _reactRouterDom = require('react-router-dom');

var _Home = require('./src/Framework/ReactRoutes/Home');

var _Home2 = _interopRequireDefault(_Home);

var _About = require('./src/Framework/ReactRoutes/About');

var _About2 = _interopRequireDefault(_About);

var _Contact = require('./src/Framework/ReactRoutes/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _project = require('./src/Framework/ReactRoutes/Home/project.js');

var _project2 = _interopRequireDefault(_project);

var _Navigation = require('./src/Framework/Components/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'page' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '' },
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              'logo'
            )
          ),
          _react2.default.createElement(_Navigation2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { key: 'home', exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { key: 'about', exact: true, path: '/About', component: _About2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { key: 'contact', exact: true, path: '/Contact', component: _Contact2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { key: 'project', exact: true, path: '/project/:id', component: _project2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

});

require.register("src/Framework/Components/Hero/hero.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = Hero;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hero() {
        return _react2.default.createElement(
                "div",
                { className: "hero" },
                _react2.default.createElement("img", { className: "hero__image", src: "http://unsplash.it/2000/2000?image=902" }),
                _react2.default.createElement(
                        "h1",
                        { className: "hero__title" },
                        "Hero title goes here"
                )
        );
}

});

;require.register("src/Framework/Components/Image-Gallery/imagegallery.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { className: "image-gallery" },
    _react2.default.createElement(
      "div",
      { className: "image-gallery__item" },
      _react2.default.createElement("img", { className: "minimal-info__image", src: "http://unsplash.it/800/800?image=777" })
    ),
    _react2.default.createElement(
      "div",
      { className: "image-gallery__item" },
      _react2.default.createElement("img", { className: "minimal-info__image", src: "http://unsplash.it/800/800?image=777" })
    ),
    _react2.default.createElement(
      "div",
      { className: "image-gallery__item" },
      _react2.default.createElement("img", { className: "minimal-info__image", src: "http://unsplash.it/800/800?image=777" })
    ),
    _react2.default.createElement(
      "div",
      { className: "image-gallery__item" },
      _react2.default.createElement("img", { className: "minimal-info__image", src: "http://unsplash.it/800/800?image=777" })
    ),
    _react2.default.createElement(
      "div",
      { className: "image-gallery__item" },
      _react2.default.createElement("img", { className: "minimal-info__image", src: "http://unsplash.it/800/800?image=777" })
    ),
    _react2.default.createElement(
      "div",
      { className: "image-gallery__item" },
      _react2.default.createElement("img", { className: "minimal-info__image", src: "http://unsplash.it/800/800?image=777" })
    ),
    _react2.default.createElement(
      "div",
      { className: "image-gallery__item" },
      _react2.default.createElement("img", { className: "minimal-info__image", src: "http://unsplash.it/800/800?image=777" })
    ),
    _react2.default.createElement(
      "div",
      { className: "image-gallery__item" },
      _react2.default.createElement("img", { className: "minimal-info__image", src: "http://unsplash.it/800/800?image=777" })
    ),
    _react2.default.createElement(
      "div",
      { className: "image-gallery__item" },
      _react2.default.createElement("img", { className: "minimal-info__image", src: "http://unsplash.it/800/800?image=777" })
    )
  );
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

});

;require.register("src/Framework/Components/Navigation/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _deepcopy = require('deepcopy');

var _deepcopy2 = _interopRequireDefault(_deepcopy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.toggleActive = function (isActive) {
      var state = (0, _deepcopy2.default)(_this.state);
      state.active = isActive === true || isActive === false ? isActive : !_this.state.active;
      state.menuClasses = ['navigation__menu', state.active ? 'navigation__menu--active' : ''];
      _this.setState(state);
    };

    _this.state = {
      active: false,
      menuClasses: []
    };

    _this.toggleActive = _this.toggleActive.bind(_this);
    return _this;
  }

  _createClass(Navigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.toggleActive(false);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'navigation' },
        _react2.default.createElement(
          'div',
          { className: 'navigation__hamburger', onClick: this.toggleActive },
          _react2.default.createElement(
            'div',
            { className: 'hamburger' },
            _react2.default.createElement('div', { className: 'hamburger__bar' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this.state.menuClasses.join(' ') },
          _react2.default.createElement(
            'ul',
            { className: 'menu' },
            _react2.default.createElement(
              'li',
              { className: 'menu__item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'menu__link', to: '/' },
                'Projects'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'menu__item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'menu__link', to: '/about' },
                'About'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'menu__item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'menu__link', to: '/contact' },
                'Contact'
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = Navigation;

});

require.register("src/Framework/ReactRoutes/About/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutPage = function AboutPage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _CSSTransitionGroup2.default,
      {
        transitionName: 'example',
        transitionAppear: true,
        transitionAppearTimeout: 500,
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 300 },
      _react2.default.createElement(
        'div',
        null,
        'ABout Page'
      )
    )
  );
};

exports.default = AboutPage;

});

require.register("src/Framework/ReactRoutes/Contact/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactPage = function ContactPage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _CSSTransitionGroup2.default,
      {
        transitionName: 'example',
        transitionAppear: true,
        transitionAppearTimeout: 500,
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 300 },
      _react2.default.createElement(
        'div',
        null,
        'Contact Page'
      )
    )
  );
};

exports.default = ContactPage;

});

require.register("src/Framework/ReactRoutes/Home/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectsRoute = function (_Component) {
    _inherits(ProjectsRoute, _Component);

    function ProjectsRoute(props) {
        _classCallCheck(this, ProjectsRoute);

        var _this = _possibleConstructorReturn(this, (ProjectsRoute.__proto__ || Object.getPrototypeOf(ProjectsRoute)).call(this, props));

        _this.state = {
            work: [{
                title: 'Barrio Viejo',
                description: 'The best food places in Barcelona were in Borne',
                client: 'Kapacucca',
                image: 'https://8kueag.dm2301.livefilestore.com/y4mHUoTDVS4H9kf3kkbq0x13vqmuGxH1v_C5fqx4LfUAD_1ZWKgupMMd5TNHEbj7OhjcimM263tcPFbmjyViXi5NZqKdSwSAI4507RdawYVbJ99FfjTDY1az0UOMnLCXvQzWWkE9hBWYubmJiDKkko9l6JLe_hf02xZ8dLVgx_18CJ8vbNGlJAQCYt5TY3gEOBeHJiJHeJJbtzYO-N9j_b-2Q?width=1024&height=683&cropmode=none'
            }, {
                title: 'The End of Year Convention',
                description: 'A little mini description describing the project',
                client: 'Client name',
                image: 'https://kcqzgq.dm2301.livefilestore.com/y4m8AT1Mc-IHtm5iUVPHMcChcfn0RgeIdj3JLAUEfrkK8wLYY3dr105XbM309D06MmLJUyj2HGHtDeqTcja8wo7LhA77JxLfSyjzGpz-jpuvcAjag-itw0b7F6fsaM1B3gjSmkJt0vbwYK4KyFrYDPWcrzV7n_uJg-0Kjy2gRqe1RHMduAuVrfh4KLeMX9q0byokxb-wZ4ibsHkKuOrMdMk4A?width=1024&height=684&cropmode=none'
            }, {
                title: 'Work Item',
                description: 'A little mini description describing the project',
                client: 'Client name',

                image: 'https://6v6pmg.dm2301.livefilestore.com/y4mto6Pt5AseMQjB3H8S6HzSNeFJMg1URIutbUnay5dvsGZT4LP2as8zRdi-qQUTtrHaT9GV7v1-nismiT6-5Gf5aREFoTO4-7McFG3kMUJUPMh3-bXwPArEk5n73MabmMJiekQG7IFe3tXGzcPfu15vgLBVtfkBeVvEEQmpK27_S4T6AKI1rtw7Gd9gRBVhQkr0AXXJhg_RxIxQs6e43PMUw?width=4576&height=3056&cropmode=none'
            }]
        };
        return _this;
    }

    _createClass(ProjectsRoute, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _CSSTransitionGroup2.default,
                    {
                        transitionName: 'example',
                        transitionAppear: true,
                        transitionAppearTimeout: 500,
                        transitionEnterTimeout: 500,
                        transitionLeaveTimeout: 300 },
                    _react2.default.createElement(
                        'div',
                        { className: 'projects' },
                        this.state.work.map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: index, className: 'projects__item' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'project' },
                                    _react2.default.createElement('img', { className: 'project__image', src: item.image }),
                                    _react2.default.createElement(
                                        'h2',
                                        { className: 'project__title' },
                                        item.title
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'project__blurb' },
                                        item.description,
                                        ' ',
                                        index
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'project__subtitle' },
                                        item.client
                                    ),
                                    _react2.default.createElement(_reactRouterDom.Link, { to: '/project/' + index, className: 'project__link' })
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return ProjectsRoute;
}(_react.Component);

exports.default = ProjectsRoute;

});

require.register("src/Framework/ReactRoutes/Home/project.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hero = require('../../Components/Hero/hero.js');

var _hero2 = _interopRequireDefault(_hero);

var _imagegallery = require('../../Components/Image-Gallery/imagegallery.js');

var _imagegallery2 = _interopRequireDefault(_imagegallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Project = function Project() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_hero2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'prj-summary' },
      _react2.default.createElement(
        'div',
        { className: 'prj-summary__lead' },
        _react2.default.createElement(
          'span',
          { className: 'prj-summary__lead-text' },
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur'
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: 'prj-summary__meta' },
        _react2.default.createElement(
          'li',
          { className: 'prj-summary__meta-item' },
          _react2.default.createElement(
            'h2',
            { className: 'prj-summary__meta-title' },
            'Awards & Titles'
          ),
          _react2.default.createElement(
            'p',
            { className: 'prj-summary__meta-text' },
            'ABC, EFG, LMNOP'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'prj-summary__meta-item' },
          _react2.default.createElement(
            'h2',
            { className: 'prj-summary__meta-title' },
            'Shoutouts'
          ),
          _react2.default.createElement(
            'p',
            { className: 'prj-summary__meta-text' },
            'Tom, John and Luke'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'prj-summary__meta-item' },
          _react2.default.createElement(
            'h2',
            { className: 'prj-summary__meta-title' },
            'Visit Client'
          ),
          _react2.default.createElement(
            'p',
            { className: 'prj-summary__meta-text' },
            'www.abc.com'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'prj-minimal-info' },
      _react2.default.createElement(
        'div',
        { className: 'prj-minimal-info__text' },
        _react2.default.createElement(
          'div',
          { className: 'prj-minimal-info__text-title' },
          'Contextual'
        ),
        _react2.default.createElement(
          'div',
          { className: 'prj-minimal-info__text-content' },
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'prj-minimal-info__main-image-wrapper' },
        _react2.default.createElement('img', { className: 'prj-minimal-info__image', src: 'http://unsplash.it/800/800?image=937' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'prj-minimal-info__small-image-wrapper' },
        _react2.default.createElement('img', { className: 'prj-minimal-info__image', src: 'http://unsplash.it/800/800?image=237' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'prj-typography' },
      _react2.default.createElement(
        'div',
        { className: 'prj-typography__item' },
        _react2.default.createElement(
          'h3',
          { className: 'prj-typography__item-header' },
          'Heading'
        ),
        _react2.default.createElement(
          'span',
          { className: 'prj-typography__item-sub-header' },
          'Roboto'
        ),
        _react2.default.createElement(
          'div',
          { className: 'prj-typography__item-example' },
          'Image goes here'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'prj-typography__item' },
        _react2.default.createElement(
          'h3',
          { className: 'prj-typography__item-header' },
          'Heading'
        ),
        _react2.default.createElement(
          'span',
          { className: 'prj-typography__item-sub-header' },
          'Roboto'
        ),
        _react2.default.createElement(
          'div',
          { className: 'prj-typography__item-example' },
          'Image goes here'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'prj-typography__item' },
        _react2.default.createElement(
          'h3',
          { className: 'prj-typography__item-header' },
          'Heading'
        ),
        _react2.default.createElement(
          'span',
          { className: 'prj-typography__item-sub-header' },
          'Roboto'
        ),
        _react2.default.createElement(
          'div',
          { className: 'prj-typography__item-example' },
          'Image goes here'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'palette-section' },
      _react2.default.createElement(
        'div',
        { className: 'palette-section__blurb' },
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
      ),
      _react2.default.createElement(
        'div',
        { className: 'palette-section__color-board' },
        _react2.default.createElement(
          'ul',
          { className: 'color-board' },
          _react2.default.createElement(
            'li',
            { className: 'color-board__item' },
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-name' },
              'Super green'
            ),
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-color' },
              '#123131'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'color-board__item' },
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-name' },
              'Super green'
            ),
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-color' },
              '#123131'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'color-board__item' },
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-name' },
              'Super green'
            ),
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-color' },
              '#123131'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'color-board__item' },
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-name' },
              'Super green'
            ),
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-color' },
              '#123131'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'color-board__item' },
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-name' },
              'Super green'
            ),
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-color' },
              '#123131'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'color-board__item' },
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-name' },
              'Super green'
            ),
            _react2.default.createElement(
              'span',
              { className: 'color-board__item-color' },
              '#123131'
            )
          )
        )
      )
    ),
    _react2.default.createElement(_hero2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'prj-minimal-info' },
      _react2.default.createElement(
        'div',
        { className: 'prj-minimal-info__text' },
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur'
      ),
      _react2.default.createElement(
        'div',
        { className: 'prj-minimal-info__main-image-wrapper' },
        _react2.default.createElement('img', { className: 'prj-minimal-info__image', src: 'http://unsplash.it/800/800?image=937' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'prj-minimal-info__small-image-wrapper' },
        _react2.default.createElement('img', { className: 'prj-minimal-info__image', src: 'http://unsplash.it/800/800?image=937' })
      )
    ),
    _react2.default.createElement(_imagegallery2.default, null),
    _react2.default.createElement(_hero2.default, null)
  );
};

exports.default = Project;

});

require.alias("buffer/index.js", "buffer");
require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map