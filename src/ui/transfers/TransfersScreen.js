import { Text, View } from "native-base"
import React, { useState, useEffect } from "react"
import { SectionList, StyleSheet } from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen"
import { getAllTransfers } from "../../data/serviceApi"

const TransfersScreen = () => {
    const [transfersList, setTransfersList] = useState([])
    const [sectionList, setSectionList] = useState([])

    useEffect(() => {
        let newList = []
        getAllTransfers().then((list) => {
            for (let branch of list) {
                newList = [...newList, { title: branch.branchIdFrom, data: branch.rawproductsintransfers }]
                // console.log("newList :  " + JSON.stringify(item))
            }
            setSectionList(newList)
        })

        //Parent Branch
        //children product
        //[{title: , data: []}{}]

    }, [])

    const renderProductItem = ({ rawProductName, transferAmount }) =>
        <Text style={styles.content}>{rawProductName} ----- {transferAmount}</Text>

    const renderSection = (title) =>
        <Text style={styles.section}> ---------- {title} ------------</Text>

    return (
        <View style={styles.container}>
            <SectionList
                sections={sectionList}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => renderProductItem(item)}
                renderSectionHeader={({ section: { title } }) => (
                    renderSection(title)
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {
        backgroundColor: "#00FF00",
        textAlign: 'center',
        marginTop: 10
    },
    content: {
        backgroundColor: "#98FB98",
    }
});

export default TransfersScreen