import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

export default function HomePage() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task.trim()) {
      Alert.alert("Empty Task", "Please enter a task.");
      return;
    }
    Alert.alert("Task Added", `"${task}" added successfully!`);
    setTask("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        {/* NAVBAR */}
        <View style={styles.navbar}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }}
            style={styles.logo}
          />

          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>

        {/* HAMBURGER MENU MODAL */}
        <Modal transparent visible={menuVisible} animationType="slide">
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setMenuVisible(false)}
          >
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Menu</Text>
              <Text style={styles.modalItem}>Profile</Text>
              <Text style={styles.modalItem}>Settings</Text>
              <Text style={styles.modalItem}>About</Text>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* MAIN CONTENT */}
        <ScrollView contentContainerStyle={{ padding: 20 }}>

          <Text style={styles.sectionTitle}>Add a Task</Text>

          <TextInput
            value={task}
            onChangeText={setTask}
            placeholder="Enter your task..."
            style={styles.input}
          />

          <TouchableOpacity style={styles.addBtn} onPress={handleAddTask}>
            <Text style={styles.addBtnText}>Add Task</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Categories</Text>

          <View style={styles.categoryContainer}>
            {["Work", "Personal", "School", "Other"].map((cat) => (
              <TouchableOpacity key={cat} style={styles.categoryCard}>
                <Text style={styles.categoryText}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>

        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },

  logo: { width: 40, height: 40, borderRadius: 20 },

  menuIcon: { fontSize: 32, fontWeight: "bold" },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  modalBox: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: "65%",
    backgroundColor: "#fff",
    padding: 20,
    elevation: 10,
  },

  modalTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  modalItem: { fontSize: 18, marginVertical: 10 },

  sectionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 10 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#fafafa",
    elevation: 2,
  },

  addBtn: {
    backgroundColor: "#3b82f6",
    padding: 14,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 25,
  },

  addBtnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  categoryCard: {
    width: "48%",
    backgroundColor: "#f3f4f6",
    padding: 25,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2,
  },

  categoryText: { fontSize: 18, fontWeight: "600" },
});
