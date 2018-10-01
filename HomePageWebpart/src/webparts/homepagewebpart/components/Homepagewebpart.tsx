import * as React from 'react';
import styles from './Homepagewebpart.module.scss';
import { IHomepagewebpartProps } from './IHomepagewebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { ILinkListItem } from './IListItem';

export class QuickLinks extends React.Component<any, any> {

public render() {
var linklistItems: ILinkListItem[];

linklistItems = JSON.parse(JSON.stringify(this.props.items));

return (
  <div className= {styles.homepagewebpart}>
    <h2>Reading Links List</h2>
    <table>
      {
        linklistItems.map(element => {
          return (
              <tr>
                <td>{element.ID}</td> <td><a href={element.URL.Url}>{element.URL.Description}</a></td>
              </tr>
         )

        })

      }

    </table>
   
  </div>
);
}
}


export default class Homepagewebpart extends React.Component<IHomepagewebpartProps, any> 
{
  constructor(props: IHomepagewebpartProps, any) {
    super();

    this.state = {
      links:[]
    };
  }

  public componentDidMount ()
  {
    this.getLinksListData();
  }

  public render(): React.ReactElement<IHomepagewebpartProps> {
    return (
     <div className = {styles.homepagewebpart}>
       <QuickLinks header={this.props.description} items={this.state.links} />
     </div>
    );
    }

    private getLinksListData(): Promise<any> 
     {
        //Replace <Your Site URL> below with actual site url
        return this.props.spClientContext.get("<Your Site URL>/_api/web/lists/getbytitle('Quick%20Links')/items?Odata=minimal",
        SPHttpClient.configurations.v1).then((response: SPHttpClientResponse) => {
          return response.json();
        }).then(data => 
        {
            this.setState ({links: data.value});
        }
        )
     } 

  
}
