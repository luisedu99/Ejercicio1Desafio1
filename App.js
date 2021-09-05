/**
* @format
* @flow strict-local
*/
import React, {useState, useEffect} from "react";
import {SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'

import color from "./src/utils/color";
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import Result from "./src/components/Result";

export default function App(){
    const [a, setA] = useState(null);
    const [b, setB] = useState(null);
    const [c, setC] = useState(null);
    const [total, setTotal] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
      if (a && b && c) calculate();
      else reset();
    }, [a, b, c]);

    const calculate = () => {
      
      const determinante = Math.pow(b,2) - (4*a*c);
      const x1 = ((b*(-1)) + Math.sqrt(determinante)) / (2*a);
      const x2 = ((b*(-1)) - Math.sqrt(determinante)) / (2*a);
      setTotal({
        x1value: x1,
        x2value: x2,
      });
    };

    const reset = () => {
      setErrorMessage('');
      setTotal(null);
    };


    return (
      <>
      <statusBar barStyle="light-content"/>
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>MR171621 / CS171609</Text>
        <Text style={styles.HeadApp}>Solución de formula cuadratica</Text>
        <Form
          setA={setA}
          setB={setB}
          setC={setC}
        />
      </SafeAreaView>
      <Result
        a={a}
        b={b}
        c={c}
        total={total}
        errorMessage={errorMessage}
      />
      <Footer calculate={calculate}/>
      </>
    );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: color.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
})

