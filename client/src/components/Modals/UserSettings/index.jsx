import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Modal from '../../globals/Modal';
import ComingSoon from '../../globals/ComingSoon';
import SVG from '../../globals/SVG';

import './userSettings.sass';

class UserSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.tabs = {
      userSettings: { name: 'User Settings', className: "tab__setting", type: 'none' , disabled: false },
      myAccount: { name: 'My Account', className: "tab__entry", selectedClassName: "tab__selected", type: 'tab', avail: false, disabled: false },
      separator1: { name: 'Seperator', className: "tab__seperator", type: 'none', disabled: false },
      privacyAndSafety: { name: 'Privacy & Safety', className: "tab__entry", selectedClassName: "tab__selected", type: 'tab', avail: false, disabled: false },
      appSettings: { name: 'App Settings', className: "tab__setting", type: 'none', disabled: false },
      voiceAndVideo: { name: 'Voice & Video', className: "tab__entry", selectedClassName: "tab__selected", type: 'tab', avail: false, disabled: false },
      notifcation: { name: 'Notification', className: "tab__entry", selectedClassName: "tab__selected", type: 'tab', avail: false, disabled: false },
      activityFeed: { name: 'Activity Feed', className: "tab__entry", selectedClassName: "tab__selected", type: 'tab', avail: false, disabled: false },
      appearance: { name: 'Appearance', className: "tab__entry", selectedClassName: "tab__selected", type: 'tab', avail: false, disabled: false },
      textAndImages: { name: 'Text & Images', className: "tab__entry", selectedClassName: "tab__selected", type: 'tab', avail: false, disabled: false },
      separator2: { name: 'Seperator', className: "tab__seperator", type: 'none', disabled: false },
      logout: { name: 'Log Out', className: "tab__entry", selectedClassName: "tab__selected", type: 'tab', avail: true, disabled: true },
      separator3: { name: 'Seperator', className: "tab__seperator", type: 'none', disabled: false},
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.escape = this.escape.bind(this);
  }

  escape (e) {
    e.key === 'Escape' ? this.setState({ showModal: !this.state.showModal }) : null;
  }

  toggleModal (e) {
    if (e && this.state.showModal && this.node.contains(e.target)) {
      return;
    }
    
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  
  _configureTabs () {
    const tabs = [];

    Object.keys(this.tabs).forEach( (tab, i) => {
      const { name, className, selectedClassName, type, disabled  } = this.tabs[tab];
      const isSeperator = name === 'Seperator' ? true : false;
      
      if ( type === 'none' ) {
        tabs.push( <div key={i} className={className}>{ isSeperator ? '' : name }</div> );
      } else if ( name === 'Log Out') {
        tabs.push( <Tab onClick={ () => { console.log('logout')}} key={i} className={className} selectedClassName={selectedClassName} disabled={disabled}>{name}</Tab> );
      } else {
        tabs.push( <Tab key={i} className={className} selectedClassName={selectedClassName} disabled={disabled}>{name}</Tab> );
      }
    })
    
    return tabs;
  }

  _configureTabPanels () {
    const tabPanels = [];

    Object.keys(this.tabs).forEach( (tab, i) => {
      const { name, className, selectedClassName, type, disabled, avail  } = this.tabs[tab];
      
      if ( avail && type === 'tab') {
        tabPanels.push(
          <TabPanel key={i}  disabled={disabled}>
            we have a component
          </TabPanel>
        )
      } else if ( !avail && type === 'tab' ){
        tabPanels.push(
          <TabPanel key={i}  disabled={disabled}>
            <div className="panel__title">{name}</div>
            <ComingSoon className={"coming__soon"}/>
          </TabPanel>
        )
      }
    });

    return tabPanels;
  }

  render() {

    const showModal = this.state.showModal ? (
      <Modal>
        <div className="user-settings-wrapper"  tabIndex={0} onKeyDown={(e) => { this.escape(e) }}>
          <div ref={ node => { this.node = node; }}>
            <Tabs  className="user-settings-container" >
              <TabList className="us__tablist" >
                <div className="tabs">
                  { this._configureTabs() }
                </div>
              </TabList>

              <div className="us__tabcontent">
                <div className="panels">
                  { this._configureTabPanels()}
                </div>
                <div className="exit__button" onClick={()=> { this.toggleModal()}}>
                  <div className="exit__svg"> 
                    <SVG name="cross" width="14px" height="14px" viewBox="0 0 24 24" fill="#FFFFFF"/>
                  </div>
                  <div className="esc">ESC</div>
                </div>
              </div>
            
            </Tabs>
          </div>
        </div>
      </Modal>
    ) : null;
    

    return (
      <div id="userSettings" onClick={this.toggleModal}>
        <SVG name="gear" width="15px" height="15px" viewBox="0 0 24 24" fill="currentColor"/>
        {showModal}
      </div>
    );
  };
}

export default UserSettings;