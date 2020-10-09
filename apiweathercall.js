function getApiData(apiURL) {
  var request = new XMLHttpRequest();
  request.open("GET", apiURL, true);
  request.send();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.response;
      var myData = JSON.parse(data);
      mostrarClima(myData);
    }
  };
}
