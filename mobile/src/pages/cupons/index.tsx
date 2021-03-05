import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Image, Alert } from 'react-native';
import Constants from 'expo-constants'
import { Feather as Icon } from '@expo/vector-icons'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg'
import api from '../../services/api'
import * as Location from 'expo-location'
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


interface Item {
  id: number,
  title: string,
  image_url: string
}
interface Point {
  id: number,
  name: string,
  image: string,
  latitude: number,
  longitude: number,
  items: {
    title: string;
  }[];
}

interface Toogle {
  select: boolean;
}


const Points = () => {
  const [Items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [select, setSelect] = useState<Toogle>();
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [initialPosition, setInicialPositial] = useState<[number, number]>([0, 0]);

  const navigation = useNavigation();

  useEffect(() => {
    api.get('items').then(res => {
      setItems(res.data);
    });
  }, []);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Ooops', ' precisamos da sua permissão para acessar a localização')
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInicialPositial([
        latitude,
        longitude
      ])


    }
    loadPosition();

  }, []);

  useEffect(() => {
    api.get('points', {
      params: {
        city: 'Cabo Frio',
        uf: 'RJ',
        items: [1, 2]
      }
    }).then(res => {
      setPoints(res.data);
    })
  }, [])

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToProfile(id: number) {
    navigation.navigate('Detail', { point_id: id });
  }

  function handleNavigateToCupons() {
    navigation.navigate('Cupons');

  }

  function handleSelectItem(id: number) {

    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems)
    } else {
      setSelectedItems([...selectedItems, id]);

    }
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <View style={styles.header}>

          <View style={styles.searchBar}>
            <Text style={styles.title}>{`Steelpoints por descontos!`}</Text>
            <Text style={styles.subtitle}>{`Use seus steelpoints para obter descontos  em comércios da sua região.`}</Text>

            <Text style={styles.points}>{`Saldo em SteelPoints: ${150}`}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <ScrollView style={styles.scroll}>
          <View style={styles.cupons}>

            <View style={styles.cuponsText}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <Text style={styles.cuponsSubtitle}>
                Troque 100 Steelpoints por 5% de desconto em suas compras.
                </Text>
            </View>


            <View style={styles.cuponsItens}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <RectButton style={styles.CuponsButton}>
                <Text style={styles.buttonText}>
                  Trocar
              </Text>

              </RectButton>
            </View>
          </View>

          <View style={styles.cupons}>

            <View style={styles.cuponsText}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <Text style={styles.cuponsSubtitle}>
                Troque 100 Steelpoints por 5% de desconto em suas compras.
                </Text>
            </View>


            <View style={styles.cuponsItens}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <RectButton style={styles.CuponsButton}>
                <Text style={styles.buttonText}>
                  Trocar
              </Text>

              </RectButton>
            </View>
          </View>

          <View style={styles.cupons}>

            <View style={styles.cuponsText}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <Text style={styles.cuponsSubtitle}>
                Troque 100 Steelpoints por 5% de desconto em suas compras.
                </Text>
            </View>


            <View style={styles.cuponsItens}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <RectButton style={styles.CuponsButton}>
                <Text style={styles.buttonText}>
                  Trocar
              </Text>

              </RectButton>
            </View>
          </View>

          <View style={styles.cupons}>

            <View style={styles.cuponsText}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <Text style={styles.cuponsSubtitle}>
                Troque 100 Steelpoints por 5% de desconto em suas compras.
                </Text>
            </View>


            <View style={styles.cuponsItens}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <RectButton style={styles.CuponsButton}>
                <Text style={styles.buttonText}>
                  Trocar
              </Text>

              </RectButton>
            </View>
          </View>

          <View style={styles.cupons}>

            <View style={styles.cuponsText}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <Text style={styles.cuponsSubtitle}>
                Troque 100 Steelpoints por 5% de desconto em suas compras.
                </Text>
            </View>


            <View style={styles.cuponsItens}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <RectButton style={styles.CuponsButton}>
                <Text style={styles.buttonText}>
                  Trocar
              </Text>

              </RectButton>
            </View>
          </View>

          <View style={styles.cupons}>

            <View style={styles.cuponsText}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <Text style={styles.cuponsSubtitle}>
                Troque 100 Steelpoints por 5% de desconto em suas compras.
                </Text>
            </View>


            <View style={styles.cuponsItens}>
              <Text style={styles.cuponsTitle}>
                Mercado Dia
                </Text>
              <RectButton style={styles.CuponsButton}>
                <Text style={styles.buttonText}>
                  Trocar
              </Text>

              </RectButton>
            </View>
          </View>

          </ScrollView>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.menu}>
          <RectButton style={styles.button} >
            <AntDesign name="home" size={40} color="#001342" />
          </RectButton>

          <RectButton style={styles.button} onPress={handleNavigateToCupons}>
            <MaterialIcons name="card-giftcard" size={40} color="white" />
          </RectButton>

          <RectButton style={styles.button} onPress={handleNavigateToProfile}>
            <Ionicons name="ios-person-outline" size={40} color="#001342" />
          </RectButton>

        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10 + Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  header: {
    padding: 10,
    display: 'flex',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
    //position: 'relative',
  },
  CuponsButton: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 40,
    width: 85,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  searchBar: {
    padding: 5,
  },
  buttonText: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 44,
    color: 'black',
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    marginBottom: 10,
  },
  cupons: {
    flexDirection: 'row',
    backgroundColor: '#28407C',
    color: 'white',
    padding: 10,
    flex: 1,
    margin: 15,
    borderRadius: 30,
  },
  cuponsText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuponsItens: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuponsTitle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  cuponsSubtitle: {
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Roboto_400Regular',
    color: 'white',
    marginTop: 15,
  },
  scroll: {
    borderWidth: 0,
    margin: 5,
    marginBottom: 50,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Ubuntu_700Bold',
    color: 'black',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'Roboto_400Regular',
    color: 'black',
    marginTop: 15,
  },

  points: {
    fontSize: 12,
    fontFamily: 'Ubuntu_700Bold',
    color: 'black',
    marginTop: 15,
  },
  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },
  seatchInput: {
    backgroundColor: '#1C3470',
    color: '#FFF',
    fontSize: 12,
    height: 50,
    marginTop: 5,
    borderRadius: 15,
    fontFamily: 'Roboto_400Regular',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 15,
    marginTop: 18,
    width: 50,
    flexDirection: 'row',
    overflow: 'hidden',

  },

  buttonIcon: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  section: {
    width: '100%',
    height: '100%',
    marginTop: 16,
    padding: 10,
  },
  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,
  },
  footer: {
    backgroundColor: '#28407C',
    width: '100%',
    height: 70,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default Points;