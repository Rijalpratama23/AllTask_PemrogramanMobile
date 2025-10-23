import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// color setting
const color = {
  primary: '#F3F2E7',
  secondary: '#FFFFFF',
  bgCta: '#869298',
  bgView: '#EAE9D2',
  btnBg: '#131E2E',
  bgHook: '#FF7043',
  bgTrnsparent: '#1E1E1E',
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  containerContent: {
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 65,
    marginHorizontal: 25,
  },
  containerText: {
    alignContent: 'center',
  },
  hi: {
    fontSize: 20,
    fontWeight: '200',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: '500',
    alignItems: 'center',
  },
  containerIcon: {
    marginTop: 12,
  },
  icon: {
    fontSize: 40,
    fontWeight: '900',
  },

  // style Box
  containerBox: {
    marginTop: 28,
    marginHorizontal: 25,
  },
  boxContent: {
    backgroundColor: color.bgHook, // warna oranye seperti di gambar
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
  },
  textPlan: {
    fontSize: 40,
    height: 100,
    alignItems: 'center',
    fontWeight: '500',
    color: '#fff',
    lineHeight: 38,
    paddingHorizontal: 2,
    paddingVertical: 10,
    justifyContent: 'center', // menengah secara vertikal
  },
  ctaButton: {
    backgroundColor: '#FF9B7A',
    width: 50,
    height: 115,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },

  containerSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
    marginHorizontal: 25,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: color.bgView,
    paddingTop: 5,
    paddingHorizontal: 20,
    width: 305,
    borderRadius: 30,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 2,
  },
  iconSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.bgTrnsparent,
    padding: 12,
    borderRadius: 50,
  },

  containerPopular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
    marginHorizontal: 25,
  },
  containerTextPopular: {
    marginTop: 3,
  },
  textPopular: {
    fontSize: 17,
    fontWeight: '500',
  },
  containerAll: {
    marginTop: 3,
  },
  textAll: {
    fontSize: 17,
    fontWeight: '300',
  },

  containerCard: {
    flexDirection: 'row',
    marginTop: 28,
    marginHorizontal: 25,
  },
  card: {
    width: 370,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 16,
    backgroundColor: '#ccc',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,
  },
  favoriteBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  infoContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  kordinat: {
    flexDirection: 'row',
  },
  countryText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
    fontWeight: '400',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 3,
  },
  rating: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 3,
  },
  price: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  per: {
    fontWeight: '400',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bottomRow: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 4,
    width: 100,
    alignSelf: 'flex-end',
  },

  // ===== Bottom Navbar Style =====
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#131E2E',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 15,
  },

});

const Home = () => {
  return (
    <View style={style.container}>
      <View style={style.containerContent}>
        {/* content header */}
        <View style={style.contentHeader}>
          {/* content text */}
          <View style={style.containerText}>
            <Text style={style.hi}>Hi,</Text>
            <Text style={style.name}>Rijal</Text>
          </View>
          {/* content icon */}
          <View style={style.containerIcon}>
            <Icon
              name="heart"
              size={30}
              color={color.bgHook}
              style={style.icon}
            />
          </View>
        </View>

        <View style={style.containerBox}>
          <View style={style.boxContent}>
            <View style={style.textContainer}>
              <Text style={style.textPlan}>Plan Your{'\n'}Summer!</Text>
            </View>
            <TouchableOpacity style={style.ctaButton}>
              <Icon name="arrow-forward" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.containerSearch}>
          <View style={style.searchBar}>
            <Icon name="search" size={25} color="black" />
            <TextInput
              style={style.input}
              placeholder="Search destination..."
              placeholderTextColor="#555"
            />
          </View>
          <View style={style.iconSearch}>
            <Icon name="list-outline" size={25} color="#fff" />
          </View>
        </View>

        <View style={style.containerPopular}>
          <View style={style.containerTextPopular}>
            <Text style={style.textPopular}>Popular Destination</Text>
          </View>
          <View style={style.containerAll}>
            <Text style={style.textAll}>View All</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 20 }}
        >
          <TouchableOpacity activeOpacity={0.9} style={style.card}>
            <ImageBackground
              source={require('./asset/labuanBajo.jpg')} // ubah sesuai lokasi gambar
              style={style.image}
              imageStyle={style.imageStyle}
            >
              {/* Icon love di pojok kanan atas */}
              <TouchableOpacity style={style.favoriteBtn}>
                <Icon name="heart" size={22} color="white" />
              </TouchableOpacity>

              {/* Overlay gelap bagian bawah */}
              <View style={style.overlay} />

              {/* Info teks */}
              <View style={style.infoContainer}>
                <View style={style.ctaKor}>
                  <View style={style.kordinat}>
                    <Icon name="location" size={14} color="#fff" />
                    <Text style={style.countryText}>Indonesia</Text>
                  </View>
                  <View>
                    <Text style={style.title}>Labuan Bajo</Text>
                  </View>
                </View>

                <View style={style.bottomRow}>
                  <View style={style.row}>
                    <Icon name="star" size={14} color="#fff" />
                    <Text style={style.rating}>5.0</Text>
                  </View>
                  <Text style={style.price}>
                    $4.000<Text style={style.per}>/pax</Text>
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 20 }}
        >
          <TouchableOpacity activeOpacity={0.9} style={style.card}>
            <ImageBackground
              source={require('./asset/italia.jpg')}
              style={style.image}
              imageStyle={style.imageStyle}
            >
              <TouchableOpacity style={style.favoriteBtn}>
                <Icon name="heart" size={22} color="#fff" />
              </TouchableOpacity>

              <View style={style.overlay} />

              <View style={style.infoContainer}>
                <View>
                  <View style={style.kordinat}>
                    <Icon name="location" size={14} color="#fff" />
                    <Text style={style.countryText}>Italia</Text>
                  </View>
                  <View>
                    <Text style={style.title}>kolres</Text>
                  </View>
                </View>

                <View style={style.bottomRow}>
                  <View style={style.row}>
                    <Icon name="star" size={14} color="#fff" />
                    <Text style={style.rating}>4.0</Text>
                  </View>
                  <Text style={style.price}>
                    $4.000<Text style={style.per}>/pax</Text>
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* ===== Bottom Navbar ===== */}
        <View style={style.navbar}>
          <TouchableOpacity style={style.navItem}>
            <Icon name="home" size={26} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={style.navItem}>
            <Icon name="grid" size={26} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={style.navItem}>
            <Icon name="person" size={26} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
