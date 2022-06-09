import React, { Component } from 'react';
import { View, StyleSheet, Flatlist } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleDetail from './PeopleDetail';
import { Colors } from 'react-native-paper';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 20
    }
});

class PeopleList extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'user'} size={50} color={'#f08e25'} />
        )
    }

    renderInitialView() {
        if (this.props.detailView === true) {
            return(
                <PeopleDetail navigateToPeopleList={() => this.props.navigation.navigate("People List")} navigateToAddPerson={() => this.props.navigation.navigate("Add Person")} />
            )
        } else {
            return (
                <Flatlist
                data={this.props.people}
                renderItem={({item}) => <PeoplItem people={item} />}
                keyExtractor={(item, index) => index.toString()}
                />
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderInitialView()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        people: state.people, 
        detailView: state.detailView,
        toUpdate: state.toUpdate
    }
}

export default connect(mapStateToProps)(PeopleList);