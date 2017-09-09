// libs
import { ConfigService } from '@ngx-config/core';

export class MockConfigService extends ConfigService {
  constructor() {
    super(undefined);

    this.init();
  }

  init(): any {
    this.settings = {
      system: {
        applicationName: 'APP_NAME',
        applicationUrl: 'https://ng-seed-universal.azurewebsites.net'
      },
      seo: {
        defaultPageTitle: 'DEFAULT_TITLE',
        pageTitlePositioning: 10,
        pageTitleSeparator: ' | ',
        defaultMetaDescription: 'DEFAULT_META_DESCRIPTION'
      },
      i18n: {
        defaultLanguage: {
          code: 'en',
          name: 'English',
          culture: 'en-US'
        },
        availableLanguages: [
          {
            code: 'en',
            name: 'English',
            culture: 'en-US'
          }
        ]
      }
    };

    return undefined;
  }
}
