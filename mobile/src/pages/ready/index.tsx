import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 


const Home = () => {

  const navigation = useNavigation();

  function handleNavigateMaps() {
    navigation.navigate('Map');
  }

  return (
    <>
      <ImageBackground source={require('../../assets/home-background.png')} style={styles.container} imageStyle={{ width: 274, height: 368, opacity: .05 }}>
        <View style={styles.main}>
          <Image source={require('../../assets/icon.png')} style={styles.img} />
          <Text style={styles.title}>SteelBack</Text>
        </View>

        <View style={styles.form}>
          <View >
            <View style={styles.contentHead}>
              <Text style={styles.subTitle}>Prontinho</Text>
            </View>


            <View style={styles.description} >
              <Text style={styles.subDescription}>
                Cadastro Steelback completo,
                agora é  buscar os pontos de coleta de embalagens de aço
                e começar a juntar seu Steelpoints e ganhar beneficios.
                </Text>
            </View>

            <View style={styles.imgContainer}>
              <Image style={styles.img} source={require('../../assets/qrCode.png')} />
            </View>

            <RectButton style={styles.button} onPress={handleNavigateMaps}>
              <Text style={styles.buttonText}>
                {`Ir para a página principal `}
                <AntDesign name="arrowright" size={14} color="white" />
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
    marginBottom: 30,
    position: 'relative',
    alignItems: 'center',
    paddingBottom: 0,
  },

  contentHead: {
    alignItems: 'center'
  },

  form: {
    flex: 2,
    backgroundColor: '#28407C',
    alignItems: 'center',
    // width: '100%',
    // height: 20,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    marginTop: 20,
    marginBottom: -5
  },

  Textlabel: {
    color: '#FFF'
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 25,
    marginBottom: 0,
  },
  subTitle: {
    color: '#FFFFFF',
    fontSize: 36,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 10,
    marginLeft: 2,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  subDescription: {
    color: '#FFF',
    textAlign: 'justify',
    fontSize: 15,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

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
    marginBottom: 18,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  buttonText: {
    flex: 1,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 44,
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    marginBottom: 20,
  }
});

export default Home;