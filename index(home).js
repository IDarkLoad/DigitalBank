import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
    {
        id: 1,
        label: 'Debito visa electron brasil',
        value: '752,90',
        date: '19/07/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix recebido Santander - dif tit',
        value: '3.000,00',
        date: '18/07/2022',
        type: 1 // receita / entrada
    },
    {
        id: 3,
        label: 'Energisa Nordeste LTDA',
        value: '595,25',
        date: '18/07/2022',
        type: 0 // despesas
    },
    {
        id: 4,
        label: 'MB Labs Salário',
        value: '12.500,00',
        date: '17/07/2022',
        type: 1 // receita / entradas
    },
]

export default function Home() {
    return (
        <View style={StyleSheet.container}>
            <Header name="Thiago Pê Borges"/>
            <Balance saldo="49.257,95" gastos="-3.762,55"/>

            <Actions/>

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({item}) => <Movements data={item} /> }
            />
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        margin:14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
    },
});
  