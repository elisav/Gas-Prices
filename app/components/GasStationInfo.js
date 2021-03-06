import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	Image,
	Switch,
	StyleSheet,
	TouchableHighlight
} from 'react-native'

class GasStationInfo extends Component {
	constructor(props){
		super(props);
		this.with_key = "með 🔑💳"
		this.without_key = ""
		this.images = {
			'Atlantsolía': require('../images/Atlantsolía.png'),
			'Dælan': require('../images/Dælan.png'),
			'N1': require('../images/N1.png'),
			'ÓB': require('../images/ÓB.png'),
			'Olís': require('../images/Olís.png'),
			'Orkan X': require('../images/Orkan X.png'),
			'Orkan': require('../images/Orkan.png'),
			'Skeljungur': require('../images/Skeljungur.png'),
		}
	}

	render() {
		return(
			<TouchableHighlight onPress={() => this.props.navigation.navigate('StationMap', {result: this.props.result, DSOFHOSodsijOIFSGJOIFGJFDOIGJDFOGIJFDOGIFDJGIJ: 'one'})}>
				<View style={styles.gasStationBox}>
					<View style={styles.row}>
						<Image style={styles.icons} source={this.images[this.props.result.company]} />
						<View style={styles.gasStationTextBox}>
							<Text style={styles.gasStationTitle}>{this.props.result.company} {this.props.result.name}</Text>
							<View>
								{ this.props.main_price < this.props.sub_price 
									&& [<Text key={'k1'} style={styles.gasStationText}>{this.props.main_price} ISK {this.props.key_exists && this.with_key}</Text>,
									[this.props.key_exists && <Text key={'k2'} style={styles.gasStationSubtext}>{this.props.sub_price} {['ISK ' + this.without_key]}</Text>]]
								}
								{
									this.props.main_price > this.props.sub_price
									&& [<Text key={'k3'} style={styles.gasStationText}>{this.props.main_price} ISK {this.props.key_exists && this.without_key}</Text>,
									[this.props.key_exists && <Text key={'k4'} style={styles.gasStationSubtext}>{this.props.sub_price} {['ISK ' + this.with_key]}</Text>]]
								}
							</View>
						</View>
					</View>
					<View style={styles.mapView}>
						<Image style={styles.map} source={require('../images/mapIcon.png')} />
						<Text style={styles.distanceText}>{this.props.distance + ' km'}</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	  gasStationBox: {
	      flex: 1,
	      flexDirection: 'row',
	      justifyContent: 'space-between',
	      backgroundColor: 'white',
	      alignItems: 'center',
	      justifyContent: 'center',
	      padding: 7,
	      margin: 0.5,
	  },
	  row: {
	  	flexDirection: 'row',
	  	flex: 0.80,
	  	alignItems: 'center'
	  },
	  gasStationTitle: {
	  },
	  gasStationText: {
	  	fontSize: 18,
	  	fontWeight: 'bold'
	  },
	  gasStationSubtext: {
	  	fontSize: 12,
	  	fontStyle: 'italic'
	  },
	  icons: {
	  	width: 50,
	  	height: 50,
	  	margin: 5,
	  },
	  gasStationTextBox: {
	  	marginTop: 5,
	  },
	  map: {
	  	width: 25,
	  	height: 25,
	  	backgroundColor: 'red',
	  	margin: 5,
	  },
	  mapView: {
	  	flex: 0.20,
	  	alignItems: 'center'
	  },
	  distanceText: {
	  	fontSize: 15,
	  }
});

function mapStateToProps(state){
    return {
        settingsFilters: state.settingsFilters,
    }
}

export default connect(mapStateToProps)(GasStationInfo);