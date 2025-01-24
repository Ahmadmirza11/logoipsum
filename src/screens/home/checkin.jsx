import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { launchCamera, launchImageLibrary } from "react-native-image-picker" // Import image picker

const Checkin = () => {
  const navigation = useNavigation()
  const [scheduleDate, setScheduleDate] = useState(new Date())
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Show the Date Picker
  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  // Hide the Date Picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  // Handle the selected date and time
  const handleDateConfirm = (date) => {
    setScheduleDate(date)
    hideDatePicker()
  }

  // Format the date and time
  const formattedDate = scheduleDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
  const formattedTime = scheduleDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })

  // Function to launch the camera for image capture
  const handleCameraLaunch = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User canceled image picker')
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage)
        } else {
          const source = { uri: response.uri }
          setSelectedImage(source)
        }
      }
    )
  }

  // Function to launch the gallery for image selection
  const handleGalleryLaunch = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User canceled image picker')
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage)
        } else {
          const source = { uri: response.uri }
          setSelectedImage(source)
        }
      }
    )
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="close" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.nextText}>Schedule Post</Text>
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <Image source={require("../../images/profile.png")} style={styles.userImage} />
        <View style={styles.txt}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userLocation}>New York, NY</Text>
        </View>
      </View>

      {/* Input Field */}
      <TextInput style={styles.input} placeholder="What's on your mind" placeholderTextColor="#999" multiline />

      {/* Background Image */}
      <View>
        <Image source={require("../../images/restorant.png")} style={styles.publicIcon} />
      </View>

      {/* Schedule Date and Time */}
      <View style={styles.scheduleContainer}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.scheduleText}>
            Scheduled for {formattedDate} at {formattedTime}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Image Preview (if any) */}
      {selectedImage && <Image source={selectedImage} style={styles.selectedImage} />}

      {/* Bottom Row for Icons */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.icon} onPress={handleGalleryLaunch}>
          <Image source={require("../../images/Image.png")} />
        </TouchableOpacity>
        {/* Image picker (Camera Icon) */}
        <TouchableOpacity style={styles.icon} onPress={handleCameraLaunch}>
          <Image source={require("../../images/Camera.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} >
          <Image source={require("../../images/Location.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image source={require("../../images/Tag.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate("Location")} >
          <Image source={require("../../images/Grinning.png")} />
        </TouchableOpacity>
      </View>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        date={scheduleDate}
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

export default Checkin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 19,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  input: {
    color: "black",
  },
  btn: {
    backgroundColor: "#739877",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 16,
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  txt: {
    marginLeft: 10,
    flex: 1,
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  publicIcon: {
    width: "100%",
    height: 190,
    position: "absolute",
    top: 0,
    left: 0,
  },
  row: {
    position: "absolute",
    bottom: 20, // Adjusted to make room for the schedule text
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    padding: 10,
  },
  scheduleContainer: {
    position: "absolute",
    bottom: 60, // Positioned above the icons
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: "center",
  },
  scheduleText: {
    fontSize: 14,
    color: "#666",
  },
  selectedImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  userLocation: {
    fontSize: 14,
    color: "#666",
  },
})
