import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Result(props) {
    const { a, b, c, total, errorMessage } = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="Valor de A ingresado:" value={`${a} `} />
                    <DataResult title="Valor de B ingresado:" value={`${b} `} />
                    <DataResult title="Valor de C ingresado:" value={`${c} `} />
                    <DataResult title="El valor de X1 obtenido es:" value={`${total.x1value} `} />
                    <DataResult
                        title="El valor de X2 obtenido es:"
                        value={`${total.x2value} `}
                    />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}
function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});