//les varibles
var val_tension;
var val_oxy;
var val_cc;
var val_poid;
var val_size;
var val_mc = val_size / val_poid;
var val_temp;
var mqtt;
// var host1 = "192.168.152.52";
// var host = "pfe";
var port = 1883;
var reconnectTimeout = 1000;

function MQTTconnect() {
  console.log("in connect");
  mqtt = new Paho.MQTT.Client("test.mosquitto.org", 8080, "clientjs");

  var options = {
    //connection attempt timeout in seconds
    timeout: 3,
    //Gets Called if the connection has successfully been established
    onSuccess: onConnect,
    //Gets Called if the connection could not be established
    onFailure: function (message) {
      alert("Connection failed: " + message.errorMessage);
    },
  };
  mqtt.onConnectionLost = onConnectionLost;
  mqtt.onMessageArrived = onMessageArrived;
  mqtt.onFailure = onFailure;
  mqtt.connect(options);
}

function onFailure(message) {
  console.log("Failed");
  $("#status").val("Connection failed: " + message.errorMessage + "Retrying");
  setTimeout(MQTTconnect, reconnectTimeout);
}

function onConnect() {
  mqtt.subscribe("ctrl");
  mqtt.subscribe("oxy");
  mqtt.subscribe("temp");
  mqtt.subscribe("tensio");
  mqtt.subscribe("poid");
  mqtt.subscribe("size");
  mqtt.subscribe("cc");
}

function onConnectionLost(responseObject) {
  console.log("Connection Lost");
  setTimeout(MQTTconnect, reconnectTimeout);
  $("#status").val(
    "connection lost: " + responseObject.errorMessage + "Reconnecting"
  );
}

function onMessageArrived(message) {
  var topic = message.destinationName;
  var payload = message.payloadString;
  console.log("onMessageArrived:" + message.payloadString);
  if (topic == "ctrl") {
    if (payload == "Hello") {
      $("#display").html($("#display").html() + "<br>Hello Server!<br>");
    }
  }

  if (topic == "oxy") {
    persistDataToLocalStorage("oxy", message.payloadString);
    val_oxy = parseInt(payload);
  }
  if (topic == "cc") {
    persistDataToLocalStorage("cc", message.payloadString);
    val_cc = parseInt(payload);
  }
  if (topic == "size") {
    persistDataToLocalStorage("size", message.payloadString);
    val_size = parseInt(payload);
  }
  if (topic == "tensio") {
    persistDataToLocalStorage("tensio", message.payloadString);
    val_tension = parseInt(payload);
  }
  if (topic == "temp") {
    persistDataToLocalStorage("temp", message.payloadString);
    val_temp = parseInt(payload);
  }
  if (topic == "poid") {
    persistDataToLocalStorage("poid", message.payloadString);
    val_poid = parseInt(payload);
  }
}

$(document).ready(function () {
  MQTTconnect();
});

function getValOxy() {
  message = new Paho.MQTT.Message("oxy");
  message.destinationName = "ctrl";
  mqtt.send(message);
}
function getValpoid() {
  message = new Paho.MQTT.Message("poid");
  message.destinationName = "ctrl";
  mqtt.send(message);
}
function getValsize() {
  message = new Paho.MQTT.Message("size");
  message.destinationName = "ctrl";
  mqtt.send(message);
}
function getValtensio() {
  message = new Paho.MQTT.Message("tensio");
  message.destinationName = "ctrl";
  mqtt.send(message);
}
function getValtemp() {
  message = new Paho.MQTT.Message("temp");
  message.destinationName = "ctrl";
  mqtt.send(message);
}

function getVals(msg) {
  message = new Paho.MQTT.Message(msg);
  message.destinationName = "ctrl";
  mqtt.send(message);
}

// const client = mqtt.connect('mqtt://192.168.152.52');
// 		const h1 = document.getElementById('message');

// 		client.on('connect', function() {
// 			console.log('Connecté au broker MQTT');
// 			client.subscribe('ma_topic');
// 		});

// 		client.on('message', function(topic, message) {
// 			console.log('Message reçu:', message.toString());
// 			h1.textContent = message.toString();
// 		});

// 		function envoyerMessage() {
// 			const message = 'Hello from JavaScript!';
// 			client.publish('ma_topic', message);
// 			console.log('Message envoyé:', message);
// 		}

function lireson(msg) {
  const audio = new Audio("../src/audios/" + msg);
  audio.muted = false;
  audio.play();
}

// modifier les valeurs en ficher "client.json"
