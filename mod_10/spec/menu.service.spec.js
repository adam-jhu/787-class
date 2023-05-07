describe('menuservice', function () {

  var menuservice;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return categories list', function() {
    $httpBackend.whenGET(ApiPath + '/categories.json').respond([{id:1, name: 'Lunch'}, {id:2, name: 'Dessert'}]);
    menuservice.getCategories().then(function(response) {
      //console.log("response.data:", response.data); //service function is already returning response.data so don't do this?
      console.log("response:", response);
      
      expect(response).toEqual([{id:1, name: 'Lunch'}, {id:2, name: 'Dessert'}]);
    });
    $httpBackend.flush();
  });


  it('should return Menu items for one category', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/A.json').respond({ 'category' : {name : 'soup'}, menu_items: [{name: "egg soup"},{name: "wonton soup"}] } );

    menuservice.getMenuItems("A").then(function(response) {
      //console.log("response.data:", response.data); //service function is already returning response.data so don't do this?
      console.log("getMenuItems response:", response);
      
      expect(response).toEqual({ 'category' : {name : 'soup'}, menu_items: [{name: "egg soup"},{name: "wonton soup"}] });
    });
    $httpBackend.flush();
  });


  it('should return single menu item', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/A/menu_items/0.json').respond({name: "orange chicken", short_name: "A0"} );

    menuservice.getSingleMenuItem("A1").then(function(response) {
      //console.log("response.data:", response.data); //service function is already returning response.data so don't do this?
      console.log("getSingleMenuItem response:", response);
      
      expect(response).toEqual({name: "orange chicken", short_name: "A0"});
    });
    $httpBackend.flush();
  });

  
  it('should return null if single menu item does not exist', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/Z/menu_items/99.json').respond(null );

    menuservice.getSingleMenuItem("Z100").then(function(response) {
      //console.log("response.data:", response.data); //service function is already returning response.data so don't do this?
      console.log("getSingleMenuItem response:", response);
      
      expect(response).toEqual(null);
    });
    $httpBackend.flush();
  });


});
