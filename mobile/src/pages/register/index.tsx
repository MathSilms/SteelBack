import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';


const Home = () => {

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points');
  }

  function handleNavigateToRegister() {
    navigation.navigate('Register');
  }

  return (
    <>
      <ImageBackground source={require('../../assets/home-background.png')} style={styles.container} imageStyle={{ width: 274, height: 368, opacity: .05 }}>
        <View style={styles.main}>
          <Image source={require('../../assets/icon.png')} style={styles.img} />
          <Text style={styles.title}>SteelBack</Text>
        </View>

        {/* <View style={styles.footer}>
          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <Text style={styles.buttonText}>
              ENTRAR
          </Text>

          </RectButton>

          <View style={styles.centerContent}>
            <Text style={styles.buttonText}>
              _____ OU _____
          </Text>
          </View>

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <Text style={styles.buttonText}>
              CADASTRAR
          </Text>

          </RectButton>
        </View> */}

        <View style={styles.form}>
          <View >
            <View style={styles.formhead}>
              <Text style={styles.subTitle}>Cadastro</Text>
            </View>
            <Text style={styles.Textlabel}>Nome</Text>
            <TextInput style={styles.input} />

            <TextInput style={styles.input} />

            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <RectButton style={styles.button} onPress={handleNavigateToPoints}>
              <Text style={styles.buttonText}>
                CADASTRAR
              </Text>
            </RectButton>
          </View>
        </View>
      </ImageBackground>


    </>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#0E0E0E',
  },

  main: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center'
  },
  formhead: {
    alignItems: 'center'
  },
  form: {
    flex: 2,
    backgroundColor: '#28407C',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // height: 20,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },

  Textlabel:{
    color:'#FFF'
  },

  // centerContent: {
  //   marginTop: 30,
  //   flex: .2,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 25,
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 10,
  },

  // description: {
  //   color: '#6C6C80',
  //   fontSize: 16,
  //   marginTop: 16,
  //   fontFamily: 'Roboto_400Regular',
  //   maxWidth: 260,
  //   lineHeight: 24,
  // },

  // footer: {
  //   flex: 1,
  //   alignItems: 'center'
  // },

  img: {
    marginTop: 30,
  },
  background: {
    backgroundColor: '#0E0E0E',
  },

  // input: {
  //   height: 60,
  //   backgroundColor: '#FFF',
  //   borderRadius: 10,
  //   marginBottom: 8,
  //   paddingHorizontal: 24,
  //   fontSize: 16,
  // },

  button: {
    justifyContent: 'center',
    backgroundColor: '#28407C',
    height: 60,
    width: 250,
    flexDirection: 'row',
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    height: 50,
    backgroundColor: '#1C3470',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;