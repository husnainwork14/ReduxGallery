import React, { Component } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, AsyncStorage, Alert, StyleSheet } from 'react-native'
import { saveImage, userLogin } from './action'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker';


class HomeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isVisible: false
		}
	}
	selectImage() {

		const options = {
			title: 'Select Image',
		};
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = { uri: response.uri };
				this.props.saveImage(source);
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => {
						this.selectImage();
					}}>
					<Text
						style={styles.button_text}>
						Select New Image
						</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						this.props.navigation.navigate("Gallery")
					}}>
					<Text
						style={[styles.button_text, {
							marginTop: 15
						}]}>
						Show All Images
						</Text>
				</TouchableOpacity>

			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	button_text: {
		fontSize: 18,
		fontWeight: '600',
		color: 'white',
		padding: 10,
		backgroundColor: '#228FE2'
	}
});


const mapStateToProps = state => ({
	Home: state.homeReducer,
})

const mapDispatchToProps = dispatch => ({
	saveImage: (uri) =>
		dispatch(saveImage(uri))
})

export default connect(mapStateToProps,
	mapDispatchToProps)(HomeScreen);
