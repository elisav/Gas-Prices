import React, { Component } from 'react'

// Import tab navigator
import { StackNavigator } from 'react-navigation';

// Import scenes
import Home from './Home'
import Settings from './Settings'
import StationMap from './StationMap'

const Navigator = StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Eldsneytisverð',
      		header: {
				style: {
					backgroundColor: '#548b54',
				},
				titleStyle: {
					color: '#FFFFFF'
				},
		    },
    	},
	},
	Stillingar: {
		screen: Settings,
		navigationOptions: {
			title: 'Stillingar',
			header: {
				style: {
					backgroundColor: '#548b54',
				},
				titleStyle: {
					color: '#FFFFFF'
				}
			}
		}
	},
	StationMap: {
		screen: StationMap,
		navigationOptions: {
			title: 'Kort',
			header: {
				style: {
					backgroundColor: '#548b54',
				},
				titleStyle: {
					color: '#FFFFFF'
				}
			}
		}
	},
});

export default Navigator;