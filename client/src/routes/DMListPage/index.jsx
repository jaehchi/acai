import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Query } from 'react-apollo';

import DM_CHANNEL_LIST_QUERY from '../../graphQL/queries/DMChannelList.graphql';
import DMChannelList from '../../components/Home/DMChannelList';
import Loading from '../../components/globals/Loading';

import './DMListPage.sass';

class DMListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={DM_CHANNEL_LIST_QUERY}>
        { ({ loading, error, data } ) => {
          if (loading) {
            return <Loading/>
          }

          if ( error ) {
            console.log(error)
          }

          const channels = data.user.dmChannels;
    
          return (
            <div id="DMchannels__content">
              <div className="DMchannel__nav">
                <div>SearchBar</div>
              </div>
            
              <div className="DMchannel__friends">
                <NavLink to={`/channels/@me`} exact={true} className="channel" activeClassName="c-active">
                  <div className="c-name">Friends</div>
                </NavLink>  
              </div>
              <div className="DMchannel__list">
                <DMChannelList channels={channels || []} match={this.props.match}/>
              </div>
              <div>USER SHITS</div>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default withRouter(DMListPage);