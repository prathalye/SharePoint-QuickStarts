import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'HomepagewebpartWebPartStrings';
import Homepagewebpart from './components/Homepagewebpart';
import { IHomepagewebpartProps } from './components/IHomepagewebpartProps';

export interface IHomepagewebpartWebPartProps {
  description: string;
}

export default class HomepagewebpartWebPart extends BaseClientSideWebPart<IHomepagewebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHomepagewebpartProps > = React.createElement(
      Homepagewebpart,
      {
        description: this.properties.description,
        spClientContext: this.context.spHttpClient
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
