import { Image, Pressable, Text, View } from "react-native";
import styles from './TarjetaNivelDetalleStyles.js';
import { useContext } from "react";
import { CartContext } from "../../../../Context/Context.jsx";
import { FontAwesome } from '@expo/vector-icons';

const TarjetaNivelDetalle = ({ setModalVisible, nivel, tiempo, navigation, ejercicio, handlePresentModalPress, numero, index }) => {
    const { closed, setClosed, userRegistro, idiomaActual } = useContext(CartContext);

    const navegarDetalleVideo = () => {
        if (closed) {
            navigation.navigate("DetalleNivelVideo", { ejercicio });
        } else {
            setModalVisible();
        }
    };

    return (
        <View style={styles.container__tarjetaNivelDetalle}>
            <Pressable onPress={navegarDetalleVideo} style={styles.container__tarjetaNivel}>
                {/* Contenedor superior: número + texto + estrellas */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Izquierda: número y textos */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginRight: 10 }}>
                            <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>{numero}</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>{ejercicio.nombre}</Text>
                            <Text style={styles.texth2}>{ejercicio.duracion}</Text>
                        </View>
                    </View>

                    {
                        
<View style={{ flexDirection: 'row', gap: 3, position:"absolute", left:250 }}>
  {closed ? (
    <>
      {ejercicio.estrellas.completas.map((_, i) => (
        <FontAwesome key={`star-full-${i}`} name="star" size={26} color="white" />
      ))}
      {ejercicio.estrellas.vacias.map((_, i) => (
        <FontAwesome key={`star-empty-${i}`} name="star-o" size={26} color="white" />
      ))}
    </>
  ) : (
 <View style={styles.container__bloqueado}>
                        <View style={{ width: "100%", alignItems: "center" }}>
                            <Image
                                width={26}
                                height={26}
                                source={{ uri: "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1747228419/candado_2_oloewu.png" }}
                            />
                        </View>
                        {idiomaActual === "espana" && <Text style={bloqueadoTextStyle}>Bloqueado</Text>}
                        {idiomaActual === "italia" && <Text style={bloqueadoTextStyle}>Bloccato</Text>}
                        {idiomaActual === "francia" && <Text style={bloqueadoTextStyle}>Bloqué</Text>}
                        {idiomaActual === "bandera" && <Text style={bloqueadoTextStyle}>Blockiert</Text>}
                        {idiomaActual === "inglaterra" && <Text style={bloqueadoTextStyle}>Blocked</Text>}
                        {idiomaActual === "paisesBajos" && <Text style={bloqueadoTextStyle}>Geblokkeerd</Text>}
                        {idiomaActual === "portugal" && <Text style={bloqueadoTextStyle}>Bloqueado</Text>}
                        {idiomaActual === "estadosUnidos" && <Text style={bloqueadoTextStyle}>Blocked</Text>}
                    </View>  )}
</View>
                    }
                </View>

                {/* Estado bloqueado/desbloqueado */}
                {!closed ? (
                    <View style={styles.container__bloqueado}>
                        
                    </View>
                ) : (
                    <View style={{ flexDirection: "row", gap: 5 }} />
                )}
            </Pressable>
        </View>
    );
};

const bloqueadoTextStyle = {
    color: "white",
    fontFamily: 'NunitoSans_400Regular',
    letterSpacing: 1,
};

export default TarjetaNivelDetalle;
