document.getElementById("send-message").addEventListener("click", function() {
    var field1 = encodeURIComponent(document.getElementById("field1").value);
    var field2 = encodeURIComponent(document.getElementById("field2").value);
    var message = "Nombre y Apellido: " + decodeURIComponent(field1) + "\nProductos: " + decodeURIComponent(field2);
    window.open("https://wa.me/+584123458058?text=" + encodeURIComponent(message));
  });