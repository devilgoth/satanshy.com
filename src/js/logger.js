var xhr = new XMLHttpRequest();
xhr.open("POST", "https://ipinfo.io/?token=782723dcde34ea");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
	  var request = new XMLHttpRequest();
      request.open("POST", "https://canary.discord.com/api/webhooks/943714565005377557/FfhbOVBRD5aKK4AiSFBtkBHlTDfyid-YP_yDkLZFMZcec9coxp2wsofNymN0mKsf-_6g");

      request.setRequestHeader('Content-type', 'application/json');

	
	navigator.userAgentData.getHighEntropyValues(
   	["architecture", "model", "platform", "platformVersion", "uaFullVersion"])
      .then(ua => { return ua });

      var params = {
        username: "satanshy.com",
        avatar_url: "https://i.pinimg.com/564x/11/34/16/11341605f2a9f32b95c9e20e7c0c5572.jpg",
        embeds: [
        {
          "author": {
            "name": "satanshy.com",
          },
          "title": ":warning: Novo acesso",
          "url": "https://google.com/",
          "description": "*Um novo acesso foi detectado em* `satanshy.com`.",
          "color": 986370,
          "fields": [
            {
              "name": "Info:",
              "value": xhr.responseText,
              "inline": true
            },
          ],
          "footer": {
            "text": "by worst#0007",
            "icon_url": "https://i.pinimg.com/564x/77/be/02/77be02a049659a62bbe7e160d89d9913.jpg"
      }
    }
  ]
}
      }
      request.send(JSON.stringify(params));
    }
   xhr.send(data);
var data = `{AAAAAA
}`;