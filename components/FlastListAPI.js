import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native';

const FlastListAPI = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setRefreshing(true); // Set refreshing to true when fetching new data
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const responseJson = await response.json();
            setDataSource(responseJson);
        } catch (error) {
            console.error(error);
        } finally {
            setRefreshing(false); // Set refreshing back to false after fetching is done
        }
    };

    const getitem = (item) => {
        // Function for click on an item
        alert('id: ' + item.id + ', Title: ' + item.title);
    }

    const ItemView = ({ item }) => {
        return (
            <Text
                style={styles.itemStyle}
                onPress={() => getitem(item)}>
                {item.title}
            </Text>
        );
    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: "100%",
                    backgroundColor: "#C8C8C8",
                }}
            />
        );
    };

    const onRefresh = () => {
        // Call the service to get the latest data
        getData();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {refreshing ? <ActivityIndicator /> : null}
                <FlatList
                    data={dataSource}
                    keyExtractor={(item) => item.id.toString()} // Changed keyExtractor
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    );
}

export default FlastListAPI;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 10,
    },
    itemStyle: {
        fontSize: 20,
        padding: 10,
    },
});
