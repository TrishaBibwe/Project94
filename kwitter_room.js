
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig={
apiKey: "AIzaSyAlsvIPcV6IXtfF8n2uUHSx1slpb6bRuj8",
authDomain: "project93-f2e5d.firebaseapp.com",
databaseURL: "https://project93-f2e5d-default-rtdb.firebaseio.com",
projectId: "project93-f2e5d",
storageBucket: "project93-f2e5d.appspot.com",
messagingSenderId: "28844961275",
appId: "1:28844961275:web:76d8e2dee81bd23dc3ef5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
