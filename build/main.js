require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const mongoose = __webpack_require__(3)

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  surname: {
    type: String,
    required: [true, 'Los apellidos son obligatios']
  },
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  }],
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  pvLvl: {
    type: Number,
    default: 0
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
})

class MemberClass {}

schema.loadClass(MemberClass)

let membersModel = mongoose.model('Member', schema)

/* harmony default export */ __webpack_exports__["a"] = (membersModel);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const errorCodes = {
  OK: 200,
  CREATED: 201,
  INTERNAL_ERROR: 500,
  UPDATED: 260,
  NOT_FOUND: 404
}

/* harmony default export */ __webpack_exports__["a"] = (errorCodes);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pipe;
function pipe (theObject, execFN) {
  function through (conditionsWithFNS) {
    for (let i = 0; i < conditionsWithFNS.length; i++) {
      let [condition, fn] = conditionsWithFNS[i]
      if (condition) theObject = fn(theObject)
      if (condition && theObject === undefined) {
        throw new Error('No function can return undefined')
      }
    }
  }


  const retrieve = () => theObject
  const fns = {through, retrieve}

  return execFN.bind(fns)()
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = recoverUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(6);

const jwtSimple = __webpack_require__(23)

const decode = (token) => jwtSimple.decode(token, __WEBPACK_IMPORTED_MODULE_0__settings__["f" /* secret */])
/* unused harmony export decode */

const encode = (objectUser) => jwtSimple.encode(objectUser, __WEBPACK_IMPORTED_MODULE_0__settings__["f" /* secret */])
/* harmony export (immutable) */ __webpack_exports__["a"] = encode;


function recoverUser (req, res, next) {
  const userToken = req.headers[__WEBPACK_IMPORTED_MODULE_0__settings__["g" /* userTokenKey */]] || req.query.token
  if (userToken) {
    try {
      req.user = decode(userToken)
      req.loginLvl = {
        isAdmin: req.user.pvLvl >= __WEBPACK_IMPORTED_MODULE_0__settings__["c" /* LEVELS */].isAdmin,
        isVocal: req.user.pvLvl >= __WEBPACK_IMPORTED_MODULE_0__settings__["c" /* LEVELS */].isVocal,
        isPartner: req.user.pvLvl >= __WEBPACK_IMPORTED_MODULE_0__settings__["c" /* LEVELS */].isPartner
      }
    } catch (error) {
    } finally {
      next()
    }
  } else next()
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const developing = "development" !== 'production'

const dbs = {
  test: 'mongodb://localhost/adifiatest',
  prod: 'mongodb://localhost/adifia'
}

const PORT = process.env.PORT || 3000
/* harmony export (immutable) */ __webpack_exports__["d"] = PORT;

const HOST = process.env.HOST || 'localhost'
/* harmony export (immutable) */ __webpack_exports__["b"] = HOST;

const DB = developing ? dbs.test : dbs.prod
/* harmony export (immutable) */ __webpack_exports__["a"] = DB;


const ROLS = ['Socio', 'Vocal', 'Secretario', 'Tesorero', 'Presidente']
/* harmony export (immutable) */ __webpack_exports__["e"] = ROLS;


const LEVELS = (function () {
  const levels = {}
  for (let rolIndex = 0; rolIndex < ROLS.length; rolIndex++) {
    const rol = ROLS[rolIndex]
    levels[rol] = rolIndex
  }
  return levels
})()
/* harmony export (immutable) */ __webpack_exports__["c"] = LEVELS;


const secret = ':q91dMHPT*;"WX^0%ih'
/* harmony export (immutable) */ __webpack_exports__["f"] = secret;

const userTokenKey = 'jwt-user-token'
/* harmony export (immutable) */ __webpack_exports__["g"] = userTokenKey;



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const mongoose = __webpack_require__(3)

let schema = new mongoose.Schema({
  title: {

  },
  body: {

  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  state: {
    type: Number,
    default: 0
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member'
  }
})

class ArticleClass {}

schema.loadClass(ArticleClass)

let articlesModel = mongoose.model('Article', schema)

/* harmony default export */ __webpack_exports__["a"] = (articlesModel);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const mongoose = __webpack_require__(3)

let schema = new mongoose.Schema({

  title: {

  },

  description: {

  },

  location: {

  },

  time: {

  },

  date: {

  },

  story: {

  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  state: {
    type: Number,
    default: 0
  }

})

class EventClass {}

schema.loadClass(EventClass)

let eventsModel = mongoose.model('Event', schema)

/* harmony default export */ __webpack_exports__["a"] = (eventsModel);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api___ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings___ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_properties__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__middlewares__ = __webpack_require__(46);







const mongoose = __webpack_require__(3)

// Config database

mongoose.connect(__WEBPACK_IMPORTED_MODULE_3__settings___["a" /* DB */])

// Config express

// eslint-disable-next-line
for (const functionName in __WEBPACK_IMPORTED_MODULE_4__default_properties__) {
  const fn = __WEBPACK_IMPORTED_MODULE_4__default_properties__[functionName]
  __WEBPACK_IMPORTED_MODULE_0_express___default.a.request.__proto__[functionName] = fn //eslint-disable-line
}

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()()

app.set('port', __WEBPACK_IMPORTED_MODULE_3__settings___["d" /* PORT */])

app.use('/api/*', __WEBPACK_IMPORTED_MODULE_5__middlewares__["a" /* default */])

// Import API Routes
for (const route in __WEBPACK_IMPORTED_MODULE_2__api___["c" /* routes */]) {
  const router = __WEBPACK_IMPORTED_MODULE_2__api___["c" /* routes */][route]
  const finalRoute = '/api' + route
  console.log('estableciendo ' + finalRoute)
  app.use(finalRoute, router)
}

// Import and Set Nuxt.js options
let config = __webpack_require__(47)
config.dev = !("development" === 'production')

// Init Nuxt.js
const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config)

// Build only in dev mode
if (config.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use('/api/*', __WEBPACK_IMPORTED_MODULE_2__api___["b" /* responseJson */], __WEBPACK_IMPORTED_MODULE_2__api___["a" /* logError */])
app.use(nuxt.render)

// Listen the server
app.listen(__WEBPACK_IMPORTED_MODULE_3__settings___["d" /* PORT */], __WEBPACK_IMPORTED_MODULE_3__settings___["b" /* HOST */])
console.log('Server listening on ' + __WEBPACK_IMPORTED_MODULE_3__settings___["b" /* HOST */] + ':' + __WEBPACK_IMPORTED_MODULE_3__settings___["d" /* PORT */]) // eslint-disable-line no-console


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = responseJson;
/* harmony export (immutable) */ __webpack_exports__["a"] = logError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__routes__["a"]; });




function responseJson (req, res) {
  res.status(res.locals.status || 200).json(res.locals)
}

function logError (err, req, res, next) {
  console.log(err.message)
  console.log(err)
  if (!res.locals.status) {
    // console.log('Estableciendo error 500', err)
    res.locals = {
      status: 500,
      message: 'Hubo un error interno'
    }
  }
  res.status(res.locals.status).json(res.locals)
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concepts_members__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__concepts_articles__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__concepts_events__ = __webpack_require__(35);




/* harmony default export */ __webpack_exports__["a"] = ({
  '/members': __WEBPACK_IMPORTED_MODULE_0__concepts_members__["a" /* default */],
  '/articles': __WEBPACK_IMPORTED_MODULE_1__concepts_articles__["a" /* default */],
  '/events': __WEBPACK_IMPORTED_MODULE_2__concepts_events__["a" /* default */]
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */]);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorizations__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_pre__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasks_post__ = __webpack_require__(25);





// tasks




const bodyParser = __webpack_require__(7)

let router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]()

router.post('/login', bodyParser.json(), __WEBPACK_IMPORTED_MODULE_3__services__["a" /* logIn */], __WEBPACK_IMPORTED_MODULE_5__tasks_post__["d" /* logIn */])
router.get('/', __WEBPACK_IMPORTED_MODULE_2__authorizations__["d" /* retrieveAuth */], __WEBPACK_IMPORTED_MODULE_4__tasks_pre__["d" /* retrieve */], __WEBPACK_IMPORTED_MODULE_1__controllers__["d" /* retrieve */], __WEBPACK_IMPORTED_MODULE_5__tasks_post__["e" /* retrieve */])
router.post('/', bodyParser.json(), __WEBPACK_IMPORTED_MODULE_2__authorizations__["a" /* createAuth */], __WEBPACK_IMPORTED_MODULE_4__tasks_pre__["a" /* create */], __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* create */], __WEBPACK_IMPORTED_MODULE_5__tasks_post__["a" /* create */])
router.get('/:id', __WEBPACK_IMPORTED_MODULE_2__authorizations__["c" /* getAuth */], __WEBPACK_IMPORTED_MODULE_4__tasks_pre__["c" /* get */], __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* get */], __WEBPACK_IMPORTED_MODULE_5__tasks_post__["c" /* get */])
router.put('/:id', bodyParser.json(), __WEBPACK_IMPORTED_MODULE_2__authorizations__["e" /* updateAuth */], __WEBPACK_IMPORTED_MODULE_4__tasks_pre__["e" /* update */], __WEBPACK_IMPORTED_MODULE_1__controllers__["e" /* update */], __WEBPACK_IMPORTED_MODULE_5__tasks_post__["f" /* update */])
router.delete('/:id', __WEBPACK_IMPORTED_MODULE_2__authorizations__["b" /* destroyAuth */], __WEBPACK_IMPORTED_MODULE_4__tasks_pre__["b" /* destroy */], __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* destroy */], __WEBPACK_IMPORTED_MODULE_5__tasks_post__["b" /* destroy */])

/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = retrieve;
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["c"] = get;
/* harmony export (immutable) */ __webpack_exports__["e"] = update;
/* harmony export (immutable) */ __webpack_exports__["b"] = destroy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_builder__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prototypes_member__ = __webpack_require__(20);





function retrieve (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const query = Object(__WEBPACK_IMPORTED_MODULE_0__query_builder__["a" /* filterFor */])(req)
  query.exec((err, members) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    let data = {
      members: members.map(member => new __WEBPACK_IMPORTED_MODULE_3__prototypes_member__["a" /* default */](member))
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'Todos los miembros fueron recuperados', data)
    next()
  })
}
function create (req, res, next) {
  const {createGoodResponse, createBadResponse, getMongoDocumentErrors} = req
  let member = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */](req.body)
  member.save((err, memberCreated) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubieron errores en el documento', {errors: getMongoDocumentErrors(err)})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].CREATED, 'El miembro fue creado correctamente', {memberCreated})
    next()
  })
}

function get (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findById(req.params.id, (err, member) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    let data = {
      member: new __WEBPACK_IMPORTED_MODULE_3__prototypes_member__["a" /* default */](member)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El miembro fue recuperado correctamente', data)
    next()
  })
}

function update (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const $set = req.body
  console.log($set)
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findByIdAndUpdate(req.params.id, {$set}, (err, member) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El miembro fue actualizado correctamente', {member})
    next()
  })
}

function destroy (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findByIdAndRemove(req.params.id, (err, member) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El miembro fue eliminado correctamente', {member})
    next()
  })
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filterFor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pipe_objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__filters__);




function buildQuery ({isJustVocal, isAdmin, notPutEvents, user, requestAll}) {
  let query = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */].aggregate()
  query.match({})

  let filters = [
  ]

  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_pipe_objects__["a" /* pipe */])(query, function () {
    this.through(filters)
    return this.retrieve()
  })
}

function filterFor ({query, params, user, loginLvl}) {
  const state = {
  }

  return buildQuery(state)
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Member;
function Member ({name, surname, email, pvLvl, _id}) {
  this.name = name
  this.surname = surname
  this.email = email
  this.pvLvl = pvLvl
  this._id = _id
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const retrieveAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["d"] = retrieveAuth;

const getAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["c"] = getAuth;

const createAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["a"] = createAuth;

const destroyAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["b"] = destroyAuth;

const updateAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["e"] = updateAuth;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = logIn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_user_token__ = __webpack_require__(5);





function logIn (req, res, next) {
  const {createBadResponse} = req
  __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */].findOne({email: req.body.email}, (err, user) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_1__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    if (user === null) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_1__http_codes__["a" /* default */].NOT_FOUND, 'No se encontró el usuario', {errors: ['El email no existe']})
      return next(res.locals)
    }
    console.log(user)
    req.locals = {hash: user.password, user}
    return next()
  })
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("jwt-simple");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return retrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroy; });
/* unused harmony export logIn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_codes__ = __webpack_require__(1);



const bcrypt = __webpack_require__(8)
const saltRounds = 10

function checkIfIsTheFirst (req, res, next) {
  __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */].find({}).exec((err, users) => {
    if (err) {
      console.log(err)
      return next(err)
    }
    if (users.length === 0) {
      req.body.pvLvl = __WEBPACK_IMPORTED_MODULE_1__settings_index__["e" /* ROLS */].length
    }
    next()
  })
}

function signPassword (req, res, next) {
  const {password} = req.body

  if (!req.body.password) return next()

  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
      console.log(err)
      return next(err)
    }
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) {
        console.log(err)
        return next(err)
      }
      req.body.password = hash
      next()
    })
  })
}

function checkIfAnEmailExists (req, res, next) {
  const {createBadResponse} = req
  __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */].findOne({email: req.body.email}).exec((err, user) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    if (user !== null) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubieron errores en el documento', {
        errors: ['El email que has puesto ya existe']
      })
      return next(new Error(res.locals))
    }
    next()
  })
}

function checkIfAnAdminAlreadyExists (req, res, next) {
  const {createBadResponse} = req
  const {pvLvl} = req.body

  if (pvLvl === undefined || pvLvl < 2) return next()
  console.log('Mirando a ver si existe un usuario con el rol', pvLvl)
  __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */].findOne({pvLvl}).exec((err, user) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    if (user !== null) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'No pueden haber dos usuarios con ese rol', {
        errors: ['Ya hay un usuario con ese rol']
      })
      return next(new Error(res.locals))
    }
    console.log('No existe')
    next()
  })
}

const get = []
const create = [checkIfIsTheFirst, checkIfAnEmailExists, checkIfAnAdminAlreadyExists, signPassword]
const update = [checkIfAnAdminAlreadyExists]
const retrieve = []
const destroy = []
const logIn = []




/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return retrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return logIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_codes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prototypes_credentials__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_user_token__ = __webpack_require__(5);





const bcrypt = __webpack_require__(8)

function comparePasswords (req, res, next) {
  const {createBadResponse, createGoodResponse} = req
  const password = req.body.password
  const {hash, user} = req.locals
  bcrypt.compare(password, hash, function (err, result) {
    console.log('\nINFOOOO', result, '\ncomparaciónd econtraseñas')
    console.log(password)
    console.log(hash, '\n\n')
    if (err) {
      console.log(err)
      next(err)
    }
    if (!result) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_0__http_codes__["a" /* default */].NOT_FOUND, 'No se encontró el usuario', {errors: ['La contraseña no es correcta']})
      return next(res.locals)
    }
    let credentials = new __WEBPACK_IMPORTED_MODULE_1__prototypes_credentials__["a" /* default */](user)
    let token = Object(__WEBPACK_IMPORTED_MODULE_2__utils_user_token__["a" /* encode */])(credentials)
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_0__http_codes__["a" /* default */].OK, 'Te has logueado correctamente', {user: credentials, token})
    return next()
  })
}

const get = []
const create = []
const update = []
const retrieve = []
const destroy = []
const logIn = [comparePasswords]




/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Credentials;
function Credentials ({name, surname, email, pvLvl, _id}) {
  this.name = name
  this.surname = surname
  this.email = email
  this.pvLvl = pvLvl
  this._id = _id
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(28);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */]);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorizations__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_pre__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_post__ = __webpack_require__(34);




// tasks




const bodyParser = __webpack_require__(7)

let router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]()

router.get('/', __WEBPACK_IMPORTED_MODULE_2__authorizations__["d" /* retrieveAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["d" /* retrieve */], __WEBPACK_IMPORTED_MODULE_1__controllers__["d" /* retrieve */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["d" /* retrieve */])
router.post('/', bodyParser.json(), __WEBPACK_IMPORTED_MODULE_2__authorizations__["a" /* createAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["a" /* create */], __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* create */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["a" /* create */])
router.get('/:id', __WEBPACK_IMPORTED_MODULE_2__authorizations__["c" /* getAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["c" /* get */], __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* get */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["c" /* get */])
router.put('/:id', bodyParser.json(), __WEBPACK_IMPORTED_MODULE_2__authorizations__["e" /* updateAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["e" /* update */], __WEBPACK_IMPORTED_MODULE_1__controllers__["e" /* update */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["e" /* update */])
router.delete('/:id', __WEBPACK_IMPORTED_MODULE_2__authorizations__["b" /* destroyAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["b" /* destroy */], __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* destroy */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["b" /* destroy */])

/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = retrieve;
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["c"] = get;
/* harmony export (immutable) */ __webpack_exports__["e"] = update;
/* harmony export (immutable) */ __webpack_exports__["b"] = destroy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_builder__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_codes__ = __webpack_require__(1);




function retrieve (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const query = Object(__WEBPACK_IMPORTED_MODULE_0__query_builder__["a" /* filterFor */])(req)
  console.log(query.exec)
  query.sort('-createdAt').exec((err, articles) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'Todos los articles fueron recuperados', {articles})
    next()
  })
}

function create (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  let article = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */](req.body)
  article.save((err, articleCreated) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    req.articleCreated = articleCreated
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].CREATED, 'El Article fue creado correctamente', {articleCreated})
    next()
  })
}

function get (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findById(req.params.id).populate('author', ['name', 'surname']).exec((err, article) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El Article fue recuperado correctamente', {article})
    next()
  })
}

function update (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const $set = req.body
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findByIdAndUpdate(req.params.id, {$set}, (err, article) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El Article fue actualizado correctamente', {article})
    next()
  })
}

function destroy (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findByIdAndRemove(req.params.id, (err, article) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El Article fue eliminado correctamente', {article})
    next()
  })
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filterFor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pipe_objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(31);




function buildQuery ({putOwnArticles, id, putPublishedArticles, putArticlesToModerate}) {
  let query = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */].find()

  let filters = [
    [putOwnArticles, Object(__WEBPACK_IMPORTED_MODULE_2__filters__["a" /* extractArtcilesForAuthorId */])(id)],
    [putPublishedArticles, Object(__WEBPACK_IMPORTED_MODULE_2__filters__["c" /* filterPublishedArticles */])()],
    [putArticlesToModerate, Object(__WEBPACK_IMPORTED_MODULE_2__filters__["b" /* filterArticlesToModerate */])()]
  ]

  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_pipe_objects__["a" /* pipe */])(query, function () {
    this.through(filters)
    return this.retrieve()
  })
}

function filterFor ({query, params, user, loginLvl}) {
  const email = loginLvl && user.email
  const state = {
    putOwnArticles: query.mine && email !== null,
    id: loginLvl && user._id,
    putPublishedArticles: query.state === '2',
    putArticlesToModerate: query.moderating === 'true'
  }

  return buildQuery(state)
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extractArtcilesForAuthorId;
/* harmony export (immutable) */ __webpack_exports__["b"] = filterArticlesToModerate;
/* harmony export (immutable) */ __webpack_exports__["c"] = filterPublishedArticles;
function extractArtcilesForAuthorId (id) {
  return query => query.where('author').equals(id)
}
function filterArticlesToModerate () {
  return query => query.where('state').equals('1')
}
function filterPublishedArticles () {
  return query => query.where('state').equals('2')
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const retrieveAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["d"] = retrieveAuth;

const getAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["c"] = getAuth;

const createAuth = (req, res, next) => next(req.user === null)
/* harmony export (immutable) */ __webpack_exports__["a"] = createAuth;

const destroyAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["b"] = destroyAuth;

const updateAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["e"] = updateAuth;



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return retrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__members_model__ = __webpack_require__(0);

function putAuthor (req, res, next) {
  const {email} = req.user
  __WEBPACK_IMPORTED_MODULE_0__members_model__["a" /* default */].findOne({email}).exec((err, author) => {
    if (err) {
      console.log(err)
      next(err)
    }
    req.author = author
    req.body.author = author
    next()
  })
}

const get = []
const create = [putAuthor]
const update = []
const retrieve = []
const destroy = []




/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return retrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__members_model__ = __webpack_require__(0);

function putArticle (req, res, next) {
  const {email} = req.user

  __WEBPACK_IMPORTED_MODULE_0__members_model__["a" /* default */].findOne({email}, (err, author) => {
    author.articles.push(req.articleCreated)
    if (err) {
      console.log(err)
      return next(err)
    }
    author.save((err, authorWithArticle) => {
      if (err) {
        console.log(err)
        return next(err)
      }
      next()
    })
  })
}

const get = []
const create = [putArticle]
const update = []
const retrieve = []
const destroy = []




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__api__["a" /* default */]);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorizations__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_pre__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_post__ = __webpack_require__(42);




// tasks




const bodyParser = __webpack_require__(7)

let router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]()

router.get('/', __WEBPACK_IMPORTED_MODULE_2__authorizations__["d" /* retrieveAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["d" /* retrieve */], __WEBPACK_IMPORTED_MODULE_1__controllers__["d" /* retrieve */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["d" /* retrieve */])
router.post('/', bodyParser.json(), __WEBPACK_IMPORTED_MODULE_2__authorizations__["a" /* createAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["a" /* create */], __WEBPACK_IMPORTED_MODULE_1__controllers__["a" /* create */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["a" /* create */])
router.get('/:id', __WEBPACK_IMPORTED_MODULE_2__authorizations__["c" /* getAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["c" /* get */], __WEBPACK_IMPORTED_MODULE_1__controllers__["c" /* get */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["c" /* get */])
router.put('/:id', bodyParser.json(), __WEBPACK_IMPORTED_MODULE_2__authorizations__["e" /* updateAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["e" /* update */], __WEBPACK_IMPORTED_MODULE_1__controllers__["e" /* update */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["e" /* update */])
router.delete('/:id', __WEBPACK_IMPORTED_MODULE_2__authorizations__["b" /* destroyAuth */], __WEBPACK_IMPORTED_MODULE_3__tasks_pre__["b" /* destroy */], __WEBPACK_IMPORTED_MODULE_1__controllers__["b" /* destroy */], __WEBPACK_IMPORTED_MODULE_4__tasks_post__["b" /* destroy */])

/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = retrieve;
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["c"] = get;
/* harmony export (immutable) */ __webpack_exports__["e"] = update;
/* harmony export (immutable) */ __webpack_exports__["b"] = destroy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__query_builder__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_codes__ = __webpack_require__(1);




function retrieve (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const query = Object(__WEBPACK_IMPORTED_MODULE_0__query_builder__["a" /* filterFor */])(req)
  query.exec((err, events) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'Todos los events fueron recuperados', {events})
    next()
  })
}

function create (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  let event = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */](req.body)
  event.save((err, eventCreated) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].CREATED, 'El Event fue creado correctamente', {eventCreated})
    next()
  })
}

function get (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findById(req.params.id, (err, event) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El Event fue recuperado correctamente', {event})
    next()
  })
}

function update (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  const $set = req.body
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findByIdAndUpdate(req.params.id, {$set}, (err, event) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El Event fue actualizado correctamente', {event})
    next()
  })
}

function destroy (req, res, next) {
  const {createGoodResponse, createBadResponse} = req
  __WEBPACK_IMPORTED_MODULE_1__model__["a" /* default */].findByIdAndRemove(req.params.id, (err, event) => {
    if (err) {
      res.locals = createBadResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].INTERNAL_ERROR, 'Hubo un error interno', {})
      return next(err)
    }
    res.locals = createGoodResponse(__WEBPACK_IMPORTED_MODULE_2__http_codes__["a" /* default */].OK, 'El Event fue eliminado correctamente', {event})
    next()
  })
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filterFor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pipe_objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(39);




function buildQuery ({filterPublished, sortByDate}) {
  let query = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */].find()

  let filters = [
    [filterPublished, Object(__WEBPACK_IMPORTED_MODULE_2__filters__["a" /* filterForPublished */])()],
    [sortByDate, Object(__WEBPACK_IMPORTED_MODULE_2__filters__["b" /* sortByDateDesc */])()]
  ]

  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_pipe_objects__["a" /* pipe */])(query, function () {
    this.through(filters)
    return this.retrieve()
  })
}

function filterFor ({query, params, user, loginLvl}) {
  console.log(query)
  const state = {
    filterPublished: query.published === 'true',
    sortByDate: true
  }

  return buildQuery(state)
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filterForPublished;
/* harmony export (immutable) */ __webpack_exports__["b"] = sortByDateDesc;
function filterForPublished () {
  return query => query.where('state').equals(1)
}
function sortByDateDesc () {
  return query => query.sort('-createdAt')
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const retrieveAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["d"] = retrieveAuth;

const getAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["c"] = getAuth;

const createAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["a"] = createAuth;

const destroyAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["b"] = destroyAuth;

const updateAuth = (req, res, next) => next(undefined)
/* harmony export (immutable) */ __webpack_exports__["e"] = updateAuth;



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return retrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroy; });
function preTask1 (req, res, next) {
  next()
}

function preTask2 (req, res, next) {
  next()
}

const get = []
const create = []
const update = []
const retrieve = [preTask1, preTask2]
const destroy = []




/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return retrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return destroy; });
function postTask1 (req, res, next) {
  next()
}

function postTask2 (req, res, next) {
  next()
}

const get = []
const create = []
const update = []
const retrieve = [postTask1, postTask2]
const destroy = []




/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_pipe_objects__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_response_maker__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_controller_utils__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipeObjects", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_pipe_objects__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createBadResponse", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_response_maker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createGoodResponse", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_response_maker__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getMongoDocumentErrors", function() { return __WEBPACK_IMPORTED_MODULE_2__utils_controller_utils__["a"]; });







/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBadResponse;
/* harmony export (immutable) */ __webpack_exports__["b"] = createGoodResponse;
function createBadResponse (status, message, items) {
  return {status, message, items}
}
function createGoodResponse (status, message, items) {
  return {status, message, items}
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMongoDocumentErrors;
function getMongoDocumentErrors (error) {
  let errors = error.errors
  let errorsFormatted = []
  for (let i in errors) {
    let error = errors[i].message
    errorsFormatted.push(error)
  }
  return errorsFormatted
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_user_token__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__utils_user_token__["b" /* recoverUser */]]);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/main.scss'
  ],
  plugins: [
    '~/plugins/setup-vue',
    { src: '~/plugins/persistence.js', ssr: false }
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=main.map