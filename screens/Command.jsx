import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles/command.styles";

const Icons = (props) => (
  <Icon name={props.name} size={30} color={"red"} style={props.style} />
);

export default function Command() {
  return (
    <View style={styles.container}>
      <Navigation />
      <View style={styles.navbar}>
        <>
          <Icons name="bars" />
        </>
        <>
          <Icons name="user" />
        </>
      </View>
      <Text style={styles.titleText}>Nouvelles Commandes</Text>
      <ScrollView>
        <View style={styles.commandContainer}>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Pizza" + ":"}</Text>
            <Text style={styles.commandPrice}>{"1000" + "f"}</Text>
          </View>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Riz" + ":"}</Text>
            <Text style={styles.commandPrice}>{"1500" + "f"}</Text>
          </View>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Cocktail" + ":"}</Text>
            <Text style={styles.commandPrice}>{"500" + "f"}</Text>
          </View>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Contact" + ":"}</Text>
            <Text style={styles.commandPrice}>{"97432861"}</Text>
          </View>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Quartier" + ":"}</Text>
            <Text style={styles.commandPrice}>{"Adidogome Assiyeye"}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.statusBtn}>
              <Text style={styles.statusBtnText}>Deja fait</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.commandContainer}>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Pizza" + ":"}</Text>
            <Text style={styles.commandPrice}>{"1000" + "f"}</Text>
          </View>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Riz" + ":"}</Text>
            <Text style={styles.commandPrice}>{"1500" + "f"}</Text>
          </View>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Cocktail" + ":"}</Text>
            <Text style={styles.commandPrice}>{"500" + "f"}</Text>
          </View>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Contact" + ":"}</Text>
            <Text style={styles.commandPrice}>{"97432861"}</Text>
          </View>
          <View style={styles.commandOption}>
            <Text style={styles.fontSize20}>{"Quartier" + ":"}</Text>
            <Text style={styles.commandPrice}>{"Adidogome Assiyeye"}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.statusBtn}>
              <Text style={styles.statusBtnText}>Deja fait</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export function Navigation() {
  return (
    <View style={styles.Navigation}>
      <TouchableOpacity style={styles.crossBtn}>
        <Text />
        <Icons name="times" style={styles.cross} />
      </TouchableOpacity>
      <View style={styles.menuList}>
        <TouchableOpacity style={styles.menuItem}>
          <Icons style={styles.itemIcon} name="bell" />
          <Text style={{ ...styles.itemText, color: "#E6A817" }}>
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icons style={styles.itemIcon} name="users" />
          <Text style={styles.itemText}>Employés</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icons style={styles.itemIcon} name="cutlery" />
          <Text style={styles.itemText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icons style={styles.itemIcon} name="comments" />
          <Text style={styles.itemText}>Commentaires</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icons style={styles.itemIcon} name="user-circle-o" />
          <Text style={styles.itemText}>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icons style={styles.itemIcon} name="cogs" />
          <Text style={styles.itemText}>Paramètres</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icons style={styles.itemIcon} name="sign-out" />
          <Text style={styles.itemText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
