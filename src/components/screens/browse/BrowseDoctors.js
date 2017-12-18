import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';

import DoctorPreviewCard from './../../shared/DoctorPreviewCard';

export default class BrowseDoctors extends Component {

    onEventPress = (item) => {

    }

    renderItem = ({item}) => {
        <DoctorPreviewCard
            name={item.name}
            title={item.title}
            avatarURL={item.avatarURL}
            onPress={() => this.onEventPress(item)}
        />
    }

    render() {        
        <View>
            <ScrollView>
                <FlatList
                    ref='doctorsList'
                    data={[{id: 1}, {name: 'Nelly Urgiles'}, {title: 'Dentist'}, {avatarURL: 'http://src.eluniverso.com/2006/12/30/0001/70/files/148351-3415-f2500.jpg'}]}
                    extraData={this.props}
                    renderItem={this.renderItem}
                    keyExtractor={(item, idx) => item.id}
                />
            </ScrollView>
        </View>
    }
}