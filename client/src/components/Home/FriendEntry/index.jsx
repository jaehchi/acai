import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Mutation, withApollo } from 'react-apollo';

import ADD_DM_CHANNEL_MUTATION from '../../../graphQL/mutations/addDMChannel.graphql';
import DM_CHANNEL_LIST_QUERY from '../../../graphQL/queries/DMChannelList.graphql'

import './friendEntry.sass';

class FriendEntry extends Component {
  constructor(props) {
    super(props);

    this.handleServerClick = this.handleServerClick.bind(this);
  }


  handleServerClick (e, guild) {
    e.preventDefault();
    this.props.history.push(`/channels/${guild.id}/${guild.channels[0].children[0].id}`);
  }

  render() {
    const { relation: { status, link, action_id }, match } = this.props;

    const path = `${match.path}/${link[0].dmChannels[0].id}`
    const stat = (status === 'Pending') ? ( (action_id === localStorage._id) ? 'Outgoing Friend Request' : 'Incoming Friend Request' ) : status;

    const friendRelation = (
      <NavLink to={path} >
        <Mutation
          mutation={ADD_DM_CHANNEL_MUTATION} 
          variables={{ id: link[0].dmChannels[0].id}}
          update={(store, { data: { addDMChannel } }) => {
            const data = store.readQuery({ 
              query: DM_CHANNEL_LIST_QUERY
            });

            const isDMAlreadyActive = data.user.activeDMs.find( DM => ( DM.id === addDMChannel.id ));

            if ( !isDMAlreadyActive ) {
              data.user.activeDMs.push(addDMChannel);

              store.writeData({
                query: DM_CHANNEL_LIST_QUERY,
                data
              });
            }

            this.props.history.push(`/channels/@me/${addDMChannel.id}`)
          }}
        >
          {
            (addDMChannelMutation) => (
              <div onClick={addDMChannelMutation}>
                <div className="friend__content">
                <div className="friend__username"> 
                  {
                    link[0].avatar[0] !== '#' ? <img src={`http://localhost:3100/${link[0].avatar}`} /> : <div className="friend-default-avatar" style={{ backgroundColor: link[0].avatar }}>
                      <svg height="35px" viewBox="0 -15 512 512" width="35px"><g transform="matrix(0.623526 0 0 0.623526 96.3774 90.7303)"><path d="m512 90.175781c0 49.804688-40.375 90.175781-90.175781 90.175781-49.804688 0-90.175781-40.371093-90.175781-90.175781 0-49.800781 40.371093-90.175781 90.175781-90.175781 49.800781 0 90.175781 40.375 90.175781 90.175781zm0 0" fill="#7B879C"/><path d="m181.355469 90.175781c0 49.804688-40.375 90.175781-90.175781 90.175781-49.804688 0-91.179688-40.371093-91.179688-90.175781 0-49.804687 41.375-90.175781 91.179688-90.175781 49.800781 0 90.175781 40.371094 90.175781 90.175781zm0 0" fill="#7B879C"/><path d="m256.5 30.058594c-140.972656 0-256.5 114.523437-256.5 255.5 0 125.945312 91.78125 196.382812 256.5 196.382812 164.722656 0 255.5-70.4375 255.5-196.382812 0-140.976563-114.523438-255.5-255.5-255.5zm0 0" fill="#DBE3E8"/><path d="m512 285.558594c0 125.945312-90.777344 196.382812-255.5 196.382812v-451.882812c140.976562 0 255.5 114.523437 255.5 255.5zm0 0" fill="#DBE3E8"/><path d="m271.53125 330.644531v75.148438c0 8.414062-6.613281 15.027343-15.03125 15.027343s-15.027344-6.613281-15.027344-15.027343v-75.148438c0-8.417969 6.609375-15.027343 15.027344-15.027343s15.03125 6.609374 15.03125 15.027343zm0 0" fill="#7B879C"/><path d="m271.53125 330.644531v75.148438c0 8.414062-6.613281 15.027343-15.03125 15.027343v-105.203124c8.417969 0 15.03125 6.609374 15.03125 15.027343zm0 0" fill="#7B879C"/><path d="m331.648438 375.734375c0 24.945313-20.140626 45.085937-45.089844 45.085937h-60.117188c-24.949218 0-45.085937-20.140624-45.085937-45.085937 0-8.417969 6.609375-15.03125 15.027343-15.03125 8.417969 0 15.03125 6.613281 15.03125 15.03125 0 8.414063 6.609376 15.027344 15.027344 15.027344h60.117188c8.417968 0 15.03125-6.613281 15.03125-15.027344 0-8.417969 6.609375-15.03125 15.027344-15.03125 8.417968 0 15.03125 6.613281 15.03125 15.03125zm0 0" fill="#7B879C"/><path d="m256.5 270.527344c-26.148438 0-45.085938 12.625-45.085938 30.058594 0 15.332031 18.9375 45.089843 45.085938 45.089843 26.152344 0 45.089844-29.757812 45.089844-45.089843 0-17.433594-18.9375-30.058594-45.089844-30.058594zm0 0" fill="#7B879C"/><path d="m256.5 345.675781v-75.148437c26.152344 0 45.089844 12.625 45.089844 30.058594 0 15.332031-18.9375 45.089843-45.089844 45.089843zm0 0" fill="#7B879C"/><path d="m331.648438 375.734375c0 24.945313-20.140626 45.085937-45.089844 45.085937h-30.058594v-30.058593h30.058594c8.417968 0 15.03125-6.613281 15.03125-15.027344 0-8.417969 6.609375-15.03125 15.027344-15.03125 8.417968 0 15.03125 6.613281 15.03125 15.03125zm0 0" fill="#7B879C"/><path d="m126.152344 328.578125c-8.378906 0-16.703125-1.570313-24.671875-4.902344-38.234375-16-53.730469-66.328125-34.546875-112.195312 19.195312-45.863281 65.882812-70.214844 104.117187-54.214844 38.234375 15.996094 53.734375 66.324219 34.550781 112.191406-15.191406 36.3125-47.628906 59.121094-79.449218 59.121094zm0 0" fill="#6D89B2"/><path d="m386.847656 328.578125c-31.820312 0-64.253906-22.808594-79.445312-59.121094-19.183594-45.867187-3.683594-96.195312 34.546875-112.191406 38.117187-15.941406 84.9375 8.320313 104.121093 54.214844 19.183594 45.867187 3.683594 96.195312-34.550781 112.195312-7.953125 3.316407-16.289062 4.902344-24.671875 4.902344zm0 0" fill="#FFFFFF"/><path d="m151.296875 255.5c0 8.300781-6.730469 15.027344-15.03125 15.027344s-15.027344-6.726563-15.027344-15.027344 6.726563-15.03125 15.027344-15.03125 15.03125 6.730469 15.03125 15.03125zm0 0" fill="#FFFFFF"/><path d="m391.765625 255.5c0 8.300781-6.730469 15.027344-15.03125 15.027344s-15.027344-6.726563-15.027344-15.027344 6.726563-15.03125 15.027344-15.03125 15.03125 6.730469 15.03125 15.03125zm0 0" fill="#7B879C"/></g> </svg>
                    </div>
                  }
                  <div>{link[0].username}</div>
                </div>
                <div className={`friend__status__icon ${ stat !== 'Accepted' ? 'Offline' : link[0].status}`}></div>
                <div className="friend__status">{ stat !== 'Accepted' ? stat : link[0].status }</div>
                <div className="friend__mutual">
                  {
                    link[0].memberOf.map( guild => { 
                      return (
                        <div key={`mutualGuild/${guild.id}`} onClick={(e) => { this.handleServerClick(e, guild)}}>
                          <img src={`http://localhost:3100/${guild.avatar}`}/>    
                        </div>
                      )
                    })
                  }
                </div>
              </div>

              </div>
            )
          }
        </Mutation>
      </NavLink> 
    )

  
  
    return (
      <div id="friend__entry">
        {friendRelation}
      </div>
    );
  }
}

export default withApollo(withRouter(FriendEntry));