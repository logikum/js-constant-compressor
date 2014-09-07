/**
 * Registry of view names.
 */
var VIEWS = {
  Home: 'home.html',
  About: 'about.html',
  NotFound: 'not-found.html',
  Account: {
    Home: "account/index.html",
    Login: 'account/login.html',
    Register: 'account/register.html',
    ConfirmRegistration: 'account/confirm-registration.html',
    ForgottenPassword: 'account/forgotten-password.html',
    NewPassword: 'account/new-password.html',
    Edit: 'account/edit.html',
    ChangePassword: 'account/change-password.html',
    ChangeEmail: 'account/change-email.html',
    ConfirmEmail: 'account/confirm-email.html'
  },
  Beer: {
    Home: 'beers/index.html',
    Search: 'beers/search.html',
    Show: 'beers/show.html'
  },
  Brewery: {
    Home: 'breweries/index.html',
    Search: 'breweries/search.html',
    Show: 'breweries/show.html'
  },
  Dashboard: {
    Home: 'dashboard/index.html',
    MailerTest: 'dashboard/mailer-test.html',
    ModelDefinitions: 'dashboard/model-definitions.html',
    SystemInfo: 'dashboard/system-info.html',
    Malt: {
      List: 'dashboard/malts/index.html',
      Create: 'dashboard/malts/create.html',
      Show: 'dashboard/malts/show.html',
      Edit: 'dashboard/malts/edit.html',
      Delete: 'dashboard/malts/delete.html',
      ImageUpload: 'dashboard/malts/image-upload.html',
      ImageShow: 'dashboard/malts/image-show.html',
      ImageEdit: 'dashboard/malts/image-edit.html',
      ImageDelete: 'dashboard/malts/image-delete.html'
    },
    Yeast: {
      List: 'dashboard/yeasts/index.html',
      Create: 'dashboard/yeasts/create.html',
      Show: 'dashboard/yeasts/show.html',
      Edit: 'dashboard/yeasts/edit.html',
      Delete: 'dashboard/yeasts/delete.html',
      ImageUpload: 'dashboard/yeasts/image-upload.html',
      ImageShow: 'dashboard/yeasts/image-show.html',
      ImageEdit: 'dashboard/yeasts/image-edit.html',
      ImageDelete: 'dashboard/yeasts/image-delete.html'
    },
    Hop: {
      List: 'dashboard/hops/index.html',
      Create: 'dashboard/hops/create.html',
      Show: 'dashboard/hops/show.html',
      Edit: 'dashboard/hops/edit.html',
      Delete: 'dashboard/hops/delete.html',
      ImageUpload: 'dashboard/hops/image-upload.html',
      ImageShow: 'dashboard/hops/image-show.html',
      ImageEdit: 'dashboard/hops/image-edit.html',
      ImageDelete: 'dashboard/hops/image-delete.html'
    },
    Region: {
      List: 'dashboard/regions/index.html',
      Create: 'dashboard/regions/create.html',
      Show: 'dashboard/regions/show.html',
      Edit: 'dashboard/regions/edit.html',
      Delete: 'dashboard/regions/delete.html',
      CountryCreate: 'dashboard/regions/country-create.html',
      CountryShow: 'dashboard/regions/country-show.html',
      CountryEdit: 'dashboard/regions/country-edit.html',
      CountryDelete: 'dashboard/regions/country-delete.html',
      ProvinceCreate: 'dashboard/regions/province-create.html',
      ProvinceShow: 'dashboard/regions/province-show.html',
      ProvinceEdit: 'dashboard/regions/province-edit.html',
      ProvinceDelete: 'dashboard/regions/province-delete.html'
    },
    BeerType: {
      List: 'dashboard/beer-types/index.html',
      Create: 'dashboard/beer-types/create.html',
      Show: 'dashboard/beer-types/show.html',
      Edit: 'dashboard/beer-types/edit.html',
      Delete: 'dashboard/beer-types/delete.html'
    },
    Brewery: {
      List: 'dashboard/breweries/index.html',
      Create: 'dashboard/breweries/create.html',
      Show: 'dashboard/breweries/show.html',
      Edit: 'dashboard/breweries/edit.html',
      Delete: 'dashboard/breweries/delete.html',
      ImageUpload: 'dashboard/breweries/image-upload.html',
      ImageShow: 'dashboard/breweries/image-show.html',
      ImageEdit: 'dashboard/breweries/image-edit.html',
      ImageDelete: 'dashboard/breweries/image-delete.html',
      Logo: 'dashboard/breweries/logo.html',
      LogoDelete: 'dashboard/breweries/logo-delete.html'
    },
    Beer: {
      List: 'dashboard/beers/index.html',
      Create: 'dashboard/beers/create.html',
      Show: 'dashboard/beers/show.html',
      Edit: 'dashboard/beers/edit.html',
      Delete: 'dashboard/beers/delete.html',
      ImageUpload: 'dashboard/beers/image-upload.html',
      ImageShow: 'dashboard/beers/image-show.html',
      ImageEdit: 'dashboard/beers/image-edit.html',
      ImageDelete: 'dashboard/beers/image-delete.html',
      Label: 'dashboard/beers/label.html',
      LabelDelete: 'dashboard/beers/label-delete.html'
    },
    User: {
      List: 'dashboard/users/index.html',
      Create: 'dashboard/users/create.html',
      Show: 'dashboard/users/show.html',
      Edit: 'dashboard/users/edit.html',
      Delete: 'dashboard/users/delete.html',
      Photo: 'dashboard/users/photo.html',
      PhotoDelete: 'dashboard/users/photo-delete.html'
    }
  },
  Shared: {
    ChooseRegion: 'shared/choose-region.html',
    ChooseBrewery: 'shared/choose-brewery.html',
    ChooseBeerType: 'shared/choose-beer-type.html',
    ChooseMalts: 'shared/choose-malts.html',
    ChooseYeasts: 'shared/choose-yeasts.html',
    ChooseHops: 'shared/choose-hops.html'
  },
  Directives: {
    AccountToolbar: 'directives/account-toolbar.html',
    SearchToolbar: 'directives/search-toolbar.html',
    Storage: {
      ImageOnly: 'directives/storage/image-only.html',
      ImageLink: 'directives/storage/image-link.html'
    }
  }
};
