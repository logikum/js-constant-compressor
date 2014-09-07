/**
 * Registry of controller names.
 */
var CONTROLLERS = {
  Main: 'ctrl.main',
  Home: 'ctrl.home',
  About: 'ctrl.about',
  NotFound: 'ctrl.notFound',
  Account: {
    Home: "ctrl.account",
    Login: 'ctrl.account.login',
    Register: 'ctrl.account.register',
    ConfirmRegistration: 'ctrl.account.confirmRegistration',
    ForgottenPassword: 'ctrl.account.forgottenPassword',
    NewPassword: 'ctrl.account.newPassword',
    Edit: 'ctrl.account.edit',
    ChangePassword: 'ctrl.account.changePassword',
    ChangeEmail: 'ctrl.account.changeEmail',
    ConfirmEmail: 'ctrl.account.confirmEmail'
  },
  Beer: {
    Home: 'ctrl.beers',
    Search: 'ctrl.beers.search',
    Show: 'ctrl.beers.show'
  },
  Brewery: {
    Home: 'ctrl.breweries',
    Search: 'ctrl.breweries.search',
    Show: 'ctrl.breweries.show'
  },
  Dashboard: {
    Home: 'ctrl.dashboard',
    MailerTest: 'ctrl.dashboard.mailerTest',
    ModelDefinitions: 'ctrl.dashboard.modelDefinitions',
    SystemInfo: 'ctrl.dashboard.systemInfo',
    Malt: {
      List: 'ctrl.dashboard.malts.index',
      Create: 'ctrl.dashboard.malts.create',
      Show: 'ctrl.dashboard.malts.show',
      Edit: 'ctrl.dashboard.malts.edit',
      Delete: 'ctrl.dashboard.malts.delete',
      ImageUpload: 'ctrl.dashboard.malts.imageUpload',
      ImageShow: 'ctrl.dashboard.malts.imageShow',
      ImageEdit: 'ctrl.dashboard.malts.imageEdit',
      ImageDelete: 'ctrl.dashboard.malts.imageDelete'
    },
    Yeast: {
      List: 'ctrl.dashboard.yeasts.index',
      Create: 'ctrl.dashboard.yeasts.create',
      Show: 'ctrl.dashboard.yeasts.show',
      Edit: 'ctrl.dashboard.yeasts.edit',
      Delete: 'ctrl.dashboard.yeasts.delete',
      ImageUpload: 'ctrl.dashboard.yeasts.imageUpload',
      ImageShow: 'ctrl.dashboard.yeasts.imageShow',
      ImageEdit: 'ctrl.dashboard.yeasts.imageEdit',
      ImageDelete: 'ctrl.dashboard.yeasts.imageDelete'
    },
    Hop: {
      List: 'ctrl.dashboard.hops.index',
      Create: 'ctrl.dashboard.hops.create',
      Show: 'ctrl.dashboard.hops.show',
      Edit: 'ctrl.dashboard.hops.edit',
      Delete: 'ctrl.dashboard.hops.delete',
      ImageUpload: 'ctrl.dashboard.hops.imageUpload',
      ImageShow: 'ctrl.dashboard.hops.imageShow',
      ImageEdit: 'ctrl.dashboard.hops.imageEdit',
      ImageDelete: 'ctrl.dashboard.hops.imageDelete'
    },
    Region: {
      List: 'ctrl.dashboard.regions.index',
      Create: 'ctrl.dashboard.regions.create',
      Show: 'ctrl.dashboard.regions.show',
      Edit: 'ctrl.dashboard.regions.edit',
      Delete: 'ctrl.dashboard.regions.delete',
      CountryCreate: 'ctrl.dashboard.regions.countryCreate',
      CountryShow: 'ctrl.dashboard.regions.countryShow',
      CountryEdit: 'ctrl.dashboard.regions.countryEdit',
      CountryDelete: 'ctrl.dashboard.regions.countryDelete',
      ProvinceCreate: 'ctrl.dashboard.regions.provinceCreate',
      ProvinceShow: 'ctrl.dashboard.regions.provinceShow',
      ProvinceEdit: 'ctrl.dashboard.regions.provinceEdit',
      ProvinceDelete: 'ctrl.dashboard.regions.provinceDelete'
    },
    BeerType: {
      List: 'ctrl.dashboard.beerTypes.index',
      Create: 'ctrl.dashboard.beerTypes.create',
      Show: 'ctrl.dashboard.beerTypes.show',
      Edit: 'ctrl.dashboard.beerTypes.edit',
      Delete: 'ctrl.dashboard.beerTypes.delete'
    },
    Brewery: {
      List: 'ctrl.dashboard.breweries.index',
      Create: 'ctrl.dashboard.breweries.create',
      Show: 'ctrl.dashboard.breweries.show',
      Edit: 'ctrl.dashboard.breweries.edit',
      Delete: 'ctrl.dashboard.breweries.delete',
      ImageUpload: 'ctrl.dashboard.breweries.imageUpload',
      ImageShow: 'ctrl.dashboard.breweries.imageShow',
      ImageEdit: 'ctrl.dashboard.breweries.imageEdit',
      ImageDelete: 'ctrl.dashboard.breweries.imageDelete',
      Logo: 'ctrl.dashboard.breweries.logo',
      LogoDelete: 'ctrl.dashboard.breweries.logoDelete'
    },
    Beer: {
      List: 'ctrl.dashboard.beers.index',
      Create: 'ctrl.dashboard.beers.create',
      Show: 'ctrl.dashboard.beers.show',
      Edit: 'ctrl.dashboard.beers.edit',
      Delete: 'ctrl.dashboard.beers.delete',
      ImageUpload: 'ctrl.dashboard.beers.imageUpload',
      ImageShow: 'ctrl.dashboard.beers.imageShow',
      ImageEdit: 'ctrl.dashboard.beers.imageEdit',
      ImageDelete: 'ctrl.dashboard.beers.imageDelete',
      Label: 'ctrl.dashboard.beers.label',
      LabelDelete: 'ctrl.dashboard.beers.labelDelete'
    },
    User: {
      List: 'ctrl.dashboard.users.index',
      Create: 'ctrl.dashboard.users.create',
      Show: 'ctrl.dashboard.users.show',
      Edit: 'ctrl.dashboard.users.edit',
      Delete: 'ctrl.dashboard.users.delete',
      Photo: 'ctrl.dashboard.users.photo',
      PhotoDelete: 'ctrl.dashboard.users.photoDelete'
    }
  },
  Shared: {
    Header: 'ctrl.shared.header',
    ChooseRegion: 'ctrl.shared.chooseRegion',
    ChooseBrewery: 'ctrl.shared.chooseBrewery',
    ChooseBeerType: 'ctrl.shared.chooseBeerType',
    ChooseMalts: 'ctrl.shared.chooseMalts',
    ChooseYeasts: 'ctrl.shared.chooseYeasts',
    ChooseHops: 'ctrl.shared.chooseHops'
  }
};
