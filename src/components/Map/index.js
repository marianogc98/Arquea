import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Marcador from '../../images/Marcador.png';
import L from 'leaflet';
import "./style.css";
import "leaflet/dist/leaflet.css";

const Icon = new L.Icon({
  iconUrl: Marcador,
  iconRetinaUrl: Marcador,
  iconAnchor: [20, 40],
  popupAnchor: [-15, -40],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize:  [10, 18]
});

const locations = [
  {'name': 'El Club de la milanesa', 'position': [-31.414598849907918, -64.16876937067678]},
  {'name': 'El Club de la milanesa', 'position': [-31.427884161862114, -64.18429574507391]},
  {'name': 'El Club de la milanesa', 'position': [-31.452020828859673, -64.17489223157912]},
  {'name': 'El Club de la milanesa', 'position': [-31.360110605017297, -64.23815820274675]},
  {'name': 'El Club de la milanesa', 'position': [-31.37155811728646, -64.27679547391105]},
  {'name': 'Lomiteria Plan Beef', 'position': [-31.41834653721429, -64.19632547760463]},
  {'name': 'Lomiteria Plan Beef', 'position': [-31.410613994543635, -64.21201450274515]},
  {'name': 'Wort', 'position': [-31.373968157819263, -64.23294871624033]},
  {'name': 'Fruta', 'position': [-31.363162157626142, -64.2363165432284]},
  {'name': 'Locos por la muzza', 'position': [-31.373381778478787, -64.21666781624016]},
  {'name': 'Pizzeria Popular', 'position': [-31.371539796524527, -64.27684911808785]},
  {'name': 'Hands Burger', 'position': [-31.383523556514586, -64.24022451808752]},
  {'name': 'Bodegán', 'position': [-31.365624476634295, -64.23779913158198]},
  {'name': 'Homies', 'position': [-31.388914045387377, -64.1871983104531]},
  {'name': 'Dino', 'position': [-31.36708843008162, -64.21925800089902]},
  {'name': 'Polser Burger & Dogs', 'position': [-31.38999770001639, -64.18523426041648]},
  {'name': 'Kantine', 'position': [-31.391072755147963, -64.18410820274578]},
  {'name': 'Ron Damon', 'position': [-31.39057527174869, -64.18541890274578]},
  {'name': 'Random Bar', 'position': [-31.391190870719466, -64.18570693158118]},
  {'name': 'Fusión Internacional', 'position': [-31.390292710519585, -64.18815840459331]},
  {'name': 'Mariachi', 'position': [-31.397874172099197, -64.18710088925161]},
  {'name': 'Promo casa de comidas', 'position': [-31.396127905970285, -64.18862191623954]},
  {'name': 'Media Pinta', 'position': [-31.39331340663416, -64.18449373158116]},
  {'name': 'Septiembre', 'position': [-31.41428824414237, -64.16912606041576]},
  {'name': 'Diamond Burger', 'position': [-31.412085668547522, -64.16481363158046]},
  {'name': 'D´Lucas Gourmet', 'position': [-31.411754086205725, -64.16418588925121]},
  {'name': 'General Bar & Beer', 'position': [-31.41377098758293, -64.17102153158034]},
  {'name': 'Armenian Food', 'position': [-31.411186216295988, -64.17306508925124]},
  {'name': 'Pizzeria Popular', 'position': [-31.416931869491943, -64.16990503158034]},
  {'name': 'Iberia', 'position': [-31.416440221422075, -64.16733327390966]},
  {'name': 'Mr. Pizza', 'position': [-31.41584051322082, -64.16632097390958]},
  {'name': 'Boston Burger', 'position': [-31.415973625351384, -64.16608594692171]},
  {'name': 'Bocados', 'position': [-31.415463357016186, -64.16886277390962]},
  {'name': 'La Kermes', 'position': [-31.415554625310747, -64.16876858925107]},
  {'name': 'Boss Burger', 'position': [-31.41622358925772, -64.16741750459252]},
  {'name': 'Blum Beer and Pizzas', 'position': [-31.41377528758575, -64.16475741808652]},
  {'name': 'Hands Burger', 'position': [-31.412687543205553, -64.16146857390984]},
  {'name': 'El pollo de tres patas', 'position': [-31.412252681399803, -64.16106103158049]},
  {'name': 'Oklahoma', 'position': [-31.41166972493275, -64.15804770274515]},
  {'name': 'Patria MIA', 'position': [-31.411421798951828, -64.15711496041578]},
  {'name': 'Lomo Club', 'position': [-31.4048333242679, -64.15933218925146]},
  {'name': 'Mae Bar', 'position': [-31.40783309720186, -64.16531757390987]},
  {'name': 'Mordisco', 'position': [-31.42817251682836, -64.18649908925067]},
  {'name': 'La Pata', 'position': [-31.42430126046412, -64.17980597390934]},
  {'name': 'Lunfardo', 'position': [-31.424585581395746, -64.17805561808615]},
  {'name': 'Gohan House', 'position': [-31.42418061289101, -64.17698030274465]},
  {'name': 'La Herradura', 'position': [-31.423709670812773, -64.17707327390937]},
  {'name': 'Shasho', 'position': [-31.430939763054536, -64.18964090274444]},
  {'name': 'Pizzeria Desy', 'position': [-31.43072269061101, -64.18911636041524]},
  {'name': 'UP! Lomitos', 'position': [-31.429510026668407, -64.18815630274455]},
  {'name': 'Quedate Pancho', 'position': [-31.420453447751036, -64.18976815856809]},
  {'name': 'UP! Lomitos', 'position': [-31.429510026668407, -64.18815630274455]},
  {'name': 'Le Poulet', 'position': [-31.423541715473522, -64.1902471739094]},
  {'name': 'Doña Julieta Cocina', 'position': [-31.423554460172703, -64.19010170274476]},
  {'name': 'City Todo Casero', 'position': [-31.42582279346673, -64.19096884433098]},
  {'name': 'Polser Burgers & Dogs', 'position': [-31.42593226620454, -64.19071399667338]},
  {'name': 'Quedate Pancho', 'position': [-31.42666263639969, -64.18847878925068]},
  {'name': "Clarke's Irish Bar", 'position': [-31.426382206248512, -64.18502533158008]},
  {'name': 'Premium Food', 'position': [-31.424308081395868, -64.18437150274475]},
  {'name': 'Othila beer and food', 'position': [-31.423455460134154, -64.18435113158009]},
  {'name': 'El Cacique burger & beer', 'position': [-31.41930074350554, -64.19098264284924]},
  {'name': 'Betos Lomos', 'position': [-31.41898493715183, -64.19198190274493]},
  {'name': '8mm. Resto de Película', 'position': [-31.41894773715538, -64.19257197390952]},
  {'name': 'Pizzeria Dogatto', 'position': [-31.41826298139786, -64.19549237390952]},
  {'name': 'Fuga RestoBar', 'position': [-31.42563330588322, -64.19201887390928]},
  {'name': 'Lo del Turco', 'position': [-31.425416850656735, -64.19199750459221]},
  {'name': 'Khausan Thai Food', 'position': [-31.42502151590644, -64.19215597390934]},
  {'name': 'Patio Guemes', 'position': [-31.424854450327445, -64.19231864507395]},
  {'name': 'Patagonia', 'position': [-31.424476008436134, -64.19253506041538]},
  {'name': 'Barrio Brujo', 'position': [-31.424439970955216, -64.19193560274468]},
  {'name': 'Marginal', 'position': [-31.424609591806835, -64.19114807390932]},
  {'name': 'The Bōttom', 'position': [-31.424563815772576, -64.19113734507395]},
  {'name': 'Che Frida', 'position': [-31.42451970533987, -64.19147128925086]},
  {'name': 'Bajo Cielo Patio Bar', 'position': [-31.423916436668726, -64.19164680274473]},
  {'name': 'Paseo Kermes', 'position': [-31.424089960381668, -64.19277756041542]},
  {'name': 'Dos en la ciudad', 'position': [-31.42380982611371, -64.19190873158017]},
  {'name': 'Posta!', 'position': [-31.423488260146883, -64.19176166041544]},
  {'name': 'Pinton Bar', 'position': [-31.423647181396113, -64.19184430274477]},
  {'name': 'Caelia', 'position': [-31.423328104758614, -64.1911928180862]},
  {'name': 'Garden', 'position': [-31.423268736732137, -64.19073864507403]},
  {'name': 'Fauna', 'position': [-31.4243418157075, -64.18896067575693]},
  {'name': 'Cachivache Bar', 'position': [-31.424367260489852, -64.19324053158005]},
  {'name': 'La Nueva Esquina', 'position': [-31.423953736665037, -64.19334756041545]},
  {'name': 'Valhalla Skål Bar', 'position': [-31.423317803307103, -64.1930237918251]},
  {'name': 'Pétalos del sol', 'position': [-31.41934791424672, -64.19032768925094]},
  {'name': 'La Olivia Italiana', 'position': [-31.4504629760296, -64.16865983157925]},
  {'name': 'De Culto', 'position': [-31.480378032114338, -64.1683979604136]},
  {'name': 'Pizzeria La Juana', 'position': [-31.442890674552704, -64.17655354507338]}
]

const Map = () => {
  return (
    <div id="mapid">
      <h3>Puntos de Recolección</h3>
      <MapContainer center={[-31.417, -64.183]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
        />
        {locations.map((location) => (
          <Marker icon={Icon} position={location.position}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

/* original  
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/
export default Map;
