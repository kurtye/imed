angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.drugstore', {
    url: '/farmacias',
    views: {
      'tab1': {
        templateUrl: 'templates/drugstore.html',
        controller: 'drugstoreCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.products'
      2) Using $state.go programatically:
        $state.go('tabsController.products');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/produtos
      /page1/tab2/produtos
  */
  .state('tabsController.products', {
    url: '/produtos',
    views: {
      'tab1': {
        templateUrl: 'templates/products.html',
        controller: 'productsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/products.html',
        controller: 'productsCtrl'
      }
    }
  })

  .state('buy', {
    url: '/buy',
    templateUrl: 'templates/buy.html',
    controller: 'buyCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.leafletMedication'
      2) Using $state.go programatically:
        $state.go('tabsController.leafletMedication');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/leafletmedication
      /page1/tab2/leafletmedication
      /page1/tab3/leafletmedication
  */
  .state('tabsController.leafletMedication', {
    url: '/leafletmedication',
    views: {
      'tab1': {
        templateUrl: 'templates/leafletMedication.html',
        controller: 'leafletMedicationCtrl'
      },
      'tab2': {
        templateUrl: 'templates/leafletMedication.html',
        controller: 'leafletMedicationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/leafletMedication.html',
        controller: 'leafletMedicationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.profileProduct'
      2) Using $state.go programatically:
        $state.go('tabsController.profileProduct');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/profileProduct
      /page1/tab2/profileProduct
  */
  .state('tabsController.profileProduct', {
    url: '/profileProduct',
    views: {
      'tab1': {
        templateUrl: 'templates/profileProduct.html',
        controller: 'profileProductCtrl'
      },
      'tab2': {
        templateUrl: 'templates/profileProduct.html',
        controller: 'profileProductCtrl'
      }
    }
  })

  .state('tabsController.doctorAdvice', {
    url: '/doctorAdvice',
    views: {
      'tab4': {
        templateUrl: 'templates/doctorAdvice.html',
        controller: 'doctorAdviceCtrl'
      }
    }
  })

  .state('cart', {
    url: '/cart',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('tabsController.calendar', {
    url: '/calendar',
    views: {
      'tab5': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

$urlRouterProvider.otherwise('/login')


});