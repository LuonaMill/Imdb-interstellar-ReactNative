import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import moviePoster from "./assets/film.jpg";
import matthew from "./assets/matthew.jpg";
import anne from "./assets/anne.jpg";
import jessica from "./assets/jessica.jpg";
import mackenzie from "./assets/mackenzie.jpg";
import { Ionicons } from "@expo/vector-icons/";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "grey" }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://ia.media-imdb.com/images/M/MV5BOTc2MzQ4MjAwM15BMl5BcG5nXkFtZTgwMzY2MzQ2OTE@._V1_.png",
            }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.container}>
          <View style={styles.movieSection}>
            <View style={styles.movieSectionTop}>
              <Text style={styles.movieTitle}>Interstellar</Text>
              <View style={styles.movieInfos}>
                <Text style={styles.movieInfosText}>2014</Text>
                <Text style={styles.movieInfosText}>PG-13</Text>
                <Text style={styles.movieInfosText}>2h 49min</Text>
                <Text style={styles.movieInfosText}>
                  Adventure, Drama, Sci-Fi
                </Text>
              </View>
            </View>
            <View style={styles.movieSectionCenter}>
              <Image
                source={moviePoster}
                style={styles.moviePoster}
                resizeMode="cover"
              />
              <View style={styles.synopsisSection}>
                <Text style={styles.synopsisText}>
                  A team of explorers travel through a wormhole in space in an
                  attemp to ensure humanity's survival.
                </Text>
                <TouchableOpacity style={styles.synopsisButton}>
                  <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.movieSectionBottom}>
              <View style={styles.rating}>
                <Ionicons name="star" size={26} color="#F5C518" />
                <View style={styles.imdbScore}>
                  <Text style={styles.ratingWhiteText}>8,6</Text>
                  <Text style={{ color: "white", fontSize: 12, marginTop: 5 }}>
                    /10
                  </Text>
                </View>
                <Text style={styles.ratingGreyText}>1.1M</Text>
              </View>
              <View style={styles.rating}>
                <Ionicons name="star-outline" size={26} color="white" />
                <Text style={styles.ratingWhiteText}>RATE THIS</Text>
              </View>
              <View style={styles.rating}>
                <View style={styles.metascoreGreenSquare}>
                  <Text style={{ color: "white", fontSize: 22 }}>74</Text>
                </View>
                <Text style={styles.ratingWhiteText}>Metascore</Text>
                <Text style={styles.ratingGreyText}>46 critic reviews</Text>
              </View>
            </View>
          </View>
          <View style={styles.castingSection}>
            <View style={styles.castingSectionTop}>
              <View>
                <Text
                  style={{ color: "white", fontSize: 22, marginRight: 150 }}
                >
                  Top Billed Cast
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.8}>
                <Text
                  style={{
                    color: "#479bd8",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  SEE ALL
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={styles.castingSectionCenter}>
              <View style={styles.castingActors}>
                <Image source={matthew} style={styles.actorPictures} />
                <View style={styles.castingActorsText}>
                  <Text style={styles.castingTitle} numberOfLines={1}>
                    Matthew McConaughey
                  </Text>
                  <Text style={styles.castingNames}>Cooper</Text>
                </View>
              </View>
              <View style={styles.castingActors}>
                <Image source={anne} style={styles.actorPictures} />
                <View style={styles.castingActorsText}>
                  <Text style={styles.castingTitle} numberOfLines={1}>
                    Anne Hathaway
                  </Text>
                  <Text style={styles.castingNames}>Brand</Text>
                </View>
              </View>
              <View style={styles.castingActors}>
                <Image source={jessica} style={styles.actorPictures} />
                <View style={styles.castingActorsText}>
                  <Text style={styles.castingTitle} numberOfLines={1}>
                    Jessica Chastain
                  </Text>
                  <Text style={styles.castingNames}>Murph</Text>
                </View>
              </View>
              <View style={styles.castingActors}>
                <Image source={mackenzie} style={styles.actorPictures} />
                <View style={styles.castingActorsText}>
                  <Text style={styles.castingTitle} numberOfLines={1}>
                    Mackenzie Foy
                  </Text>
                  <Text style={styles.castingNames}>Murph (10 Yrs.)</Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.castingSectionBottom}>
              <View style={styles.castingActorsText}>
                <Text style={styles.castingTitle}>Director</Text>
                <Text style={styles.castingNames}>Christopher Nolan</Text>
              </View>
              <View style={styles.castingActorsText}>
                <Text style={styles.castingTitle}>Writers</Text>
                <Text style={styles.castingNames}>
                  Jonathan Nolan (written By) and Christopher Nolan (written by)
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  header: {
    height: 50,
    backgroundColor: "#393939",
    flex: 1,
  },
  container: {
    height: 900,
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    height: 30,
    width: 60,
    marginTop: 10,
    marginLeft: 10,
  },
  movieSection: {
    height: 400,
    width: 380,
    borderTopColor: "black",
    borderTopWidth: 5,
    borderBottomColor: "black",
    borderBottomWidth: 15,
  },
  movieSectionTop: {
    flex: 2,
  },
  movieTitle: {
    fontSize: 26,
    color: "white",
    marginLeft: 20,
    marginTop: 5,
  },
  movieInfos: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  movieInfosText: { marginRight: 10, color: "grey" },

  movieSectionCenter: {
    flexDirection: "row",
    flex: 4,
    marginRight: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  moviePoster: {
    height: 180,
    marginLeft: 20,
    marginRight: 10,
    flex: 1,
  },
  synopsisSection: { flex: 2 },
  synopsisText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  synopsisButton: {
    marginTop: 20,
    height: 30,
    backgroundColor: "#479bd8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  movieSectionBottom: {
    flexDirection: "row",
    flex: 3,
    paddingTop: 30,
    // justifyContent: "center",
  },
  rating: {
    flex: 1,
    alignItems: "center",
  },
  imdbScore: {
    flexDirection: "row",
  },
  metascoreGreenSquare: {
    height: 30,
    width: 30,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingWhiteText: {
    marginTop: 5,
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  ratingGreyText: {
    marginTop: 5,
    color: "grey",
    fontSize: 10,
  },

  castingSection: {
    height: 500,
  },

  castingSectionTop: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  castingSectionCenter: {
    flexDirection: "row",
  },
  actorPictures: {
    width: 140,
    height: 240,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  castingActors: {
    width: 140,
    height: 300,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#1A2831",
    borderRadius: 10,
  },

  castingActorsText: {
    marginTop: 10,
    marginLeft: 10,
  },
  castingTitle: {
    color: "white",
  },

  castingNames: {
    color: "grey",
  },
  castingSectionBottom: {
    flex: 3,
  },
});
