//notification bar
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getNotifications } from '../../actions';
import { Spinner } from '../Reusables';
import { BASE_URL } from '../../config';

class Notification extends Component {

        componentWillMount() {
            this.props.getNotifications();
        }

        renderNotifications() {
            if (this.props.notifications.length > 0) {
                return this.props.notifications.map((notification, index) => {
                    return (
                        <View key={index} style={styles.notificationContainer}>
                            <View style={styles.notificationImageContainer}>
                                <Image
                                    source={{ uri: `${BASE_URL}/images/${notification.image}` }}
                                    style={styles.notificationImage}
                                />
                            </View>
                            <View style={styles.notificationTextContainer}>
                                <Text style={styles.notificationText}>{notification.message}</Text>
                            </View>
                        </View>
                    );
                });
            }
        }

        render() {
            return (
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon name='arrow-back' style={styles.headerIcon} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Notifications</Text>
                        <TouchableOpacity>
                            <Icon name='menu' style={styles.headerIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContainer}>
                        <ScrollView>
                            {this.renderNotifications()}
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer: {
        height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 10
    },
    headerIcon: {
        fontSize: 30,
        color: '#000'
    },
    headerText: {
        fontSize: 20,
        color: '#000'
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    notificationContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    notificationImageContainer: {
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: width * 0.1,
        overflow: 'hidden'
    },
    notificationImage: {
        width: width * 0.2,
        height: width * 0.2
    },
    notificationTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    notificationText: {
        fontSize: 18,
        color: '#000'
    }
});

const mapStateToProps = (state) => {

    const { notifications } = state.notification;

    return { notifications };
}

export default connect(mapStateToProps, { getNotifications })(Notification);



//forgot password
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Spinner } from '../Reusables';
import { forgotPassword } from '../../actions';

const { width, height } = Dimensions.get('window');

class ForgotPassword extends Component {

        state = { email: '' }

        onEmailChange(text) {
            this.setState({ email: text });
        }

        onButtonPress() {
            const { email } = this.state;
            this.props.forgotPassword({ email });
        }

        renderButton() {
            if (this.props.loading) {
                return <Spinner size='large' />;
            }
            return (
                <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Reset Password</Text>
                </TouchableOpacity>
            );
        }

        render() {
            return (
                <KeyboardAvoidingView style={styles.container} behavior='padding'>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon name='arrow-back' style={styles.headerIcon} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Forgot Password</Text>
                        <TouchableOpacity>
                            <Icon name='menu' style={styles.headerIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../assets/images/forgot-password.png')}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                placeholder='Email'
                                placeholderTextColor='#ddd'
                                style={styles.textInput}
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.state.email}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            {this.renderButton()}
                        </View>
                    </View>
                </KeyboardAvoidingView>
            );
        }
    }