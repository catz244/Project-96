var firebaseConfig = {
      apiKey: "AIzaSyBk_4heVlwGDYGVL-iE9j-VbAZS8kNMZGI",
      authDomain: "kwitter-35ec2.firebaseapp.com",
      databaseURL: "https://kwitter-35ec2-default-rtdb.firebaseio.com",
      projectId: "kwitter-35ec2",
      storageBucket: "kwitter-35ec2.appspot.com",
      messagingSenderId: "544197924140",
      appId: "1:544197924140:web:9f9bf85e7dafa5ea0f0889",
      measurementId: "G-9Q720937NE"
};
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code 
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send(){
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name : username, message : message, like : 0});
      document.getElementById("msg").value = " ";
}

function back(){
      window.location = "kwitter_room.html";
}
