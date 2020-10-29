import React, { Component } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, AsyncStorage, Alert, StyleSheet, Dimensions } from 'react-native'
import { delImage, saveImage, userLogin } from './action'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker';
import { FlatList } from 'react-native-gesture-handler';
import store from '../../store';
const { width, height } = Dimensions.get('window')


class ImagesScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isVisible: false
		}
	}

	render() {
		return (
			<View style={styles.container}>


				<FlatList
					style={{
						flex: 1, width: width, height: height,
						backgroundColor: '#d9d9d9'
					}}
					data={store.getState().homeReducer.images}
					showsVerticalScrollIndicator={true}
					renderItem={({ item, index }) => (
						<View
							style={styles.list_main_view}>
							<Image
								style={styles.list_img}
								source={{ uri: item.uri }}
								resizeMode='cover'
							/>
							<View
								style={styles.btn_view}>
								<TouchableOpacity
									style={styles.remove_btn}
									onPress={() => {
										this.props.delImage(index);
									}}>
									<Text
										style={styles.button_text}>
										Remove
										</Text>
								</TouchableOpacity>
							</View>
						</View>
					)
					}
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'grey',
	},
	button_text: {
		fontSize: 14,
		fontWeight: '600',
		color: 'black',
		padding: 10,
	},
	remove_btn: {
		width: width, height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btn_view: {
		position: 'absolute', bottom: 0,
		width: width, height: 40,
		backgroundColor: '#d9d9d944',
	},
	list_img: { width: width, height: 190 },
	list_main_view: {
		width: width, height: 190,
		marginBottom: 15,
		backgroundColor: 'white'
	}
});


const mapStateToProps = state => ({
	Home: state.homeReducer,
})

const mapDispatchToProps = dispatch => ({
	delImage: (pos) =>
		dispatch(delImage(pos))
})

export default connect(mapStateToProps,
	mapDispatchToProps)(ImagesScreen);
