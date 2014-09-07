/**
 * Registry of view URLs.
 */
var URLS = {
  Root: '/',
  Home: '/home',
  About: '/about',
  NotFound: '/not-found',
  Account: {
    Home: '/account',
    Register: '/account/register',
    ConfirmRegistration: '/account/confirm-registration/:code/:token',
    ForgottenPassword: '/account/forgotten-password',
    NewPassword: '/account/new-password/:code/:token',
    Edit: '/account/edit',
    ChangePassword: '/account/change-password',
    ChangeEmail: '/account/change-email',
    ConfirmEmail: '/account/confirm-email/:code/:token'
  },
  Beer: {
    Home: '/beers',
    Search: '/beers/search',
    Show: '/beers/:key'
  },
  Brewery: {
    Home: '/breweries',
    Search: '/breweries/search',
    Show: '/breweries/:key'
  },
  Dashboard: {
    Home: '/dashboard',
    MailerTest: '/dashboard/mailer-test',
    ModelDefinitions: '/dashboard/model-definitions',
    SystemInfo: '/dashboard/system-info',
    Malt: {
      List: '/dashboard/malts',
      Create: '/dashboard/malts/create',
      Show: '/dashboard/malts/:key',
      Edit: '/dashboard/malts/:key/edit',
      ImageUpload: '/dashboard/malts/:key/images',
      ImageShow: '/dashboard/malts/:key/images/:key2',
      ImageEdit: '/dashboard/malts/:key/images/:key2/edit'
    },
    Yeast: {
      List: '/dashboard/yeasts',
      Create: '/dashboard/yeasts/create',
      Show: '/dashboard/yeasts/:key',
      Edit: '/dashboard/yeasts/:key/edit',
      ImageUpload: '/dashboard/yeasts/:key/images',
      ImageShow: '/dashboard/yeasts/:key/images/:key2',
      ImageEdit: '/dashboard/yeasts/:key/images/:key2/edit'
    },
    Hop: {
      List: '/dashboard/hops',
      Create: '/dashboard/hops/create',
      Show: '/dashboard/hops/:key',
      Edit: '/dashboard/hops/:key/edit',
      ImageUpload: '/dashboard/hops/:key/images',
      ImageShow: '/dashboard/hops/:key/images/:key2',
      ImageEdit: '/dashboard/hops/:key/images/:key2/edit'
    },
    Region: {
      List: '/dashboard/regions',
      Create: '/dashboard/regions/create',
      Show: '/dashboard/regions/:key',
      Edit: '/dashboard/regions/:key/edit',
      CountryCreate: '/dashboard/regions/:key/countries',
      CountryShow: '/dashboard/regions/:key/countries/:key2',
      CountryEdit: '/dashboard/regions/:key/countries/:key2/edit',
      ProvinceCreate: '/dashboard/regions/:key/countries/:key2/provinces',
      ProvinceShow: '/dashboard/regions/:key/countries/:key2/provinces/:key3',
      ProvinceEdit: '/dashboard/regions/:key/countries/:key2/provinces/:key3/edit'
    },
    BeerType: {
      List: '/dashboard/beer-types',
      Create: '/dashboard/beer-types/create',
      Show: '/dashboard/beer-types/:key',
      Edit: '/dashboard/beer-types/:key/edit'
    },
    Brewery: {
      List: '/dashboard/breweries',
      Create: '/dashboard/breweries/create',
      Show: '/dashboard/breweries/:key',
      Edit: '/dashboard/breweries/:key/edit',
      ImageUpload: '/dashboard/breweries/:key/images',
      ImageShow: '/dashboard/breweries/:key/images/:key2',
      ImageEdit: '/dashboard/breweries/:key/images/:key2/edit',
      Logo: '/dashboard/breweries/:key/logo'
    },
    Beer: {
      List: '/dashboard/beers',
      Create: '/dashboard/beers/create',
      Show: '/dashboard/beers/:key',
      Edit: '/dashboard/beers/:key/edit',
      ImageUpload: '/dashboard/beers/:key/images',
      ImageShow: '/dashboard/beers/:key/images/:key2',
      ImageEdit: '/dashboard/beers/:key/images/:key2/edit',
      Label: '/dashboard/beers/:key/label'
    },
    User: {
      List: '/dashboard/users',
      Create: '/dashboard/users/create',
      Show: '/dashboard/users/:key',
      Edit: '/dashboard/users/:key/edit',
      Photo: '/dashboard/users/:key/photo'
    }
  }
};
