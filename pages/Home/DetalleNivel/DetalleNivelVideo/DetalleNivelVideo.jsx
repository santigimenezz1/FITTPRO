import React, { useState, useEffect, useContext } from "react";
import { View, Image, ScrollView, SafeAreaView } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./DetalleNivelVideo"; 
import { RFValue } from "react-native-responsive-fontsize";
import WebView from "react-native-webview";
import { CartContext } from "../../../../Context/Context";

const DetalleNivelVideo = () => {
  const route = useRoute();
  const { ejercicio } = route.params;
  const navigation = useNavigation();
  const [videoDuration, setVideoDuration] = useState(0);
  const [botonActive, setBotonActive] = useState("Entrenamiento");
  const { closed, setClosed, userRegistro, idiomaActual } = useContext(CartContext);

  useEffect(() => {
    navigation.setOptions({ title: ejercicio.nombre });
    setVideoDuration(ejercicio.duracion);
  }, [navigation, ejercicio]);

  const ej = ejercicio.videoURL
  console.log(ejercicio.URL)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, backgroundColor: "black", paddingBottom: RFValue(50) }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 30 }}>
            
            <View style={{ width: "80%", marginBottom: 10, flexDirection: "row-reverse", justifyContent: "space-between" }}>
              <View />
            </View>

            <Text style={{ color: "white", letterSpacing: 2, fontSize: 25, marginBottom: 10 }}>
              {botonActive}
            </Text>

            {/* Video Container */}
            <View style={{ width: "90%", height: 200 }}>
        <WebView
  source={{
    uri: `https://player.vimeo.com/video/${
      idiomaActual === 'espana' ? ejercicio.videoUrl :
      idiomaActual === 'italia' ? ejercicio.videoUrlItalia :
      idiomaActual === 'francia' ? ejercicio.videoUrlFrancia :
      idiomaActual === 'bandera' ? ejercicio.videoUrlAlemania :
      idiomaActual === 'estadosUnidos' ? ejercicio.videoUrlEstadosUnidos :
      idiomaActual === 'inglaterra' ? ejercicio.videoUrlEstadosUnidos :
      idiomaActual === 'paisesBajos' ? ejercicio.videoUrlPaisesBajos :
      idiomaActual === 'portugal' ? ejercicio.videoUrlPortugal :
      ejercicio.videoUrl// fallback
    }?controls=1&autoplay=1`
  }}
  style={{ width: "100%", height: "100%" }}
  allowsFullscreenVideo={true}
  javaScriptEnabled={true}
  mediaPlaybackRequiresUserAction={false}
/>

            </View>

            <View style={{ width: RFValue(300), borderWidth: 3, borderColor: "#34cee6", marginTop: 20 }}>
                <View style={{position:"absolute", left:"5%", top:"20%",zIndex:10, display:"flex", gap:7}}>
<Text style={{ color: "white", fontSize: RFValue(18), marginTop: 4, fontFamily: "System" }}>
  Repeticiones: <Text style={{ color: "#34cee6" }}>5</Text>
</Text>
<Text style={{ color: "white", fontSize: RFValue(18), marginTop: 4, fontFamily: "System" }}>
  Tiempo de cada repeticion: <Text style={{ color: "#34cee6" }}>30s</Text>
</Text>
<Text style={{ color: "white", fontSize: RFValue(18), marginTop: 4, fontFamily: "System" }}>
  Nivel de dificultad: <Text style={{ color: "#34cee6" }}>Intermedio</Text>
</Text>
                </View>
              <Image source={{ uri: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1748433826/imagen_julian_de_prueba_iddzwe.png" }} style={{ width: "100%", height: RFValue(150), opacity:0.6 }} />
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetalleNivelVideo;
